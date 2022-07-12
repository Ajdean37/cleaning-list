const pool = require('../../databases/pool');

async function getDailyChoresById(req, res, next) {

    let query = `SELECT * FROM daily_chore_list WHERE id = ?;`;

    const [dailyChoresLists, fields] = await pool.query( query, req.params.id );
    const dailyChoresList = dailyChoresLists[0]

    let finalResult = {
        ...dailyChoresList,
        "day": null,
        "room": null,
        "list_items": []
    };

    query = `SELECT * FROM day WHERE id = ?;`;
    const [days] = await pool.query( query, dailyChoresList.day_id );
    finalResult.day = days[0];

    query = `SELECT * FROM room WHERE id = ?;`;
    const [rooms] = await pool.query( query, dailyChoresList.room_id );
    finalResult.room = rooms[0];

    query = `
        SELECT list_item.* 
        FROM list_item
        JOIN j__daily_chore_list__list_items
        ON list_item.id = j__daily_chore_list__list_items.list_item_id
        WHERE j__daily_chore_list__list_items.daily_chore_list_id = ?;`;

    const [dailyChoresListItems] = await pool.query( query, req.params.id );

    for (const dailyChoresListItem of dailyChoresListItems) {
        let result = {
            ...dailyChoresListItem, 
            star_value: null,
            person: null,

        };
        query = `SELECT * FROM star_value WHERE id = ?;`;
        const [starValue] = await pool.query( query, dailyChoresListItem.star_value_id );
        result.star_value = starValue[0]

        query = `SELECT * FROM person WHERE id = ?;`;
        const [people] = await pool.query( query, dailyChoresListItem.person_id );
        result.person = people[0]

        delete result.room_id;
        delete result.person_id;
        delete result.star_value_id;
     
        finalResult.list_items.push(result);
    }
   
    delete finalResult.room_id;
    delete finalResult.day_id;

    res.resData = finalResult;

    next();
}

module.exports = getDailyChoresById;