const express = require("express");
const cors = require("cors");
const path = require("path");

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "./fe")));
app.use(express.urlencoded({ extended: false }));

const books = [
  { id: "0", name: "Hobbit", author: "J.R.R Tolkien" },
  {
    id: "1",
    name: "Do Androids Dream of Electric Sheep?",
    author: "Phillip K. Dick",
  },
];

const getId = () =>
  (books.reduce((acc, el) => Math.max(acc, parseInt(el.id)), 0) + 1).toString();

app.get("/books", (req, res) => {
  res.json(books);
});

app.post("/books", (req, res) => {
  const { name, author } = req.body;
  if (!name) {
    return res.status(422).json({ message: "Missing value for name" });
  }
  if (!author) {
    return res.status(422).json({ message: "Missing value for author" });
  }
  const id = getId();
  const book = { id, name, author };
  books.push(book);
  return res.status(201).json(book);
});

app.put("/books/:bookId", (req, res) => {
  const { name, author } = req.body;
  const { bookId } = req.params;
  const book = books.find((el) => el.id === bookId);
  if (book) {
    book.name = name;
    book.author = author;
    res.json(book);
  } else {
    const book = { id: bookId, name, author };
    books.push(book);
    res.status(201).json(book);
  }
});

app.patch("/books/:bookId", (req, res) => {
  const { name, author } = req.body;
  const { bookId } = req.params;
  const book = books.find((el) => el.id === bookId);
  if (book) {
    if (name) book.name = name;
    if (author) book.author = author;
    res.json(book);
  } else {
    res.status(404).json("no book with this id");
  }
});

app.delete("/books/:bookId", (req, res) => {
  const index = books.findIndex((el) => el.id === req.params.bookId);
  if (index !== -1) {
    books.splice(index, 1);
  }
  res.status(204).json();
});

app.use((req, res) => {
  res.status(404).json({ message: "not found" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
