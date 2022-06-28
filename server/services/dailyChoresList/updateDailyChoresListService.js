var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
});



const pool = require("../../databases/pool");

async function createDailyChoresListService (req, res, next) {

  let newDailyChoresListRecord = {
    is_complete: req.body.is_complete,
    room_id: req.body.room_id,
    day_id: req.body.day_id
  }

  try {
    
  } catch (error) {
    
  }



  module.exports = createDailyChoresListService