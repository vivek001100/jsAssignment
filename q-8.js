let a;
console.log(a === undefined);
console.log(a === null);
console.log(a*2);
console.log(`${a} is the value of a`);
// Output :-   true
//             false
//             NaN
//             undefined is the value of a
// Explanation :- Since a in initialized but not defined with any value hence its value is undefined
// undefined === undefined //true
// undefined === null // false because these are of different types