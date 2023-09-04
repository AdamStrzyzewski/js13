import { showLoader, hideLoader } from './loader.js';
import { drawBooks } from './books.js';
import { errorToast } from './toast.js';
import { bookAPI } from './fetch.js';

export function insertBook(e) {
  e.preventDefault();
  let request;
  if (this.id.value === '') {
    // nie mamy id
    // tworzymy nowy - POST
    request = bookAPI.post({
      name: this.name.value,
      author: this.author.value,
    });
  } else if (!this.name.value || !this.author.value) {
    // mamy id i jedną z wartości
    // robimy częściowy update - PATCH
    const payload = {};
    if (this.name.value) {
      payload.name = this.name.value;
    }
    if (this.author.value) {
      payload.author = this.author.value;
    }
    request = bookAPI.patch(this.id.value, payload);
  } else {
    // mamy wszystkie wartości
    // robimy całościowy update lub create - PUT
    // Upsert -> update lub insert
    request = bookAPI.put(this.id.value, {
      name: this.name.value,
      author: this.author.value,
    });
  }
  showLoader();
  request
    .then(() => {
      loadBooks();
    })
    .catch((err) => {
      errorToast(err.toString());
    })
    .finally(() => {
      hideLoader();
    });

  this.reset(); // reset pól formularza
}

export function deleteBook() {
  const bookId = this.dataset.bookId;
  bookAPI.delete(bookId).then(() => {
    loadBooks();
  });
}

export function loadBooks() {
  showLoader();
  bookAPI
    .get()
    .then((response) => {
      drawBooks(response);
    })
    .catch((err) => {
      errorToast(err.toString());
    })
    .finally(() => {
      hideLoader();
    });
}
