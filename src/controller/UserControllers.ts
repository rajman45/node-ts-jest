import { RequestHandler, Request, Response } from 'express';
import { IUser } from '../interface/user';

export const getUser = (req: Request, res: Response) => {
  res.statusCode = 200;
  res.send({ message: 'Hello World' });
};

export const addUser = (req: Request, res: Response) => {
  const { name, id }: IUser = req.body;
  res.statusCode = 201;
  res.send({ name, id });
};

export const getBalance = (req: Request, res: Response) => {
  const id: string = req.params.id;
  const balance: number = 0;
  res.statusCode = 200;
  res.send({ balance });
};
