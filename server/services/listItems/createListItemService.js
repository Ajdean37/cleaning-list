const pool = require("../../databases/pool");

async function createListItemService(req, res, next) {

  let newListItemRecord = {
    room_id: req.body.room_id,
    detail: req.body.detail,
    is_complete: req.body?.is_complete ? 1 : 0,
    star_value_id: req.body.star_value_id,
    person_id: req.body.person_id
  }

  let listItemDbResult = null;

  try {
    listItemDbResult = await pool.query('INSERT INTO list_item SET ?;', newListItemRecord);
  } catch (error) {
    throw error;
  }

  let newListItemId = listItemDbResult[0].insertId;

  try {
    [rows, fields] = await pool.query('SELECT * FROM list_item WHERE id = ?;', newListItemId);
    res.resData = rows[0];
  } catch (error) {
    throw error;
  }

  next();
}

module.exports = createListItemService;