import jwt from "jsonwebtoken";
import { usersDB } from "./usersDB";
import { IUser } from "./user.interface";

export function login(user: IUser) {
  const foundUser = usersDB.find(x => x.username === user.username);
  if (!foundUser) throw new Error("Unable to login");

  /// can use bcrypt to compare hash password
  if (foundUser.password !== user.password) throw new Error ("Unable to login")
  
  /// generate token
  const token = jwt.sign({ _id: foundUser._id, name: foundUser.username }, 
                            process.env.JWT_SECRET_KEY!,
                            {
                              expiresIn: '2h'
                            });
  return {
    token: {
      accessToken: token
    }
  }
}