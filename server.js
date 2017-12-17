const api = require('express')();
//const api = express();

api.get('/users', function(req, res) {
  res.status(200).json({ name: 'tobi' });
});

module.exports = { api };
