const { expect } = require('chai');
const { api } = require('../api');

describe('Test that test run', () => {
  it('should have one fail', done => {
    expect(1).to.equal(0);
    done();
  });
  it('should have one passing test', () => {
    expect(2).to.equal(2);
  });
});
