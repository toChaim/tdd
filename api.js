const api = require('express')();
const bodyParser = require('body-parser');
const gamesRoutes = require('./routesGames');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const { ensureLogin } = require('./middleware/auth');

api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: true }));

api.use('/', (req, res) => {
  res.json({ games: ['CBT', 'Gratitueds'] });
});

api.use('/users', ensureLogin, userRoutes);
api.use('/auth', authRoutes);

api.listen(3000, () => {
  console.log('API listening on port 3000');
});

module.exports = api;
