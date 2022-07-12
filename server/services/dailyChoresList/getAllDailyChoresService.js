const pool = require("../../databases/pool");

async function getAllDailyChoresService(req, res, next) {
 
  let query = `SELECT * FROM daily_chore_list ORDER BY \`display_order\`;`;

  const [dailyChoresLists, fields] = await pool.query( query );

  let finalResults = []

  for (const dailyChoresList of dailyChoresLists) {
    let result = {...dailyChoresList, day: null}
    query = `SELECT * FROM day WHERE id = ?;`;
    const [days] = await pool.query( query, dailyChoresList.day_id );
    result.day = days[0];

    query = `SELECT * FROM room WHERE id = ?;`;
    const [rooms] = await pool.query( query, dailyChoresList.room_id );
    result.room = rooms[0];

    delete result.day_id;
    delete result.room_id;
    finalResults.push(result);

  }
  res.resData = [...finalResults];


  next();
}

module.exports = getAllDailyChoresService;