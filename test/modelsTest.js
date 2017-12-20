const request = require('supertest');
const { expect } = require('chai');
const { api } = require('../server');

// const mongoose = require('mongoose');
// const { Schema, model } = require('mongoose');

// const testSchema = new Schema({
//   name: { type: String, require: true }
// });
// const Name = mongoose.model('Name', testSchema);

// before(function(done) {
//   mongoose.connect('mongodb://localhost/testBLG');
//   const db = mongoose.connection;
//   db.on('error', console.error.bind(console, 'connection error'));
//   db.once('open', function() {
//     console.log('We are connected to test database!');
//     done();
//   });
// });

// describe('Test Models', function() {
//   it('New name saved to test datebase', function(done) {
//     var testName = Name({ name: 'test1' });
//     testName.save(done);
//   });
// });
