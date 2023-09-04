const API_PATH = 'http://localhost:3000';

function pingUrl({
  url,
  queryParams,
  method,
  body,
  headers = {
    'Content-Type': 'application/json',
  },
}) {
  return new Promise((resolve, reject) => {
    const querystring = new URLSearchParams(queryParams);
    fetch(`${url}?${querystring}`, { method, body, headers })
      .then((response) => {
        if (!response.ok) {
          reject(`Error code ${response.status}`);
        }
        if (response.status === 204) {
          return {};
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export const bookAPI = {
  get: () => pingUrl({ url: `${API_PATH}/books` }),
  post: (bookData) =>
    pingUrl({
      url: `${API_PATH}/books`,
      method: 'POST',
      body: JSON.stringify(bookData),
    }),
  put: (bookId, bookData) =>
    pingUrl({
      url: `${API_PATH}/books/${bookId}`,
      method: 'PUT',
      body: JSON.stringify(bookData),
    }),
  patch: (bookId, bookData) =>
    pingUrl({
      url: `${API_PATH}/books/${bookId}`,
      method: 'PATCH',
      body: JSON.stringify(bookData),
    }),
  delete: (bookId) =>
    pingUrl({
      url: `${API_PATH}/books/${bookId}`,
      method: 'DELETE',
    }),
};
