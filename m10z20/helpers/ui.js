const productsTable = document.querySelector('#products');
const limitForm = document.querySelector('#limitForm');

import { loadProductsButton } from './handlers.js';

function generateHeader(products) {
  const header = document.createElement('tr');
  Object.keys(products[0]).forEach((productPropKey) => {
    const headerCell = document.createElement('th');
    headerCell.innerText = productPropKey;
    header.append(headerCell);
  });
  return header;
}
function generateChildrenRows(products) {
  const rows = [];
  products.forEach((product) => {
    const tr = document.createElement('tr');
    Object.keys(product).forEach((productPropKey) => {
      const cell = document.createElement('td');
      const value = product[productPropKey];
      cell.innerText = value.name || value;
      tr.append(cell);
    });
    rows.push(tr);
  });

  return rows;
}

export function drawResults(products) {
  products = products.map((el) => {
    delete el._id;
    delete el.description;
    delete el.createdAt;
    delete el.updatedAt;
    delete el.createdBy;
    delete el.image;
    return el;
  });
  productsTable.innerHTML = '';
  productsTable.append(
    generateHeader(products), // one row with header
    ...generateChildrenRows(products) // multiple rows with products
  );
}

export function drawPaginationControls(metadata) {
  const buttons = [];
  for (
    let i = 1;
    // 20 / 5 = 4
    // 20 / 15 = ceil(1,25) => 2
    i <= Math.ceil(metadata.totalProducts / limitForm.limit.value);
    i++
  ) {
    console.log(i);
    const pageButton = document.createElement('button');
    pageButton.innerText = i;
    pageButton.dataset.page = i;
    if (metadata.currentPage === i) {
      pageButton.classList.add('page-button--active');
    }
    pageButton.addEventListener('click', loadProductsButton);
    buttons.push(pageButton);
  }
  pages.innerHTML = '';
  pages.append(...buttons);
}
