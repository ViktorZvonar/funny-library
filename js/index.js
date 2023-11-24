import {
  addBook,
  deleteAllBooks,
  toggleReadStatus,
  deleteBook,
  displayLibrary,
} from "./modules/libraryFunctions.js";

import { validateForm } from "./modules/form-validation.js";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("add-book-button").addEventListener("click", addBook);
  document
    .getElementById("delete-all-books-button")
    .addEventListener("click", deleteAllBooks);

  displayLibrary();
});

window.toggleReadStatus = toggleReadStatus;
window.deleteBook = deleteBook;

window.onload = function () {
  const form = document.getElementById("form");
  if (form) {
    form.onsubmit = validateForm;
  } else {
    console.log("Form not found.");
  }
};
