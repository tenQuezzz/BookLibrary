class Book {
  constructor(author, title, numPages, isRead) {
    this.author = author;
    this.title = title;
    this.numPages = numPages;
    this.isRead = isRead;
  }

  info() {
    return `${this.title} by ${this.author}, ${this.numPages} pages, ${this.isRead}`;
  }

  toggleRead() {
    this.isRead = this.isRead == 'Yes' ? 'No' : 'Yes';
  }
}

function addBookToLibrary() {
  const title = prompt("Title: ");
  const author = prompt("Author: ");
  const pages = Number(prompt("Pages: "));
  const isRead = prompt("Have you read this book? Yes/No: ");
  myLibrary.push(new Book(author, title, pages, isRead));
}

function render() {
  clearTable();
  for (let i = 0; i < myLibrary.length; i++) {
    renderBook(myLibrary[i], i);
  }
}

function renderBook(book, idx) {
  bookContainer = genBookContainer(book, idx);
  const removeButton = document.createElement('button');
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", (e) => {
    removeBookFromLibrary(book, idx);
  });
  const toggleReadButton = document.createElement('button');
  toggleReadButton.textContent = 'Toggle read status';
  toggleReadButton.addEventListener("click", (e) => {
    book.toggleRead();
    render();
  })
  bookContainer.appendChild(removeButton);
  bookContainer.appendChild(toggleReadButton);
  libContainer.appendChild(bookContainer);
}

function genBookContainer(book, idx) {
  li = document.createElement('li');
  li.setAttribute('data-value', `${idx}`);
  li.setAttribute('class', 'book-item');

  titleElem = document.createElement('p');
  titleElem.textContent = `Title: ${book.title}`;
  li.appendChild(titleElem);

  authorElem = document.createElement('p');
  authorElem.textContent = `Author: ${book.author}`;
  li.appendChild(authorElem);

  pagesElem = document.createElement('p');
  pagesElem.textContent = `Pages: ${book.numPages}`;
  li.appendChild(pagesElem);

  readElem = document.createElement('p');
  readElem.textContent = `Have you read it: ${book.isRead}`;
  li.appendChild(readElem);
  return li;
}


function clearTable() {
  let table = document.querySelector('#lib-container');
  table.textContent = '';
}

document.getElementById("add-book-button").addEventListener('click', (e) => {
  addBookToLibrary();
  render();
});

function removeBookFromLibrary(book, idx) {
  tableRow = document.querySelector(`li[data-value="${idx}"]`);
  if (tableRow) {
    let table = document.querySelector('#lib-container');
    table.removeChild(tableRow);
    myLibrary.splice(myLibrary.indexOf(book), 1);
  }
}

let myLibrary = [];
const libContainer = document.querySelector('#lib-container');
myLibrary.push(new Book('Test Author #1', 'Test title #1', 500, 'Yes'));
myLibrary.push(new Book('Test Author #2', 'Test title #2', 600, 'No'));
myLibrary.push(new Book('Test Author #3', 'Test title #3', 50, 'Yes'));
render();