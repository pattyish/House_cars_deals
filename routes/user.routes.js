import express from 'express';
import User from '../controller/userController';
import {
  agentRegFormValidation,
  loginFormValidation,
} from '../validation/forms.validation';

const router = express.Router();

router.post('/register', agentRegFormValidation, User.createAccount);
// route.post('/login');

export default router;
