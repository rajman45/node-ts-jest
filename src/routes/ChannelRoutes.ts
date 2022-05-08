import { Router } from 'express';
import { addChannel, getChannel } from '../controller/ChannelControllers';

const router = Router();

router.get('/', getChannel);
router.post('/', addChannel);

export default router;
