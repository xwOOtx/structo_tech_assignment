import { Request, Response } from 'express';
import { getErrorMessage } from '../utils/getErrorMessage';
import { getAboutInfo } from './about.service';

export const about = async (req: Request, res: Response) => {
 const info = getAboutInfo();
 res.status(200).send(info);
};