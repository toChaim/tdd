const request = require('supertest');
const { expect } = require('chai');
const { User } = require('../models');

describe('user models test', function() {
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

  it('should be valid if username and password are given', function(done) {
    var user = new User({ username: 'testName', password: 'testPassword' });

    user.validate(function(err) {
      expect(err).to.equal(null);
      done();
    });
  });
});
