const pool = require("../../databases/pool");

async function getAllPeopleService(req, res, next) {
 
  let query = `SELECT * FROM people;`;

  const [rows, fields] = await pool.query( query );

  res.resData = [...rows];

  next();
}

module.exports = getAllPeopleService;