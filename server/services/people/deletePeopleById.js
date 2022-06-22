const pool = require("../../databases/pool");

async function deletePeopleById(req, res, next) {

  try {
    let queryText = `SELECT * FROM people WHERE id = ?;`;
    let [people] = await pool.query(queryText, req.params.id);
    res.resData = people[0];
  } catch (error) {
    throw error;
  }

  try {
    let queryText = `DELETE FROM people WHERE id = ?;`;
    await pool.query(queryText, req.params.id);
  } catch (error) {
    throw error;
  }

  next();
}
  
  module.exports = deletePeopleById;