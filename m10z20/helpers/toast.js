// eslint-disable-next-line import/prefer-default-export
export const errorToast = (msg) => {
  // eslint-disable-next-line no-undef
  Toastify({
    text: msg,
    duration: 1000,
  }).showToast();
};
