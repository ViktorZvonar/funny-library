let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function displayBooks() {
  const libraryDiv = document.getElementById("library");
  libraryDiv.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement("div");

    bookCard.innerHTML = `
            <p>Title: ${book.title}</p>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.read ? "Yes" : "No"}</p>
        `;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove Book";
    removeButton.addEventListener("click", () => removeBook(index));

    const toggleReadButton = document.createElement("button");
    toggleReadButton.textContent = "Toggle Read Status";
    toggleReadButton.addEventListener("click", () => toggleReadStatus(index));

    bookCard.appendChild(removeButton);
    bookCard.appendChild(toggleReadButton);

    libraryDiv.appendChild(bookCard);
  });
}

function addBookToLibrary() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  displayBooks();
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}

function toggleReadStatus(index) {
  myLibrary[index].read = !myLibrary[index].read;
  displayBooks();
}

document.getElementById("book-form").addEventListener("submit", (event) => {
  event.preventDefault();
  addBookToLibrary();
});
