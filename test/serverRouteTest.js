// const request = require('supertest');
// const { expect } = require('chai');
// process.env.ENV = 'unitTest';
// const { api } = require('../server');

// describe('Check Server Routes', function() {
//   it('GET to /user should return 404', function(done) {
//     request(api)
//       .get('/user')
//       .end((err, res) => {
//         expect(res.statusCode).to.equal(404);
//         done();
//       });
//   });

//   it('GET to /users should return 200', function(done) {
//     request(api)
//       .get('/users')
//       .end((err, res) => {
//         expect(res.statusCode).to.equal(200);
//         done();
//       });
//   });
// });

'use strict';
// NPM install mongoose and chai. Make sure mocha is globally
// installed
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const chai = require('chai');
const expect = chai.expect;
// Create a new schema that accepts a 'name' object.
// 'name' is a required field
const testSchema = new Schema({
  name: { type: String, required: true }
});
//Create a new collection called 'Name'
const Name = mongoose.model('Name', testSchema);
describe('Database Tests', function() {
  //Before starting the test, create a sandboxed database connection
  //Once a connection is established invoke done()
  before(function(done) {
    mongoose.connect('mongodb://localhost/testDatabase');
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', function() {
      console.log('We are connected to test database!');
      done();
    });
  });
  describe('Test Database', function() {
    //Save object with 'name' value of 'Mike"
    it('New name saved to test database', function(done) {
      var testName = Name({
        name: 'Mike'
      });

      testName.save(done);
    });
    it('Dont save incorrect format to database', function(done) {
      //Attempt to save with wrong info. An error should trigger
      var wrongSave = Name({
        notName: 'Not Mike'
      });
      wrongSave.save(err => {
        if (err) {
          return done();
        }
        throw new Error('Should generate error!');
      });
    });
    it('Should retrieve data from test database', function(done) {
      //Look up the 'Mike' object previously saved.
      Name.find({ name: 'Mike' }, (err, name) => {
        if (err) {
          throw err;
        }
        if (name.length === 0) {
          throw new Error('No data!');
        }
        done();
      });
    });
  });
  //After all tests are finished drop database and close connection
  after(function(done) {
    mongoose.connection.db.dropDatabase(function() {
      mongoose.connection.close(done);
    });
  });
});
