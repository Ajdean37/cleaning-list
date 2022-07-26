const pool = require("../../databases/pool");

async function updateListItemIsCompleteService(req, res, next) {

  console.log(req.body);

  let query = `
    UPDATE list_item
    SET is_complete = ?
    WHERE id = ?;`

  try {
    let [listItemDbResult] = await pool.query(query, [req.body.is_complete, req.params.id]);
    query = `SELECT * FROM list_item WHERE id = ?`;
    let [listItems] = await pool.query(query, req.params.id);
    console.log(listItems[0]);
    res.resData = listItems[0];
  } catch (error) {
    throw error;
  }
  next();
}

module.exports = updateListItemIsCompleteService;

