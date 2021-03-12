import express from 'express';
import User from '../controller/userController';
import {
  agentRegFormValidation,
  loginFormValidation,
} from '../validation/forms.validation';

const router = express.Router();

router.post('/register', agentRegFormValidation, User.createAccount);
router.post('/login', loginFormValidation, User.login);
router.get('/agents', User.getAgents);

export default router;
