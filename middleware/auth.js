require('dotenv').load();
const jwt = require('jsonwebtoken');

const ensureLogin = function(req, res, next) {
  try {
    var token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
      if (decoded) {
        next();
      } else {
        res.status(401).json({ message: 'Login Required. Cannot verify.' });
      }
    });
  } catch (err) {
    res.status(401).json({ message: 'Login Required' });
  }
};

module.exports = { ensureLogin };
