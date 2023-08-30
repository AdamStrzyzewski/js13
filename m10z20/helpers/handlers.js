/* eslint-disable import/extensions */
import { getProducts } from './fetch.js';
import { drawResults, drawPaginationControls } from './ui.js';
import { errorToast } from './toast.js';

const limitForm = document.querySelector('#limitForm');

export function loadProducts(page = 1) {
  getProducts({ page, limit: limitForm.limit.value })
    .then((productsResponse) => {
      drawResults(productsResponse.data);
      drawPaginationControls(productsResponse.metadata);
    })
    .catch((err) => {
      errorToast(err);
    });
}

export function loadProductsButton() {
  loadProducts(this.dataset.page);
}

export function changeLimit(e) {
  e.preventDefault();
  loadProducts();
}
