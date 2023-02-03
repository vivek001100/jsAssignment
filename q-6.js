var a = {a: 1};
var b = {a: 1};
console.log(a == b);
console.log(a === b);
var c = a;
console.log(a == c);
console.log(a === c);
//Output :- false
//          false
//          true
//          true
// Explanation : a==b is false because with in coparison between objects or array there is always comparison between their memory address
// since a and b are both different variable then their address are also different 
// while c=a means it assigning the value with address of a to c hence c==a and c===a gives true