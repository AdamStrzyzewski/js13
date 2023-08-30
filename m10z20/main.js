/* eslint-disable import/extensions */
import { loadProducts, changeLimit } from './helpers/handlers.js';

const limitForm = document.querySelector('#limitForm');

limitForm.addEventListener('submit', changeLimit);
limitForm.addEventListener('change', changeLimit);

loadProducts();
