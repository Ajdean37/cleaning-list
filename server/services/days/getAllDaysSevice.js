const pool = require("../../databases/pool");

async function getAllDaysService(req, res, next) {
    let query = `SELECT * FROM day;`;

    // const result = await pool.query( query );
    const [rows, fields] = await pool.query( query );
  
    res.resData = [...rows];

    next();
}

module.exports = getAllDaysService;