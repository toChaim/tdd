const db = require('../models');
const auth = require('../middleware/auth');
const router = require('express').Router();

router.get('/', function(req, res) {
  res.json({ users: [1, 2, 3] });
});

module.exports = router;
