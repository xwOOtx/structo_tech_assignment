import { Request, Response } from 'express';
import * as userServices from './user.service';
import { getErrorMessage } from '../utils/getErrorMessage';

export const login = async (req: Request, res: Response) => {
  try {
    const foundUser = userServices.login(req.body);
    res.status(200).send(foundUser);
  } catch (error) {
    return res.status(500).send(getErrorMessage(error));
  }
};

export const refreshJwt = async (req: Request, res: Response) => {
  try {
    const token = userServices.refreshJwt(req.body);
    res.status(200).send(token);
  } catch (error) {
    return res.status(401).send(getErrorMessage(error));
  }
}