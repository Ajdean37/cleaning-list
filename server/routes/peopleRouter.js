const express = require('express');
const createPeopleService = require('../services/people/createPeopleService');
const deletePeopleById = require('../services/people/deletePeopleById');
const getAllPeopleService = require('../services/people/getAllPeopleService');
const getPeopleById = require('../services/people/getPeopleById');
const router = express.Router();


router.post('/', createPeopleService, (req, res) => {
  res.send(res.resData);
})

router.delete('/:id', deletePeopleById, (req, res) => {
  res.send(res.resData);
})

router.get('/:id', getPeopleById, (req, res) => {
  res.send(res.resData);
})

router.get('/', getAllPeopleService, (req, res) => {
  res.send(res.resData);
})

module.exports = router;