import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { UserModel } from './user/user.model';

export interface CustomRequest extends Request {
  token: string | JwtPayload;
 }

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) throw new Error();

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY!);
    (req as CustomRequest).token = decoded

    next();
  } catch (error) {
    res.status(401).send('Please authenticate.')
  }
}

export const generateJwt = (user: UserModel) => {
  const token = jwt.sign({ _id: user._id, user: user.username }, 
    process.env.JWT_SECRET_KEY!,
    {
      expiresIn: '5m'
    });
  
  return token;
}