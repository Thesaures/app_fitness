import instance from '../../../Utils/apiClient';
import { urls } from '../../../Utils/url';
import { userResponse } from '../../../types/common';
type CreateUserProp = {
  username: string;
  email: string;
  password: string;
  role: string;
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

export async function createUser({
  username,
  email,
  password,
  role,
}: CreateUserProp): Promise<ExtendedCreateUserResponse> {
  let success: boolean = false;
  let errorMessage: string = '';
  let statusCode: string = '';
  let createUserResp: createUserResp = defaultCreateUserResp;

  console.log('enetered one');
  console.log('THIS IS INPUT FIELDS in api ', username,email,password,role);
  console.log('entered the try function',urls.register);
  const createUserPayload = {
    email: email,
    password: password,
    user_name: username,
    role: role,
  };

  try {
    console.log('entered the try function',urls.register);


    const createUserResponse = await instance.post(urls.register, createUserPayload);
    // const createUserResponse = await instance.post(`/api/v0/registration`, createUserPayload);
    console.log('entered to function', createUserResponse.data.message);
    statusCode = createUserResponse.status.toString();
    {
      statusCode === '200' ? (success = true) : (success = false);
    }

    createUserResp = createUserResponse.data;
    console.log('RESPONSE', createUserResp);
  } catch (error: any) {
    console.log('Error while user creation in:', error);
    errorMessage = error.message;
  }

  return { success, statusCode, createUserResp, errorMessage };
}
