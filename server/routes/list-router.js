const express = require('express');
const router = express.Router();

const deleteListsById = require('../services/deleteListsById');
const getAllListsService = require('../services/getAllListsService');
const getListsById = require('../services/getListsById');
const createListService = require('../services/createListService');



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
