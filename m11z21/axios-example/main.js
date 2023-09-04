// console.log(axios);

axios.get('http://localhost:3000/books').then((result) => {
  console.log(result.data);
});

axios
  .post('http://localhost:3000/books', {
    author: 'Baranowski',
  })
  .then((result) => {
    console.log(result.data);
  })
  .catch((err) => {
    // 422
    // 404
    // server response
    console.log('err', err.response.data);
  });
