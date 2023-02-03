// WAP to sort a string, considering the uppercase letters greater than the lowercase. Also remove all the spaces from the output.
// Danny is dancing → aacdDgiinnnnsy

const str = 'Danny is dancing';
let st1 = str.split(' ').join('').split('')
console.log(st1.sort(function compareFn(a, b) { return a.localeCompare(b) }).join(''))