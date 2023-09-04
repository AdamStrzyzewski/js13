import { deleteBook } from "./handlers.js";

const booksTable = document.querySelector("#booksTable");

function createHeader(obj) {
  const row = document.createElement("tr");
  row.insertAdjacentHTML(
    "beforeend",
    [
      ...Object.keys(obj).map((key) => `<th>${key}</th>`),
      `<th>Actions</th>`,
    ].join("")
  );

  return row;
}

function getBookButton({ id, text, handler }) {
  const cell = document.createElement("td");
  const btn = document.createElement("button");
  btn.type = "button";
  btn.dataset.bookId = id;
  btn.innerText = text;
  btn.addEventListener("click", handler);
  cell.append(btn);
  return cell;
}

function createRow(book) {
  const row = document.createElement("tr");

  const cells = [];
  Object.values(book).forEach((value) => {
    const cell = document.createElement("td");
    cell.innerText = value;
    cells.push(cell);
  });

  cells.push(
    getBookButton({
      id: book.id,
      text: "Delete",
      handler: deleteBook,
    })
  );

  row.append(...cells);

  return row;
}

function createNoRowsMessage() {
  const msg = document.createElement("h2");
  msg.classList.add("no-result");
  msg.innerText = "No results found :'(";
  return msg;
}

export function drawBooks(books) {
  booksTable.innerHTML = "";

  if (!books.length) {
    // message about no data
    booksTable.append(createNoRowsMessage());
    return;
  }

  books.sort((a, b) => a.id - b.id);
  const headerRow = createHeader(books[0]);
  booksTable.append(headerRow);
  const rows = [];
  books.forEach((book) => {
    rows.push(createRow(book));
  });
  booksTable.append(...rows);
}
