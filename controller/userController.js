import bcrypt from 'bcryptjs';
import { validationResult } from 'express-validator';
import Helper from '../hepler/user.helper';
import UserSchema from '../models/User';
import DbOperation from '../database/dbOperation';

const DbQuery = new DbOperation('users');
export default class User {
  // create Account
  static async createAccount(req, res) {
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
      const token = await Helper.generateToken(saveUser.user_id);
      res.status(201).json({
        status: 201,
        msg: 'Account created successful!!',
        user: createUser.displayUser(),
        token,
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({
        msg: 'Server Error!!',
      });
    }
  }
  // login
  static async login(req, res) {
    const { email, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    try {
      const isUserExist = await DbQuery.selectByField('email', email);
      if (!isUserExist.count > 0)
        return res.status(400).json({
          status: 400,
          msg: `Email does not exist!! `,
        });
      if (!bcrypt.compareSync(password, isUserExist.row[0].password))
        return res.status(400).json({
          status: 400,
          msg: `Password Incorrect!! `,
        });

      const token = await Helper.generateToken(isUserExist.row[0].user_id);
      console.log(isUserExist.row[0].user_id);
      res.status(200).json({
        status: 200,
        msg: 'User Logged In successful!!',
        isAdmin: isUserExist.row[0].isadmin,
        token,
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({
        msg: 'Server Error!!',
      });
    }
  }
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
