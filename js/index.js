import {
  addBook,
  deleteAllBooks,
  toggleReadStatus,
  deleteBook,
  displayLibrary,
} from "./modules/libraryFunctions.js";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("add-book-button").addEventListener("click", addBook);
  document
    .getElementById("delete-all-books-button")
    .addEventListener("click", deleteAllBooks);

  displayLibrary();
});

window.toggleReadStatus = toggleReadStatus;
window.deleteBook = deleteBook;
