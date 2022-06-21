const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const dailyChoresListRouter = require('./routes/daily-chores-list-router');
const roomsRouter = require('./routes/roomsRouter');

// middleware
app.use( express.json() );

// app.use('/api/daily-chores-list', dailyChoresListRouter);
app.use('/api/rooms', roomsRouter)

const port = process.env.NODE_API_PORT || 5000;

app.listen(port, () => console.info(`Server is running on port ${port}`));
