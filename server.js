const api = require('express')();
const { PORT } = require('./config');

api.get('/users', function(req, res) {
  res.status(200).json({ name: 'tobi' });
});

module.exports = { api };
