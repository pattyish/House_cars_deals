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
  //   get All his adverts
  static async getAdvertsByUserId(req, res) {
    try {
      const user = req.user;
      const findProperties = await DbQuery.selectByField('user_id', user.id);
      if (!findProperties.count > 0)
        return res.status(400).json({
          status: 400,
          msg: `Property not Found!!!! `,
        });
      res.status(200).json({
        status: 200,
        msg: 'All properties Posted By you',
        property: findProperties.row,
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({
        msg: 'Server Error!!',
      });
    }
  }
  //   @get Advert by Id
  //   Private
  static async getAdvertById(req, res) {
    try {
      const property_id = req.params.property_id;
      const findProperty = await DbQuery.selectByField(
        'property_id',
        property_id,
      );
      if (!findProperty.count > 0)
        return res.status(400).json({
          status: 400,
          msg: `Property not Found!!!! `,
        });
      res.status(200).json({
        status: 200,
        msg: 'Property You are Requesting Founded!!',
        property: findProperty.row[0],
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({
        msg: 'Server Error!!',
      });
    }
  }
  //  getting all adverts
  async getAllAdvert(req, res) {
    try {
      const findProperty = await DbQuery.selectByField(
        'property_id',
        property_id,
      );
      if (!findProperty.count > 0)
        return res.status(400).json({
          status: 400,
          msg: `Property not Found!!!! `,
        });
      res.status(200).json({
        status: 200,
        msg: 'Property You are Requesting Founded!!',
        property: findProperty.row[0],
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({
        msg: 'Server Error!!',
      });
    }
  }
  //   extend post expired date
  async extendPostExperedDate(req, res) {}
  //   edit Adverts
  async editAdvert(req, res) {}
  //  delete Advert
  async deleteAdvert(req, res) {}
}

export default AdvertController;
