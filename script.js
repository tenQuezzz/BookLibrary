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

function renderBook(book) {
  bookItem = document.createElement("li");
  bookItem.textContent = book.info();
  libContainer.appendChild(bookItem);
}

function render() {
  for (const book of myLibrary) {
    renderBook(book);
  }
}

let myLibrary = [];
const libContainer = document.querySelector('#lib-container');
myLibrary.push(new Book('test1', 'test1', 200, true));
myLibrary.push(new Book('test2', 'test2', 300, true));
myLibrary.push(new Book('test2', 'test2', 400, false));
render();
// console.table(myLibrary);