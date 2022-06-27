/*
1. Create flat data for daily_chores_list ( is_complete, room_id, day_id )
    *onCreate we will get back the insert id
2. Create list_items by looping over them
    * we will get an insert id back for the list_item as well
3. While looping over each list item we will insert into our junction table using daily_chores_list id and list_item id
*/

const pool = require("../../databases/pool");

async function createDailyChoresListService (req, res, next) {

  let newDailyChoresListRecord = {
    is_complete: req.body.is_complete,
    room_id: req.body.room_id,
    day_id: req.body.day_id
  }

  let dailyChoreListDbResult = null;

  try {
    dailyChoreListDbResult = await pool.query('INSERT INTO daily_chore_list SET ?;', newDailyChoresListRecord);
  } catch (error) {
      throw error;
  }

  let newDailyChoreListId = dailyChoreListDbResult[0].insertId;

  for (const list_item of req.body.list_items) {
    let listItemDbResult = null;
    try {
      listItemDbResult = await pool.query('INSERT INTO list_item SET ?;', list_item);
    } catch (error) {
        throw error;
    }
    let newListItemId = listItemDbResult[0].insertId;

    try {
      await pool.query('INSERT INTO j__daily_chore_list__list_items SET ?;', {list_item_id: newListItemId, daily_chore_list_id: newDailyChoreListId})
    } catch (error) {
        throw error;
    }
  }


  next();
}

module.exports = createDailyChoresListService;