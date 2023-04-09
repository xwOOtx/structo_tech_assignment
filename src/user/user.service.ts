import { usersDB } from "./usersDB";
import { IUser } from "./user.interface";
import { generateJwt, generateRefreshToken } from "../auth";

export function login(user: IUser) {
  const username = user.username;
  const foundUser = usersDB.find(x => x.username === username);
  if (!foundUser) throw new Error("Unable to login");

  /// can use bcrypt to compare hash password
  if (foundUser.password !== user.password) throw new Error ("Unable to login")

  /// generate token
  const accessToken = generateJwt(foundUser);
  
  const refreshToken = generateRefreshToken(foundUser);

  /// update DB with tokens info
  usersDB.map(userDB => {
    if (userDB.username === username) {
      userDB.refreshToken = refreshToken;
    }
  })

  return {
    token: {
      accessToken,
      refreshToken
    }
  }
}

export function refreshJwt(user: IUser) {
  const username = user.username;
  const refreshToken = user.refreshToken;

  if (!refreshToken) throw new Error('Invalid refresh token');

  const foundUser = usersDB.find(x => x.username === username);
  
  if (foundUser?.refreshToken !== refreshToken) throw new Error('Invalid refresh token');

  /// generate token
  const accessToken = generateJwt(foundUser);
  
  return {
    token: {
      accessToken,
    }
  }
}
