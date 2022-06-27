const pool = require("../../databases/pool");

async function getAllPeopleService(req, res, next) {
 
  let query = `SELECT * FROM person;`;

  const [rows, fields] = await pool.query( query );

  res.resData = [...rows];

  next();
}

module.exports = getAllPeopleService;