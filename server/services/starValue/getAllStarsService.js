const pool = require("../../databases/pool");

async function getAllStarsService(req, res, next) {
    let query = `SELECT * FROM star_value;`;

    // const result = await pool.query( query );
    const [rows, fields] = await pool.query( query );
  
    res.resData = [...rows];

    next();
}

module.exports = getAllStarsService;