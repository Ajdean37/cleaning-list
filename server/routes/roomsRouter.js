const express = require('express');
const router = express.Router();
const createRoomService = require('../services/v2/rooms/createRoomService');


router.post('/', createRoomService, (req, res) => {
    console.log(process.env.DATABASE_NAME);
    res.send(res.resData);
});

module.exports = router;
