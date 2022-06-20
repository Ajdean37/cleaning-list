const pool = require("../databases/pool");


async function createListService(req, res, next) {
 
  // BAD PRACTICE WILL EXPOSE YOU TO SQL INECTION ATTACKS
  // let query = `INSERT INTO quote (${Object.keys(req.body)}) VALUES (${Object.values(req.body)});`
  let query = `INSERT INTO list SET ?;`;

  const result = await pool.query( query, req.body );
  const newRecordId = result[0].insertId;

  const [listRows] = await pool.query(`SELECT * FROM list WHERE id = ?`, newRecordId);

  let resData = {...listRows[0]};

  const [authorRows] = await pool.query(`SELECT * FROM author WHERE id = ?`, listRows[0].author_id );

  resData.author = {...authorRows[0]};

  delete resData.author_id;

  res.resData = resData;

  next();
}


module.exports = createListService;
