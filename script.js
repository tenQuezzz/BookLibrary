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

function addBookToLibrary() {
  const title = prompt("Title: ");
  const author = prompt("Author: ");
  const pages = Number(prompt("Pages: "));
  const isRead = Boolean(prompt("Have your read this book? true/false: "));
  myLibrary.push(new Book(author, title, pages, isRead));
}



let myLibrary = [];
const libContainer = document.querySelector('#lib-container');
// addBookToLibrary();
// console.table(myLibrary);