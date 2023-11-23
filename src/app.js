const express = require('express');
const userRouter = require('./routes/user.route');

const app = express();
const port = 8080;

app.use(express.json());

app.use('/api/user', userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
