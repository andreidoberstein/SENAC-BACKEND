const express = require("express");
const app = express();

app.use(express.json());

import userRouter from './routes/userRouter';

app.use('/api/', userRouter);

export default app;