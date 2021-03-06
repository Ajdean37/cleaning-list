const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();

const roomsRouter = require('./routes/roomsRouter');
const daysRouter = require('./routes/daysRouter');
const peopleRouter = require('./routes/peopleRouter');
const starRouter = require('./routes/starRouter');
const sandboxRouter = require('./routes/sandboxRouter');
const dailyChoresListRouter = require('./routes/dailyChoresListRouter');
const listItemsRouter = require('./routes/listItemsRouter');


// middleware
app.use( express.json() );
const cors = require('cors');
app.use(cors());

//config tables (create first) create, read, delete---- update
// '/api/rooms'
// '/api/days'
// '/api/people'
// '/api/star-value'
app.use('/api/rooms', roomsRouter);
app.use('/api/days', daysRouter);
app.use('/api/people', peopleRouter);
app.use('/api/stars', starRouter);
app.use('/api/sandbox', sandboxRouter);
app.use('/api/daily-chores-lists', dailyChoresListRouter);
app.use('/api/list-items', listItemsRouter);



//one to one relationships create a list item, get all list items, delete list items
// stretch goal --- get list item and relational data
// '/api/list-items'

// one to many relationships
// '/api/daily-chores-lists'
// '/api/daily-chores-lists/list-items'

const port = process.env.NODE_API_PORT || 5000;

app.listen(port, () => console.info(`Server is running on port ${port}`));

