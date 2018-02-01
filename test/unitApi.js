const { expect } = require("chai");

describe("Test that test run", () => {
  it("should have one fail", done => {
    expect(1).to.equal(0);
  });
});
