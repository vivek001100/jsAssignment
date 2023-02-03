let obj={'a':1,'b':2,'c':3}
console.log(Object.keys(obj))
console.log(Object.values(obj))

const obj1 = { 'd': 4 };
const obj2 = Object.assign(obj, obj1);
console.log(obj2);

console.log(obj2.hasOwnProperty("a"));
console.log(obj2.hasOwnProperty("b"));
