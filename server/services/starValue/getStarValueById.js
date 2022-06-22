const pool = require('../../databases/pool');

async function getStarValueById(req, res, next) {

    let query = `SELECT * FROM star_value WHERE id = ?;`;

    const [rows, fields] = await pool.query( query, req.params.id );

    res.resData = [...rows];

    next();
}

module.exports = getStarValueById;