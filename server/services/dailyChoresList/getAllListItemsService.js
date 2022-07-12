const pool = require("../../databases/pool");

async function getAllListItemsService( req, res, next) {

  let dailyChoreListListItems = null;

  try {
    [dailyChoreListListItems] = await pool.query('SELECT * FROM j__daily_chore_list__list_items WHERE daily_chore_list_id = ?;', req.params.id)
  } catch (error) {
    throw error;
  }

  let finalResult = [];

  for (const listItem of dailyChoreListListItems) {
    try {
      [rows] = await pool.query('SELECT * FROM list_item WHERE id = ?;', listItem.list_item_id)

      finalResult = [...finalResult, ...rows]

    } catch (error) {
      throw error;
    }
  }

  res.resData = finalResult;

  next();
}

module.exports = getAllListItemsService;