const pool = require("../../databases/pool");

async function getAllPeopleService(req, res, next) {
  let query = `SELECT * FROM people;`;

  // const result = await pool.query( query );
  const [rows, fields] = await pool.query( query );

  res.resData = [...rows];

  next();
}

module.exports = getAllPeopleService;