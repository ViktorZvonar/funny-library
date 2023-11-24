import { Book } from "./book.js";
import { validateForm } from "./form-validation.js";

let myLibrary = [];
let totalBooks = document.getElementById("total-books");

export function addBook(event) {
  event.preventDefault();

  if (!validateForm(event)) {
    return;
  }

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

  myLibrary.forEach((book, i) => {
    let bookInfo = document.createElement("div");

    let readButton = document.createElement("button");
    readButton.textContent = book.read ? "X" : "Done";
    readButton.classList.add("toggle-read-button");
    readButton.setAttribute("data-index", i);
    bookInfo.appendChild(readButton);

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.setAttribute("data-index", i);
    bookInfo.appendChild(deleteButton);

    bookInfo.innerHTML += `
      <p>${book.title}</p>
      <p>${book.author}</p>
      <p>${book.pages}</p>
      <hr>
    `;
    libraryDisplay.appendChild(bookInfo);

    if (book.read) {
      readCount++;
    } else {
      unreadCount++;
    }
  });

  document.getElementById("books-read").innerHTML = `Read Books: ${readCount}`;
  document.getElementById(
    "books-unread",
  ).innerHTML = `Unread Books: ${unreadCount}`;
}
