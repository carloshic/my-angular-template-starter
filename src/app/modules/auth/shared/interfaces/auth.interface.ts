export interface IAuth {
  _id: string;
  username: string;
  name?: string;
  lastName?: string;
  email?: string;
  roles: string[];
}

export interface ILogin {
  username: string;
  password: string;
}
