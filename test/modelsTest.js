const request = require('supertest');
const { expect } = require('chai');
const { api } = require('../server');
const { User } = require('../models');

// const mongoose = require('mongoose');
// const { Schema, model } = require('mongoose');

// var memeSchema = new mongoose.Schema({
//   name: { type: String, required: true }
// });

// var Meme = mongoose.model('Meme', memeSchema);

// describe('meme', function() {
//   it('should be invalid if name is empty', function(done) {
//     var m = new Meme();

//     m.validate(function(err) {
//       expect(err.errors.name).to.exist;
//       done();
//     });
//   });
// });

describe('Test user model', function() {
  it('should be invalid if username and password are filds are empty', function(
    done
  ) {
    var user = new User();

    user.validate(function(err) {
      expect(err.errors.password).to.exist;
      expect(err.errors.username).to.exist;
      done();
    });
  });
});
