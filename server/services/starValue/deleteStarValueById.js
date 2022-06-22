const pool = require("../../databases/pool");

async function deleteStarValueById(req, res, next) {

  try {
    let queryText = `SELECT * FROM star_value WHERE id = ?;`;
    let [stars] = await pool.query(queryText, req.params.id);
    res.resData = stars[0];
  } catch (error) {
    throw error;
  }

  try {
    let queryText = `DELETE FROM star_value WHERE id = ?;`;
    await pool.query(queryText, req.params.id);
  } catch (error) {
    throw error;
  }

  next();
}
  
  module.exports = deleteStarValueById;