import {
  preventNonAlphabeticInput,
  validateItem,
} from "./validationHelpers.js";

const title = document.getElementById("title");
const author = document.getElementById("author");

title.addEventListener("keypress", preventNonAlphabeticInput);
author.addEventListener("keypress", preventNonAlphabeticInput);

export function validateForm(event) {
  let isValid = true;

  if (!validateItem(title.value)) {
    event.preventDefault();
    alert("Please provide valid title: min 2 letters.");
    title.classList.add("form__input--error");
    isValid = false;
  } else {
    title.classList.remove("form__input--error");
  }

  if (!validateItem(author.value)) {
    event.preventDefault();
    alert("Please provide valid author name: min 2 letters.");
    author.classList.add("form__input--error");
    isValid = false;
  } else {
    author.classList.remove("form__input--error");
  }

  return isValid;
}
