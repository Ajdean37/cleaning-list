const pool = require("../../databases/pool");

async function deleteDailyChoresById(req, res, next) {

  try {
    let queryText = `SELECT * FROM daily_chore_list WHERE id = ?;`;
    let [dailyChores] = await pool.query(queryText, req.params.id);
    res.resData = dailyChores[0];
  } catch (error) {
    throw error;
  }

  try {
    let queryText = `DELETE FROM daily_chore_List WHERE id = ?;`;
    await pool.query(queryText, req.params.id);
  } catch (error) {
    throw error;
  }

  next();
}
  
  module.exports = deleteDailyChoresById;