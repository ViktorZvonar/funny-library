import {
  addBook,
  deleteAllBooks,
  displayLibrary,
} from "./modules/libraryFunctions.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  if (form) {
    form.addEventListener("submit", addBook); // Handle form submission
  } else {
    console.log("Form not found.");
  }

  document
    .getElementById("delete-all-books-button")
    .addEventListener("click", deleteAllBooks);

  displayLibrary();
});
