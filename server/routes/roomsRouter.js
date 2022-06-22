const express = require('express');
const router = express.Router();

const createRoomService = require('../services/rooms/createRoomService');
const deleteRoomById = require('../services/rooms/deleteRoomById');
const getRoomsById = require('../services/rooms/getRoomsById');
const getAllRoomsService = require('../services/rooms/getAllRoomsService');


router.post('/', createRoomService, (req, res) => {
    res.send(res.resData);
})

router.delete('/:id', deleteRoomById, (req, res) => {
    res.send(res.resData);
})

router.get('/:id', getRoomsById, (req, res) => {
    res.send(res.resData);
})

router.get('/', getAllRoomsService, (req, res) => {
    res.send(res.resData);
})

module.exports = router;
