const expect = require("chai").expect;
const issues = require("../src/issues");
const Issue = issues.Issue;

describe("Issue Tracker", function() {
  context("Create Issue", function() {
    const title = "Add flights module";
    const description = "Add the flights module to the system";
    const author = "Pedro";
    const issue = new Issue(title, description, author);

    it("should create an issue with the given values", function() {
      expect(issue.getTitle()).to.equal(title);
      expect(issue.getDescription()).to.equal(description);
      expect(issue.getAuthor()).to.equal(author);
      expect(issue.getState().getName()).to.equal("new");
    });
  });

  context("Update New Issue", function() {
    const title = "Add flights module";
    const description = "Add the flights module to the system";
    const author = "Pedro";
    const issue = new Issue(title, description, author);

    it("should allow to update title", function() {
      const newTitle = "Add flights module updated";
      issue.setTitle(newTitle);
      expect(issue.getTitle()).to.equal(newTitle);
    });

    it("should allow to update description", function() {
      const newDescription = "Add flights module to the system updated";
      issue.setDescription(newDescription);
      expect(issue.getDescription()).to.equal(newDescription);
    });
  });

  context("ToDo State", function() {
    const title = "Add flights module";
    const description = "Add the flights module to the system";
    const author = "Pedro";
    const issue = new Issue(title, description, author);

    it("should transition from New to ToDo state", function() {
      issue.toToDo();
      expect(issue.getState().getName()).to.equal("todo");
    });

    it("should transition from ToDo to New state", function() {
      issue.toNew();
      expect(issue.getState().getName()).to.equal("new");
    });

    it("should not allow to update title", function() {
      issue.toToDo();
      expect(() => issue.setTitle("new title")).to.throw("Cannot update");
    });

    it("should not allow to update description", function() {
      issue.toToDo();
      expect(() => issue.setDescription("new description")).to.throw(
        "Cannot update"
      );
    });

    it("should not allow to update author", function() {
      issue.toToDo();
      expect(() => issue.setAuthor("new author")).to.throw("Cannot update");
    });
  });

  context("Doing State", function() {
    const title = "Add flights module";
    const description = "Add the flights module to the system";
    const author = "Pedro";
    const issue = new Issue(title, description, author);

    it("should not transition from New to Doing state", function() {
      expect(() => issue.toDoing()).to.throw("Cannot transition");
    });

    it("should transition from ToDo to Doing state", function() {
      issue.toToDo();
      issue.toDoing();
      expect(issue.getState().getName()).to.equal("doing");
    });

    it("should transition from Doing to ToDo state", function() {
      issue.toToDo();
      issue.toDoing();
      issue.toToDo();
      expect(issue.getState().getName()).to.equal("todo");
    });
  });
});
