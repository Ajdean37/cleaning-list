const pool = require('../../databases/pool');

async function getPeopleById(req, res, next) {

    let query = `SELECT * FROM people WHERE id = ?;`;

    const [rows, fields] = await pool.query( query, req.params.id );

    res.resData = [...rows];

    next();
}

module.exports = getPeopleById;