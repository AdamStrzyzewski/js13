const parent = document.querySelector('#parent');

// console.log(parent.innerHTML);

let pString = '';
for (let i = 1; i <= 5; i += 1) {
  pString += `
  <p class="p-${i}" style="color:red;">
    Hello World ${i}
  </p>\n
  `;
}
console.log(pString);
// parent.innerHTML += pString;
parent.insertAdjacentHTML('beforebegin', pString); // before
// parent.insertAdjacentHTML('afterend', pString); // after
// parent.insertAdjacentHTML('afterbegin', pString); // prepend
// parent.insertAdjacentHTML('beforeend', pString); // append
