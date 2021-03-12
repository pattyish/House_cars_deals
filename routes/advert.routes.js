import express from 'express';
import AdvertController from '../controller/advertController';
import { advertValidation } from '../validation/forms.validation';
import upload from '../middleware/upload.image';
import auth from '../middleware/Auth';

const router = express.Router();

router.post(
  '/property',
  [auth, upload.single('mainImage'), advertValidation],
  AdvertController.createAdvert,
);
// router.post('/login', loginFormValidation, User.login);

export default router;
