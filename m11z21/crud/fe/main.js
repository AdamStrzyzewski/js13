import { loadBooks, insertBook } from "./helpers/handlers.js";

const insertBookForm = document.querySelector("#bookForm");

loadBooks();

insertBookForm.addEventListener("submit", insertBook);
