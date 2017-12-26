const request = require('supertest');
const { expect } = require('chai');
process.env.ENV = 'unitTest';
const { api } = require('../server');

describe('Check Server Routes', function() {
  it('GET to /user should return 404', function(done) {
    request(api)
      .get('/user')
      .end((err, res) => {
        expect(res.statusCode).to.equal(404);
        done();
      });
  });

  it('GET to /users should return 200', function(done) {
    request(api)
      .get('/users')
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
  });
});
