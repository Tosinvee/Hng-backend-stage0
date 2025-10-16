const express = require('express');
const userRouter = require('./routes/user');

const app = express();

app.use(express.json());

app.use('/me', userRouter);

app.use((error, req, res, next) => {
  if (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
  next();
});

app.get('/', (req, res) => {
  res.send('Hello Tosin');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
