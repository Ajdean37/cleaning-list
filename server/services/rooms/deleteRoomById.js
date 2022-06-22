const pool = require("../../databases/pool");

async function deleteRoomById(req, res, next) {

  try {
    let queryText = `SELECT * FROM room WHERE id = ?;`;
    let [rooms] = await pool.query(queryText, req.params.id);
    res,resData = rooms[0];
  } catch (error) {
    throw error;
  }

  try {
    let queryText = `DELETE FROM room WHERE id = ?;`;
    await pool.query(queryText, req.params.id);
  } catch (error) {
    throw error;
  }

  next();
}

module.exports = deleteRoomById;
