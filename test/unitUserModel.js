const { expect } = require('chai');
const { User } = require('../models/user');

describe('User Model should load', () => {
  it('should have one fail', done => {
    expect(1).to.equal(1);
    done();
  });
});
