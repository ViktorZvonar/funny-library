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
    bookInfo.classList.add("book-container");

    bookInfo.innerHTML += `
      <p>${book.title}</p>
      <p>${book.author}</p>
      <p>${book.pages}</p>
    `;

    let readSvg1 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg",
    );
    readSvg1.setAttribute("width", "25");
    readSvg1.setAttribute("height", "25");
    readSvg1.setAttribute("fill", "green");
    let titleReadSvg1 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "title",
    );
    titleReadSvg1.textContent = "Check Mark";
    readSvg1.appendChild(titleReadSvg1);

    let pathReadSvg1 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path",
    );
    pathReadSvg1.setAttribute(
      "d",
      "M19.78,2.2L24,6.42L8.44,22L0,13.55L4.22,9.33L8.44,13.55L19.78,2.2M19.78,5L8.44,16.36L4.22,12.19L2.81,13.55L8.44,19.17L21.19,6.42L19.78,5Z",
    );
    readSvg1.appendChild(pathReadSvg1);

    let readSvg2 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg",
    );
    readSvg2.setAttribute("width", "25");
    readSvg2.setAttribute("height", "25");
    readSvg2.setAttribute("fill", "red");

    let titleReadSvg2 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "title",
    );
    titleReadSvg2.textContent = "close-outline";
    readSvg2.appendChild(titleReadSvg2);

    let pathReadSvg2 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path",
    );
    pathReadSvg2.setAttribute(
      "d",
      "M3,16.74L7.76,12L3,7.26L7.26,3L12,7.76L16.74,3L21,7.26L16.24,12L21,16.74L16.74,21L12,16.24L7.26,21L3,16.74M12,13.41L16.74,18.16L18.16,16.74L13.41,12L18.16,7.26L16.74,5.84L12,10.59L7.26,5.84L5.84,7.26L10.59,12L5.84,16.74L7.26,18.16L12,13.41Z",
    );
    readSvg2.appendChild(pathReadSvg2);

    let readButton = document.createElement("button");
    readButton.classList.add("toggle-read-button", "icon-button");
    readButton.setAttribute("data-index", i);
    if (book.read) {
      readButton.appendChild(readSvg1);
    } else {
      readButton.appendChild(readSvg2);
    }
    bookInfo.appendChild(readButton);

    let deleteSvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg",
    );
    deleteSvg.setAttribute("width", "25");
    deleteSvg.setAttribute("height", "25");
    deleteSvg.setAttribute("fill", "red");

    let titleDeleteSvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "title",
    );
    titleDeleteSvg.textContent = "trash-can-outline";
    deleteSvg.appendChild(titleDeleteSvg);

    let pathDeleteSvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path",
    );
    pathDeleteSvg.setAttribute(
      "d",
      "M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z",
    );
    deleteSvg.appendChild(pathDeleteSvg);

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button", "icon-button");
    deleteButton.setAttribute("data-index", i);
    deleteButton.appendChild(deleteSvg);
    bookInfo.appendChild(deleteButton);

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

  totalBooks.innerHTML = `Total Books: ${myLibrary.length}`;
}
