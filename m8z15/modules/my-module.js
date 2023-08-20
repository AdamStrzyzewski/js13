export function square(x) {
  const number = parseFloat(x);
  if (Number.isNaN(number)) {
    return null;
  }

  return x * x;
}

export const diag = (x, y) => Math.sqrt(square(x) + square(y));

// export 15;

export const y = 15;
export const x = 30;
// export default x;
export default 30;
