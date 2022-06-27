const pool = require("../../databases/pool");

async function getAllDailyChoresService(req, res, next) {
 
  let query = `SELECT * FROM daily_chore_list;`;

  const [rows, fields] = await pool.query( query );

  res.resData = [...rows];

  next();
}

module.exports = getAllDailyChoresService;