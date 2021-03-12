import { validationResult } from 'express-validator';
import PropertySchema from '../models/Property';
import DbOperation from '../database/dbOperation';

const DbQuery = new DbOperation('properties');
class AdvertController {
  //   @post Ads
  static async createAdvert(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    try {
      const { body } = req;
      let property = body;
      const user = req.user;
      const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;
      const fileName = req.file.filename;
      property.user_id = user.id;
      property.mainImage = `${basePath}${fileName}`;
      property = new PropertySchema(property);
      const createProperty = await DbQuery.insertData(property);
      if (!createProperty)
        return res
          .status(500)
          .json({ status: 500, msg: 'Server fail to operate!!' });
      res.status(201).json({
        status: 201,
        msg: 'Property Created Successfull!!!',
        property,
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({
        msg: 'Server Error!!',
      });
    }
  }
  //   edit Adverts
  async editAdvert(req, res) {}
  //  delete Advert
  async deleteAdvert(req, res) {}
  //   get All his adverts
  async getAdvertsByUserId(req, res) {}
  //   get Advert by Id
  async getAdvertById(req, res) {}
  //   extend post expired date
  async extendPostExperedDate(req, res) {}
}

export default AdvertController;
