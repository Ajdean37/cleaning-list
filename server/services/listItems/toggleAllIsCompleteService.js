const pool = require("../../databases/pool");

async function toggleAllIsCompleteService(req, res, next) {

  try {
    let query = 'UPDATE daily_chore_list SET is_complete = ? WHERE id = ?;'
   
    await pool.query(query, [req.body.is_complete, Number(req.params.id)]);


  } catch (error) {
    console.error(error);
  } 

  let listItemIds;

  try {
    [listItemIds] = await pool.query('SELECT list_item_id FROM j__daily_chore_list__list_items WHERE daily_chore_list_id = ?;', req.params.id);
  } catch (error) {
    console.error(error);
  } 

  try {
    for (const item of listItemIds) {
      await pool.query('UPDATE list_item SET is_complete = ? WHERE id = ?;', [req.body.is_complete, item.list_item_id])
    }
  } catch (error) {
    console.error(error);
  } 

  next();
}

module.exports = toggleAllIsCompleteService;