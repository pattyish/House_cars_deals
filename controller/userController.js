import bcrypt from 'bcryptjs';
import { validationResult } from 'express-validator';
import UserSchema from '../models/User';
import DbOperation from '../database/dbOperation';

const DbQuery = new DbOperation('users');
export default class User {
  // create Account
  async createAccount(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    try {
      const { body } = req;
      const isUserExist = await DbQuery.selectByField('email', body.email);
      if (isUserExist.count > 0)
        return res.status(400).json({
          status: 400,
          msg: `User with this ${body.email} is already exist `,
        });
      const createUser = new UserSchema(body);
      const salt = await bcrypt.genSalt(10);
      createUser.password = await bcrypt.hash(body.password, salt);
      const saveUser = await DbQuery.insertData(createUser);
      if (!saveUser)
        return res
          .status(500)
          .json({ status: 500, msg: 'Server fail to operate!!' });
      res.status(201).json({
        status: 201,
        msg: 'Account created successful!!',
        data: saveEmployee,
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({
        msg: 'Server Error!!',
      });
    }
  }
  // login
  async Login(req, res) {}
  // get user by id
  async getUserById(req, res) {}
  // forget password
  async forgotPassword(req, res) {}
  // change password
  async changingPassword(req, res) {}
  //   update profile Info
  async updateProfile(req, res) {}
  // get user profile
  async getUserProfile(req, res) {}
  //creating new password
  async createNewPassword(req, res) {}
}
