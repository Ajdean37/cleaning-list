const pool = require("../../databases/pool");

async function createStarValueService(req, res, next) {
    let query = `INSERT INTO star_value SET ?;`;

    const result = await pool.query(query, req.body );
    const newRecordId = result[0].insertId;

    try {
        [starRows] = await pool.query(`SELECT * FROM star_value WHERE id = ?`, newRecordId);
        res.resData = starRows;
    } catch (error) {
        throw error;
    }

    next();
}

module.exports = createStarValueService;