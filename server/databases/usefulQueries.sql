
-- Select all list items for daily chore list by daily chore list id
SELECT list_item.*
FROM list_item
JOIN j__daily_chore_list__list_items
ON list_item.id = j__daily_chore_list__list_items.list_item_id
WHERE j__daily_chore_list__list_items.daily_chore_list_id = 1;