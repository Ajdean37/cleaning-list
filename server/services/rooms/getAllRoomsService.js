const pool = require("../../databases/pool");

async function getAllRoomsService(req, res, next) {

  let query = `SELECT * FROM room;`;

  const [rows, fields] = await pool.query( query );

  res.resData = [...rows];

  next();
}

module.exports = getAllRoomsService;