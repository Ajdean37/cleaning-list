const express = require('express');
const router = express.Router();



router.post('/', (req, res) => {
  console.log("Made it");
  console.log('req.params:', req.params);
  console.log('req.query:', req.query);
  console.log(req.body);
  res.send(res.resData);
})

// add delete service
router.delete('/:id', (req, res) => {
  res.send(res.resData);
})

// get by id service
router.get('/:id', (req, res) => {
  res.send(res.resData);
})

router.get('/', (req, res) => {
  res.send(res.resData);
})

module.exports = router;