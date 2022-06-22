const pool = require("../../databases/pool");

async function createRoomService(req, res, next) {
    let query = 'INSERT INTO room SET ?;';

    const result = await pool.query(query, req.body);
    const newRecordId = result[0].insertId;

    try {
        [roomRows] = await pool.query(`SELECT * FROM room WHERE id = ?`, newRecordId);
        res.resData = roomRows;
    } catch (error) {
        throw error;
    }

    next()
}

module.exports = createRoomService;