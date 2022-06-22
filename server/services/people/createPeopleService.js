const pool = require("../../databases/pool");

async function createPeopleService(req, res, next) {
  let query = 'INSERT INTO people SET ?;';

  const result = await pool.query(query, req.body );
  const newRecordId = result[0].insertId;

  try {
      [peopleRows] = await pool.query(`SELECT * FROM people WHERE id = ?`, newRecordId);
      res.resData = peopleRows;
  } catch (error) {
      throw error;
  }

  next();
}

module.exports = createPeopleService;