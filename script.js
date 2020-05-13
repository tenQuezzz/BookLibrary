function Book(author, title, numPages, isRead) {
  this.author = author;
  this.title = title;
  this.numPages = numPages;
  this.isRead = isRead;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.numPages} pages, ${this.isRead}`;
}

function addBookToLibrary() {
  const title = prompt("Title: ");
  const author = prompt("Author: ");
  const pages = Number(prompt("Pages: "));
  const isRead = prompt("Have your read this book? Yes/No: ");
  myLibrary.push(new Book(author, title, pages, isRead));
}

function renderBook(book, idx) {
  const tableRow = generateTableRowForBook(book);
  tableRow.setAttribute('data-value', `${idx}`);

  const removeButton = document.createElement('button');
  removeButton.textContent = "remove";
  removeButton.addEventListener("click", (e) => {
    removeBookFromLibrary(book, idx);
  });
  tableRow.appendChild(removeButton);
  libContainer.appendChild(tableRow);
}

function generateTableRowForBook(book) {
  tr = document.createElement("tr");
  for (let value of Object.values(book)) {
    td = document.createElement('td');
    td.textContent = value;
    tr.appendChild(td);
  }
  return tr;
}

function render() {
  clearTable();
  for (let i = 0; i < myLibrary.length; i++) {
    renderBook(myLibrary[i], i);
  }
}

function clearTable() {
  let tableRows = document.querySelector('#lib-container').getElementsByTagName('tr');
  tableRows = Array.from(tableRows).slice(1);
  for (let item of tableRows) {
    item.textContent = "";
  }
}

document.getElementById("add-book-button").addEventListener('click', (e) => {
  addBookToLibrary();
  render();
});

function removeBookFromLibrary(book, idx) {
  tableRow = document.querySelector(`tr[data-value="${idx}"]`);
  if (tableRow) {
    let table = document.querySelector('#lib-container');
    table.removeChild(tableRow);
    myLibrary.splice(myLibrary.indexOf(book), 1);
  }
}

let myLibrary = [];
const libContainer = document.querySelector('#lib-container');
myLibrary.push(new Book('Haruki Murakami', 'Norwegian Wood', 500, 'Yes'));
myLibrary.push(new Book('J.K Rowling', 'Harry Potter', 600, 'No'));
myLibrary.push(new Book('Hendrik Dorgathen', 'Space dog', 50, 'Yes'));
render();