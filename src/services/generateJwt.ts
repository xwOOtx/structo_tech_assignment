import jwt from 'jsonwebtoken';
import { UserModel } from '../user/user.model';


export const generateJwt = (user: UserModel) => {
  const token = jwt.sign({ _id: user._id, user: user.username },
    process.env.JWT_SECRET_KEY!,
    {
      expiresIn: "15m"
    });

  return token;
};
