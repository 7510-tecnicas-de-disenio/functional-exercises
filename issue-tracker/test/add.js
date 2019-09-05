const expect = require("chai").expect;
const add = require("../src/add");

describe("add()", function() {
  context("add one", function() {
    const addOne = add(1);

    it("should add 1 to 1 equal to 2", function() {
      expect(addOne(1)).to.equal(2);
    });

    it("should add 1 to 3 equal to 4", function() {
      expect(addOne(3)).to.equal(4);
    });
  });

  context("add three", function() {
    const addThree = add(3);

    it("should add 3 to 2 equal to 5", function() {
      expect(addThree(2)).to.equal(5);
    });

    it("should add 3 to 3 equal to 6", function() {
      expect(addThree(3)).to.equal(6);
    });
  });
  
});
