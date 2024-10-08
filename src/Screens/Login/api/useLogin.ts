import instance from '../../../utils/apiClient';
import { urls } from '../../../utils/url';
import { userResponse } from '../../../types/common';
type CreateUserProp = {
  email: string;
  password: string;
};
type createUserResp = {
  message: string;
  role_id: string;
  token: string;
  user_id: string;
  user_name: string;
};
let defaultCreateUserResp: createUserResp = {
  message: '',
  role_id: '',
  token: '',
  user_id: '',
  user_name: '',
};
type ExtendedCreateUserResponse = userResponse & {
  createUserResp: createUserResp;
};

export async function loginUser({
  email,
  password,
}: CreateUserProp): Promise<ExtendedCreateUserResponse> {
  let success: boolean = false;
  let errorMessage: string = '';
  let statusCode: string = '';
  let createUserResp: createUserResp = defaultCreateUserResp;

  const createUserPayload = {
    email: email,
    password: password,
  };

  try {
    const createUserResponse = await instance.post(urls.login, createUserPayload);
    statusCode = createUserResponse.status.toString();
    {
      statusCode === '200' ? (success = true) : (success = false);
    }

    createUserResp = createUserResponse.data;
  } catch (error: any) {
    console.log('Error while user creation in:', error.response.data.message);

    errorMessage = error.response.data.message;
    console.log('errorrrr', errorMessage);
  }

  return { success, statusCode, createUserResp, errorMessage };
}
