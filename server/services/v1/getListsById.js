
function getListsById(req, res, next) {
  
    let allLists = [
      {
        id: 1,
        day: "day of the week",
        room: "some room",
        detail: "some detail"
      },
      {
        id: 2,
        day: "day of the week",
        room: "some room",
        detail: "some detail"
      },
      {
        id: 3,
        day: "day of the week",
        room: "some room",
        detail: "some detail"
      },
    ];
  
  
    let targetListArray = allLists.filter(list => list.id === Number(req.params.id) )
  
    if ( targetListArray.length ) {
      res.resData = {...targetListArray[0]};
    } else {
      res.resData = {error_message: "List Not Found"};
      res.statusCode = 404;
    }
  
    next();
  }
  
  module.exports = getListsById