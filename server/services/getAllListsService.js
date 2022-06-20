const pool = require("../databases/pool");


async function getAllListsService(req, res, next) {

  let query = `SELECT * FROM list;`;

  // const result = await pool.query( query );
  const [rows, fields] = await pool.query( query );

  console.log(rows);
  res.resData = [...rows];

  next();
}


module.exports = getAllListsService;