import express from 'express';
import AdvertController from '../controller/advertController';
import auth from '../middleware/Auth';

const router = express.Router();

router.get('/:property_id', AdvertController.getAdvertById);

export default router;
