const request = require('supertest');
const { expect } = require('chai');
const { app } = require('../server');

describe('Check Server Routes', function() {
  it('GET to /user should return 404', function(done) {
    request(app)
      .get('/user')
      .end((err, res) => {
        expect(res.statusCode).to.equal(404);
        done();
      });
  });

  it('GET to /users', function(done) {
    request(app)
      .get('/users')
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
  });
});
