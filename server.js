import express from 'express';
import morgan from 'morgan';

const app = express();
const PORT = process.env.PORT || 4000;

// middleware
app.use(morgan('tiny'));
app.use(express.json({ extended: false }));

// routes
app.get('/', (req, res) => {
  res.status(200).send("It's just beggining ");
});

app.listen(PORT, () => {
  console.log(`Server Start On Port: ${PORT}`);
});
