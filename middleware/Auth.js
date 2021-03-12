import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export default function (req, res, next) {
  // Get Token From Header
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ msg: 'No Token, Authorization Denied!!' });
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token Is Not Valid!!!' });
  }
}
