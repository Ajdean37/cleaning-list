const express = require('express');
const createStarValueService = require('../services/starValue/createStarValueService');
const deleteStarValueById = require('../services/starValue/deleteStarValueById');
const getAllStarsService = require('../services/starValue/getAllStarsService');
const getStarValueById = require('../services/starValue/getStarValueById');
const router = express.Router();


router.post('/', createStarValueService, (req, res) => {
  res.send(res.resData);
})

router.delete('/:id', deleteStarValueById, (req, res) => {
  res.send(res.resData);
})

router.get('/:id', getStarValueById, (req, res) => {
  res.send(res.resData);
})

router.get('/', getAllStarsService, (req, res) => {
  res.send(res.resData);
})

module.exports = router;
