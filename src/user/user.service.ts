import { usersDB } from "./usersDB";
import { IUser } from "./user.interface";

export function login(user: IUser) {
  const foundUser = usersDB.find(x => x.username === user.username);
  if (!foundUser) throw new Error("Unable to login");

  if (foundUser.password !== user.password) throw new Error ("Unable to login")

  /// generate token
  usersDB.map(user => {
    if (user.username === user.username) {
      user.token = "new access token value";
    }
  })

  return foundUser.token
}