const pool = require('../../databases/pool');

async function getDaysById(req, res, next) {

    let query = `SELECT * FROM day WHERE id = ?;`;

    const [rows, fields] = await pool.query( query, req.params.id );

    res.resData = [...rows];

    next();
}

module.exports = getDaysById;