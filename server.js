import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config();

const URL = process.env.URL;
const app = express();
const PORT = process.env.PORT || 4000;

import userRoutes from './routes/user.routes';
import advertRoutes from './routes/advert.routes';
// middleware
app.use(morgan('tiny'));
app.use(express.json({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Defining routes
app.use(`/api/v1/users`, userRoutes);
app.use(`/api/v1/posts`, advertRoutes);
// app.use(`${URL}/requesting`, userRoutes);
// routes
app.get('/', (req, res) => {
  res.status(200).send("It's just beggining ");
});

app.listen(PORT, () => {
  console.log(`Server Start On Port: ${PORT}`);
});
