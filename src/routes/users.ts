import express from 'express';
import { getAllUsers, getUser } from '../controllers/users';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUser);

const userRoutes = router;
export { userRoutes };
