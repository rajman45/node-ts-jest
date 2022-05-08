import { Router } from 'express';
import { addUser, getBalance, getUser } from '../controller/UserControllers';

const router = Router();

router.get('/', getUser);
router.post('/', addUser);
router.get('/getBalance/:id', getBalance);

export default router;
