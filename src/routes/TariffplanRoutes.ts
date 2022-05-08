import { Router } from 'express';
import {
  addTariffPlan,
  addChannel,
  getTariffPlan
} from '../controller/TariffplanControllers';

const router = Router();

router.get('/', getTariffPlan);
router.post('/', addTariffPlan);
router.post('/addChannel/:id', addChannel);

export default router;
