function deleteListById(req, res, next) {
  
    let allLists = [
      {
        id: 1,
        day: "day of the week",
        room: "some room"
        detail: "some detail"
      },
      {
        id: 2,
        day: "day of the week",
        room: "some room"
        detail: "some detail"
      },
      {
        id: 3,
        day: "day of the week",
        room: "some room"
        detail: "some detail"
      },
    ];
  
  
    let results = allLists.filter( list => list.id !== Number(req.params.id) );
  
    res.resData = [...results];
  
    next();
  }
  
  module.exports = deleteListById;
  