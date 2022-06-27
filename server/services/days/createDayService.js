const pool = require("../../databases/pool");

async function createDayService(req, res, next) {
    let query = `INSERT INTO day SET ?;`;

    const result = await pool.query(query, req.body );
    const newRecordId = result[0].insertId;

    try {
        [dayRows] = await pool.query(`SELECT * FROM day WHERE id = ?`, newRecordId);
        res.resData = dayRows;
    } catch (error) {
        throw error;
    }

    next();
}


module.exports = createDayService;