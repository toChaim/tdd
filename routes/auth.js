const db = require('../models');
const auth = require('../middleware/auth');
const router = require('express').Router();

router.post('/login', function(req, res) {
  res.json({ token: 'xyz' });
});

module.exports = router;
