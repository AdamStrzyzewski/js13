const PRODUCTS_PATH = 'https://api.storerestapi.com/prodcts';

export function getProducts({ page, limit }) {
  const query = new URLSearchParams({ page, limit });
  // { page: 1, limit: 5 }
  // page=1&limit=5
  return new Promise((resolve, reject) => {
    fetch(`${PRODUCTS_PATH}?${query}`)
      .then((response) => {
        if (!response.ok) reject(new Error('Request failed'));
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
}
