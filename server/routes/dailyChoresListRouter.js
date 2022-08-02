const express = require('express');
const createDailyChoresListService = require('../services/dailyChoresList/createDailyChoresListService');
const deleteDailyChoresById = require('../services/dailyChoresList/deleteDailyChoresById');
const getAllDailyChoresService = require('../services/dailyChoresList/getAllDailyChoresService');
const getDailyChoresById = require('../services/dailyChoresList/getDailyChoresById');
const updateDailyChoresById = require('../services/dailyChoresList/updateDailyChoresById');
const getAllListItemsService = require('../services/dailyChoresList/getAllListItemsService');
const router = express.Router();
const toggleAllIsCompleteService = require('../services/listItems/toggleAllIsCompleteService');


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

router.put('/:id', updateDailyChoresById, (req, res) => {
  res.send(res.resData);
})

router.get('/:id/list-items', getAllListItemsService, (req, res) => {
  res.send(res.resData);
})

router.put('/:id/list-items/toggle-all-is-complete', toggleAllIsCompleteService, (req, res) => {
  res.send(res.resData);
})
module.exports = router;