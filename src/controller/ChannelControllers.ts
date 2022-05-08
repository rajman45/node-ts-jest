import { Request, Response } from 'express';
import { IChannel } from '../interface/channel';

export const getChannel = (req: Request, res: Response) => {
  res.statusCode = 200;
  res.send([]);
};

export const addChannel = (req: Request, res: Response) => {
  const { name, id, price }: IChannel = req.body;
  res.statusCode = 201;
  res.send({ name, id, price });
};
