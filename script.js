function Book(author, title, numPages, isRead) {
  this.author = author;
  this.title = title;
  this.numPages = numPages;
  this.isRead = isRead;
}

Book.prototype.info = function () {
  const readOrNot = this.isRead ? 'read it!' : 'not read yet';
  return `${this.title} by ${this.author}, ${this.numPages} pages, ${readOrNot}`;
}