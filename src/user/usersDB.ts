import { UserModel } from "./user.model";

/// hardcoded to be replaced with DB

export const usersDB: UserModel[] = [
  {
    _id: "1",
    username: "structo_user",
    password: "NotAStrongPassword"
  },{
    _id: "2",
    username: "kyan",
    password: "SomeHashPassword"
  }
];
