const express = require('express');
const createDailyChoresListService = require('../services/dailyChoresList/createDailyChoresListService');
const deleteDailyChoresById = require('../services/dailyChoresList/deleteDailyChoresById');
const getAllDailyChoresService = require('../services/dailyChoresList/getAllDailyChoresService');
const getDailyChoresById = require('../services/dailyChoresList/getDailyChoresById');
const router = express.Router();


router.post('/', createDailyChoresListService, (req, res) => {
  res.send(res.resData);
})

router.delete('/:id', deleteDailyChoresById, (req, res) => {
  res.send(res.resData);
})

router.get('/:id', getDailyChoresById, (req, res) => {
  res.send(res.resData);
})

router.get('/', getAllDailyChoresService, (req, res) => {
  res.send(res.resData);
})


module.exports = router;