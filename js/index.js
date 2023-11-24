import {
  addBook,
  deleteAllBooks,
  displayLibrary,
  deleteBook,
  toggleReadStatus,
} from "./modules/libraryFunctions.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  if (form) {
    form.addEventListener("submit", addBook);
  } else {
    console.log("Form not found.");
  }

  document
    .getElementById("delete-all-books-button")
    .addEventListener("click", deleteAllBooks);

  document
    .getElementById("libraryDisplay")
    .addEventListener("click", function (event) {
      const target = event.target;
      const index = target.getAttribute("data-index");

      if (target.matches(".delete-button")) {
        deleteBook(index);
      } else if (target.matches(".toggle-read-button")) {
        toggleReadStatus(index);
      }
    });

  displayLibrary();
});

window.deleteBook = deleteBook;
window.toggleReadStatus = toggleReadStatus;
