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

function renderBook(book, idx) {
  const tableRow = document.createElement('tr');
  tableRow.setAttribute('data-value', `${idx}`);

  const removeButton = document.createElement('button');
  removeButton.textContent = "remove";
  removeButton.addEventListener("click", (e) => {
    removeBookFromLibrary(idx);
  });

  const titleData = document.createElement('td');
  const authorData = document.createElement('td');
  const pagesData = document.createElement('td');
  const readData = document.createElement('td');
  titleData.textContent = book.title;
  authorData.textContent = book.author;
  pagesData.textContent = book.numPages;
  readData.textContent = book.isRead ? "read!" : 'not read yet!';
  tableRow.appendChild(titleData);
  tableRow.appendChild(authorData);
  tableRow.appendChild(pagesData);
  tableRow.appendChild(readData);
  tableRow.appendChild(removeButton);
  libContainer.appendChild(tableRow);
}

function render() {
  for (let i = 0; i < myLibrary.length; i++) {
    renderBook(myLibrary[i], i);
  }
}

document.getElementById("add-book-button").addEventListener('click', (e) => {
  addBookToLibrary();
  render();
});

function removeBookFromLibrary(idx) {
  tableRow = document.querySelector(`tr[data-value="${idx}"]`);
  if (tableRow) {
    console.log('to delete');
    let table = document.querySelector('#lib-container');
    table.removeChild(tableRow);
    myLibrary.splice(idx, 1);
  }
}

let myLibrary = [];
const libContainer = document.querySelector('#lib-container');
myLibrary.push(new Book('Haruki Murakami', 'Norwegian Wood', 500, true));
myLibrary.push(new Book('J.K Rowling', 'Harry Potter', 600, true));
myLibrary.push(new Book('Hendrik Dorgathen', 'Space dog', 50, false));
render();
// console.table(myLibrary);