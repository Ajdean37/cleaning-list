const pool = require("../../databases/pool");

async function updateDailyChoresById (req, res, next) {

  let newDailyChoresListRecord = {
    is_complete: req.body.is_complete,
    room_id: req.body.room_id,
    day_id: req.body.day_id
  }

  console.log(req.body);
  console.log(req.params);

  try {
    let sqlText = "UPDATE daily_chore_list SET is_complete = ? WHERE id = ?;";
    pool.query(sqlText, [req.body.is_complete, req.params.id]);
  } catch (error) {
    throw error;
  }

  next();
}


  module.exports = updateDailyChoresById;