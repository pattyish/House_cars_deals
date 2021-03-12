import express from 'express';
import AdvertController from '../controller/advertController';
import auth from '../middleware/Auth';

const router = express.Router();

router.get('/', AdvertController.getAllAdvert);
router.get('/:property_id', AdvertController.getAdvertById);
router.get('/my/properties', auth, AdvertController.getAdvertsByUserId);
export default router;
