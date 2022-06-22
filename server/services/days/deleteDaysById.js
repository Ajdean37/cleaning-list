const pool = require("../../databases/pool");

async function deleteDayById(req, res, next) {

  try {
    let queryText = `SELECT * FROM day WHERE id = ?;`;
    let [days] = await pool.query(queryText, req.params.id);
    res.resData = days[0];
  } catch (error) {
    throw error;
  }

  try {
    let queryText = `DELETE FROM day WHERE id = ?;`;
    await pool.query(queryText, req.params.id);
  } catch (error) {
    throw error;
  }

  next();
}
  
  module.exports = deleteDayById;