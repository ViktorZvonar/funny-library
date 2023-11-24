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
    bookInfo.classList.add("book-container"); 
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
      <button class="icon-button" onclick="toggleReadStatus(${i})">${myLibrary[i].read ? '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="green"><title>check-outline</title><path d="M19.78,2.2L24,6.42L8.44,22L0,13.55L4.22,9.33L8.44,13.55L19.78,2.2M19.78,5L8.44,16.36L4.22,12.19L2.81,13.55L8.44,19.17L21.19,6.42L19.78,5Z" /></svg>' : '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red"><title>close-outline</title><path d="M3,16.74L7.76,12L3,7.26L7.26,3L12,7.76L16.74,3L21,7.26L16.24,12L21,16.74L16.74,21L12,16.24L7.26,21L3,16.74M12,13.41L16.74,18.16L18.16,16.74L13.41,12L18.16,7.26L16.74,5.84L12,10.59L7.26,5.84L5.84,7.26L10.59,12L5.84,16.74L7.26,18.16L12,13.41Z" /></svg>'}</button>
      <button class="icon-button" onclick="deleteBook(${i})"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red"><title>trash-can-outline</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg></button>
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
