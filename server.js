import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();

const URL = process.env.URL;
const app = express();
const PORT = process.env.PORT || 4000;

import userRoutes from './routes/user.routes';

// middleware
app.use(morgan('tiny'));
app.use(express.json({ extended: false }));

// Defining routes
app.use(`/api/v1/users`, userRoutes);
// app.use(`${URL}/requesting`, userRoutes);
// routes
app.get('/', (req, res) => {
  res.status(200).send("It's just beggining ");
});

app.listen(PORT, () => {
  console.log(`Server Start On Port: ${PORT}`);
});
