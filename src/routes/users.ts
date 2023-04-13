import express from 'express';
import { getAllUsers } from '../controllers/users';

const router = express.Router();

router.get('/', getAllUsers);

const userRoutes = router;
export { userRoutes };
