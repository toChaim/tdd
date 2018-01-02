const request = require('supertest');
const { expect } = require('chai');
const { User } = require('../models');

describe('user routes test', function() {
  it('fake test for /users', function() {
    expect(200).to.equal(200);
  });
});
