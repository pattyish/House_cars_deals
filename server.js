const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send("It's just beggining ");
});

app.listen(PORT, () => {
  console.log(`Server Start On Port: ${PORT}`);
});
