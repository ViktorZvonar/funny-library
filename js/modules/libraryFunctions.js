import { Book } from "./book.js";

let myLibrary = [];
let totalBooks = document.getElementById("total-books");

export function addBook() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;

  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);

  displayLibrary();
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("read").checked = false;
}

export function deleteAllBooks() {
  myLibrary = [];
  totalBooks.innerHTML = "Total Books";
  displayLibrary();
}

export function toggleReadStatus(index) {
  myLibrary[index].read = !myLibrary[index].read;
  displayLibrary();
}

export function deleteBook(index) {
  myLibrary.splice(index, 1);
  displayLibrary();
}

export function displayLibrary() {
  let libraryDisplay = document.getElementById("libraryDisplay");
  libraryDisplay.innerHTML = "";

  let readCount = 0;
  let unreadCount = 0;

  for (let i = 0; i < myLibrary.length; i++) {
    let bookInfo = document.createElement("div");
    totalBooks.innerHTML = `<p>Total Books ${i + 1}</p>`;

    let readButton = document.createElement("button");
    readButton.textContent = myLibrary[i].read ? "X" : "Done";
    readButton.onclick = (function (index) {
      return function () {
        toggleReadStatus(index);
      };
    })(i);

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = (function () {
      return function () {
        deleteBook(i);
      };
    })(i);

    bookInfo.innerHTML = `
            <p>${myLibrary[i].title}</p>
            <p>${myLibrary[i].author}</p>
            <p>${myLibrary[i].pages}</p>
            <button onclick="toggleReadStatus(${i})">${
      myLibrary[i].read ? "Done" : "X"
    }</button>
            <button onclick="deleteBook(${i})">Delete</button>
            <hr>
        `;
    libraryDisplay.appendChild(bookInfo);

    if (myLibrary[i].read) {
      readCount++;
    } else {
      unreadCount++;
    }

    document.getElementById(
      "books-read",
    ).innerHTML = `Read Books: ${readCount}`;
    document.getElementById(
      "books-unread",
    ).innerHTML = `Unread Books: ${unreadCount}`;
  }
}
