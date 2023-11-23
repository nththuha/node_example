import express, { Router } from 'express';
import { findAll } from '../controllers/user.controller';

const router: Router = express.Router();

router.get('/', findAll);

export default router;
