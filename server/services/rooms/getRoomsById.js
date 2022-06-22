const pool = require("../../databases/pool");

async function getRoomsById(req, res, next) {

  let query = `SELECT * FROM room WHERE id = ?;`;

  const [rows, fields] = await pool.query( query, req.params.id);

  res.resData = [...rows];

  next();
}

module.exports = getRoomsById;