import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

class Helper {
  async generateToken(userId) {
    const Token = jwt.sign(
      {
        id: userId,
      },
      process.env.SECRET_KEY,
      { expiresIn: '2d' },
    );
    return Token;
  }
}

export default Helper;
