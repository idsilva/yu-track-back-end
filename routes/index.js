const express = require('express');
const location_model = require('./location')
const router = express.Router();

router.use('/location', location_model);

router.get('/', (req, res) => {
  
  res.status(200).send('Root access working fine');
  
});

module.exports = router;