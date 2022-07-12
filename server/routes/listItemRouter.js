const express = require('express');
const createListItemService = require('../services/listItems/createListItemService');
const router = express.Router();



router.post('/', createListItemService, (req, res) => {
  res.send(res.resData);
})

module.exports = router;
