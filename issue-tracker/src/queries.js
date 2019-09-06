class QueryExecutor {
  constructor(newIssues, toDoIssues, doingIssues, doneIssues) {
    this.issues = [...newIssues, ...toDoIssues, ...doingIssues, ...doneIssues];
  }

  stateByAuthor(stateName) {
    return this.issues
      .filter(issue => issue.getState().getName() === stateName)
      .reduce((accumulator, current) => {
        let currentIssuesByAuthor = accumulator[current.getAuthor()];
        if (!currentIssuesByAuthor) {
          accumulator[current.getAuthor()] = 0;
        }
        currentIssuesByAuthor = accumulator[current.getAuthor()];
        accumulator[current.getAuthor()] = currentIssuesByAuthor + 1;
        return accumulator;
      }, {});
  }

  newByAuthor() {
    return this.stateByAuthor("new");
  }

  toDoByAuthor() {
    return this.stateByAuthor("todo");
  }

  done() {
    return this.issues.filter(issue => issue.getState().getName() === "done")
      .length;
  }
}

exports.QueryExecutor = QueryExecutor;
