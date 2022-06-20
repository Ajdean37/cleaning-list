const dotenv = require('dotenv');
dotenv.config();

// middleware
app.use( express.json() );



const port = process.env.NODE_API_PORT || 5000;

app.listen(port, () => console.info(`Server is running on port ${port}`));
