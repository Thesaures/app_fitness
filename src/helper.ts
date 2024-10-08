import {
  EMAIL_REGEX,
  CAPITAL_REGEX,
  SYMBOL_REGEX,
  NUMBER_REGEX,
  USERNAME_REGEX,
  CHECK_USERNAME,
} from './constants/Constants';
interface inputs {
  name: string;
  number: string;
  email: string;
  password: string;
  checkBox: boolean;
}
interface login {
  email: string;
  password: string;
}

export function fieldCheck(prop: inputs) {
  const {name, number, email, password, checkBox} = prop;
  console.log('entered : ', name, number, email, password, checkBox);
  let message = '';
  let field = '';
  if (!name && !number && !email && !password && !checkBox) {
    field = 'all';
    message = 'fill all the fields!';
    console.log('entered one');
  } else if (name == '') {
    field = 'name';
    message = 'Enter the name!';
  } else if (name.length < 6) {
    field = 'name';
    message = 'name must contain 6 characters!';
  } else if (!CHECK_USERNAME.test(name)) {
    field = 'name';
    message = 'Enter valid username!';
  } else if (number == '') {
    field = 'number';
    message = 'Enter the number!';
  } else if (number.length < 10) {
    field = 'number';
    message = 'Enter valid phone number!';
  } else if (email == '') {
    field = 'email';
    message = 'Enter the email!';
  } else if (!EMAIL_REGEX.test(email)) {
    field = 'email';
    message = 'Enter valid email!';
  } else if (password == '') {
    field = 'password';
    message = 'Enter the password!';
  } else if (!CAPITAL_REGEX.test(password)) {
    field = 'password';
    message = 'password must contain capital letter!';
  } else if (!SYMBOL_REGEX.test(password)) {
    field = 'password';
    message = 'password must contain a special character!';
  } else if (!NUMBER_REGEX.test(password)) {
    field = 'password';
    message = 'password must contain numbers!';
  } else if (password.length < 8) {
    field = 'password';
    message = 'password must contain 8 characters !';
  } else if (!checkBox) {
    field = 'check';
    message = 'check the box !';
  }
  return {message, field};
}

export function checkLoginFields(props: login) {
  const {email, password} = props;
  let message = '';
  let field = '';
  if (email == '') {
    field = 'email';
    message = 'Enter the email!';
  } else if (!EMAIL_REGEX.test(email)) {
    field = 'email';
    message = 'Enter valid email!';
  } else if (password == '') {
    field = 'password';
    message = 'Enter the password!';
  } else if (!CAPITAL_REGEX.test(password)) {
    field = 'password';
    message = 'password must contain capital letter!';
  } else if (!SYMBOL_REGEX.test(password)) {
    field = 'password';
    message = 'password must contain a special character!';
  } else if (!NUMBER_REGEX.test(password)) {
    field = 'password';
    message = 'password must contain numbers!';
  } else if (password.length < 8) {
    field = 'password';
    message = 'password must contain 8 characters !';
  }
  return {message, field};
}

interface daraarray {
  index: string;
  header: string;
  minute: number;
  hour: number;
  day: number;
}
interface updated {
  time: number;
  tasks: daraarray[];
}
export function updatingTask(
  dataArray: daraarray[],
  setNewDataArray,
  newDataArray,
) {
  dataArray.map(task => {
    console.log('this is task', task);
    setNewDataArray(prevData => {
      console.log('this is data', prevData);
    });
  });

  return newDataArray;
}
export function phoneNumber (value:string){
      if(value.length < 10){
        return 'Enter valid number'
      }
      return true
}