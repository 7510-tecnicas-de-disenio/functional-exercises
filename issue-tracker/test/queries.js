const expect = require("chai").expect;
const issues = require("../src/issues");
const Issue = issues.Issue;
const queries = require("../src/queries");
const QueryExecutor = queries.QueryExecutor;

const createNewIssue = (number, author) => {
  return new Issue(`Title-${number}`, `Description-${number}`, author);
};

const createNewIssues = () => {
  return [
    createNewIssue(1, "Pedro"),
    createNewIssue(2, "Luis"),
    createNewIssue(3, "Juan"),
    createNewIssue(4, "Pedro"),
    createNewIssue(5, "Pedro")
  ];
};

const createToDoIssue = (number, author) => {
  const issue = new Issue(`Title-${number}`, `Description-${number}`, author);
  issue.toToDo();
  return issue;
};

const createToDoIssues = () => {
  return [
    createToDoIssue(6, "Luis"),
    createToDoIssue(7, "Juan"),
    createToDoIssue(8, "Jorge"),
    createToDoIssue(9, "Jorge"),
    createToDoIssue(10, "Pedro"),
    createToDoIssue(11, "Sara")
  ];
};

const createDoingIssue = (number, author) => {
  const issue = new Issue(`Title-${number}`, `Description-${number}`, author);
  issue.toToDo();
  issue.toDoing();
  return issue;
};

const createDoingIssues = () => {
  return [
    createDoingIssue(12, "Sara"),
    createDoingIssue(13, "Luis"),
    createDoingIssue(14, "Pedro"),
    createDoingIssue(15, "Juan"),
    createDoingIssue(16, "Sara")
  ];
};

const createDoneIssue = (number, author) => {
  const issue = new Issue(`Title-${number}`, `Description-${number}`, author);
  issue.toToDo();
  issue.toDoing();
  issue.toDone();
  return issue;
};

const createDoneIssues = () => {
  return [
    createDoneIssue(17, "Juan"),
    createDoneIssue(18, "Sara"),
    createDoneIssue(19, "Juan"),
    createDoneIssue(20, "Pedro"),
    createDoneIssue(21, "Pedro")
  ];
};

describe("QueryExecutor", function() {
  const newIssues = createNewIssues();
  const toDoIssues = createToDoIssues();
  const doingIssues = createDoingIssues();
  const doneIssues = createDoneIssues();

  const queryExecutor = new QueryExecutor(
    newIssues,
    toDoIssues,
    doingIssues,
    doneIssues
  );

  context("Query quantity issues in New state by author", function() {
    it("should perform the New issues by author query", function() {
      const newByAuthor = queryExecutor.newByAuthor();

      expect(newByAuthor["Pedro"]).to.equal(3);
      expect(newByAuthor["Luis"]).to.equal(1);
      expect(newByAuthor["Juan"]).to.equal(1);
    });
  });

  context("Query quantity issues in ToDo state by author", function() {
    it("should perform the New issues by author query", function() {
      const toDoByAuthor = queryExecutor.toDoByAuthor();

      expect(toDoByAuthor["Luis"]).to.equal(1);
      expect(toDoByAuthor["Juan"]).to.equal(1);
      expect(toDoByAuthor["Jorge"]).to.equal(2);
      expect(toDoByAuthor["Pedro"]).to.equal(1);
      expect(toDoByAuthor["Sara"]).to.equal(1);
    });
  });

  context("Query quantity issues in Done ", function() {
    it("should perform the Done issues query", function() {
      const done = queryExecutor.done();

      expect(done).to.equal(5);
    });
  });
});
