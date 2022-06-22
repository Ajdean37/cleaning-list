const express = require('express');
const router = express.Router();

const createDayService = require('../services/days/createDayService');
const deleteDaysById = require('../services/days/deleteDaysById');
const getDaysById = require('../services/days/getDaysById');
const getAllDaysService = require('../services/days/getAllDaysSevice');


// create new post day service
router.post('/', createDayService, (req, res) => {
    res.send(res.resData);
})

// add delete service
router.delete('/:id', deleteDaysById, (req, res) => {
    res.send(res.resData);
})

// get by id service
router.get('/:id', getDaysById, (req, res) => {
    res.send(res.resData);
})

router.get('/', getAllDaysService, (req, res) => {
    res.send(res.resData);
})

module.exports = router;