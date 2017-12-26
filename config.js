require('dotenv').load();
const mongoose = require('mongoose');

mongoose.Promise = Promise;

switch (process.env.ENV) {
  case 'uniteTest':
    exports.DATA_BASE = {};
    break;
  case 'integrationTest':
    mongoose
      .connect('mongodb://localhost/testBLG', { useMongoClient: true })
      .then(() => {
        console.log('Database connected.');
      })
      .catch(err => {
        console.log(`database failed to connected. err="${err}"`);
      });
    exports.mongoose = mongoose;
    break;
  case 'development':
    exports.SECRET_KEY = 'SECRET_KEY';
    exports.PORT = 3001;
    mongoose
      .connect('mongodb://localhost/BLG', { useMongoClient: true })
      .then(() => {
        console.log('Database connected.');
      })
      .catch(err => {
        console.log(`database failed to connected. err="${err}"`);
      });
    exports.mongoose = mongoose;
    break;
  case 'production':
    exports.SECRET_KEY = process.env.SECRET_KEY;
    exports.PORT = process.env.PORT;
    mongoose
      .connect(process.env.MONGODB_URI, { useMongoClient: true })
      .then(() => {
        console.log('Database connected.');
      })
      .catch(err => {
        console.log(`database failed to connected. err="${err}"`);
      });
    exports.mongoose = mongoose;
    break;
}
