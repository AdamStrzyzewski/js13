// import myModule from './my-module.js';
// import { diag, square as anyOtherName } from './my-module.js';
// const { square: anyOtherName } = myModule;
// const diag = 5; // error
// diag = 5; // error const
// import * as myModule from './my-module.js';
// console.log(anyOtherName(5, 10));
// console.log(diag(5, 10));
// console.log(myModule.diag(5, 10));

// import defaultValue, { square } from './my-module.js';
import { square } from './my-module.js';

console.log(square(15));
