import { Request, Response } from 'express';
import { ITariffPlan } from '../interface/tariffPlan';

export const getTariffPlan = (req: Request, res: Response) => {
  res.statusCode = 200;
  res.send([]);
};

export const addTariffPlan = (req: Request, res: Response) => {
  res.statusCode = 201;
  const { name, id, price }: ITariffPlan = req.body;
  res.send({ name, id, price });
};

export const addChannel = (req: Request, res: Response) => {
  res.statusCode = 200;
  const tariffPlanId: string = req.params.id;
  const { channelId }: ITariffPlan = req.body;
  res.send({ channelId, tariffPlanId });
};
