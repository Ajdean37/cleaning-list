const pool = require('../../databases/pool');

async function getDailyChoresById(req, res, next) {

    let query = `SELECT * FROM daily_chore_list WHERE id = ?;`;

    const [rows, fields] = await pool.query( query, req.params.id );

    res.resData = [...rows];

    next();
}

module.exports = getDailyChoresById;