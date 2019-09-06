class IssueState {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setTitle(issue, title) {
    throw new Error("Not implemented");
  }

  setDescription(issue, description) {
    throw new Error("Not implemented");
  }

  setAuthor(issue, author) {
    throw new Error("Not implemented");
  }

  toToDo(issue) {
    throw new Error("Not implemented");
  }

  toNew(issue) {
    throw new Error("Not implemented");
  }

  toDoing(issue) {
    throw new Error("Not implemented");
  }

  toDone(issue) {
    throw new Error("Not implemented");
  }
}

class NewIssueState extends IssueState {
  constructor() {
    super("new");
  }

  setTitle(issue, title) {
    issue.title = title;
  }

  setDescription(issue, description) {
    issue.description = description;
  }

  setAuthor(issue, author) {
    issue.author = author;
  }

  toToDo(issue) {
    issue.state = new ToDoIssueState();
  }

  toNew(issue) {}

  toDoing(issue) {
    throw new Error("Cannot transition");
  }

  toDone(issue) {
    throw new Error("Cannot transition");
  }
}

class ToDoIssueState extends IssueState {
  constructor() {
    super("todo");
  }

  setTitle(issue, title) {
    throw new Error("Cannot update");
  }

  setDescription(issue, description) {
    throw new Error("Cannot update");
  }

  setAuthor(issue, author) {
    throw new Error("Cannot update");
  }

  toToDo(issue) {}

  toNew(issue) {
    issue.state = new NewIssueState();
  }

  toDoing(issue) {
    issue.state = new DoingIssueState();
  }

  toDone(issue) {
    throw new Error("Cannot transition");
  }
}

class DoingIssueState extends IssueState {
  constructor() {
    super("doing");
  }

  setTitle(issue, title) {
    throw new Error("Cannot update");
  }

  setDescription(issue, description) {
    throw new Error("Cannot update");
  }

  setAuthor(issue, author) {
    throw new Error("Cannot update");
  }

  toToDo(issue) {
    issue.state = new ToDoIssueState();
  }

  toNew(issue) {
    throw new Error("Cannot transition");
  }

  toDoing(issue) {}

  toDone(issue) {
    issue.state = new DoneIssueState();
  }
}

class DoneIssueState extends IssueState {
  constructor() {
    super("done");
  }

  setTitle(issue, title) {
    throw new Error("Cannot update");
  }

  setDescription(issue, description) {
    throw new Error("Cannot update");
  }

  setAuthor(issue, author) {
    throw new Error("Cannot update");
  }

  toToDo(issue) {
    throw new Error("Cannot transition");
  }

  toNew(issue) {
    throw new Error("Cannot transition");
  }

  toDoing(issue) {
    issue.state = new DoingIssueState();
  }

  toDone(issue) {}
}

class Issue {
  constructor(title, description, author) {
    this.title = title;
    this.description = description;
    this.author = author;
    this.state = new NewIssueState();
  }

  getTitle() {
    return this.title;
  }

  setTitle(title) {
    this.state.setTitle(this, title);
  }

  getDescription() {
    return this.description;
  }

  setDescription(description) {
    this.state.setDescription(this, description);
  }

  getAuthor() {
    return this.author;
  }

  setAuthor(author) {
    this.state.setAuthor(this, author);
  }

  getState() {
    return this.state;
  }

  toToDo() {
    this.state.toToDo(this);
  }

  toNew() {
    this.state.toNew(this);
  }

  toDoing() {
    this.state.toDoing(this);
  }

  toDone() {
    this.state.toDone(this);
  }
}

exports.Issue = Issue;
