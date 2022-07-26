const express = require('express');
const createListItemService = require('../services/listItems/createListItemService');
const updateListItemIsCompleteService = require('../services/listItems/updateListItemIsCompleteService');
const router = express.Router();




router.post('/', createListItemService, (req, res) => {
  res.send(res.resData);
})
router.put('/:id', updateListItemIsCompleteService, (req, res) => {
  res.send(res.resData);
})

module.exports = router;
