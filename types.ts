export interface RegisterForm {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface LoginForm {
  username: string;
  password: string;
}

export interface User {
  _id: string;
  loggedIn: boolean;
  username: string;
  firstName: string;
  lastName: string;
}
