const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const listRouter = require('./routes/list-router');

// middleware
app.use( express.json() );

app.use('/api/lists', listRouter);


const port = process.env.NODE_API_PORT || 5000;

app.listen(port, () => console.info(`Server is running on port ${port}`));
