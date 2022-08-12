const pool = require("../../databases/pool");

async function toggleAllResetService(req, res, next) {

  try {
    let query = 'UPDATE daily_chore_list SET is_complete = 0;'
    
    await pool.query(query);


  } catch (error) {
    throw error;
  } 

  try {
    let query = 'UPDATE list_item SET is_complete = 0;'
    
    await pool.query(query);

  } catch (error) {
    throw error;
  }

  next();
}

module.exports = toggleAllResetService