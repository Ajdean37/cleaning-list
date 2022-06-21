const express = require('express');
const router = express.Router();

const deleteListsById = require('../services/v1/deleteListsById');
const getAllListsService = require('../services/v1/getAllListsService');
const getListsById = require('../services/v1/getListsById');
const createListService = require('../services/v1/createListService');



router.get('/', getAllListsService, (req, res) => {
  res.send(res.resData);
});



router.get('/:id', getListsById, (req, res) => {
  res.send(res.resData);
})


router.delete('/:id', deleteListsById, (req, res) => {
  res.send(res.resData);
});


router.post('/', createListService, (req, res) => {
  res.send(res.resData);
});



module.exports = router;
