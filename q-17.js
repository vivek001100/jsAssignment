
function removeDuplicate(objArray) {
    const count = objArray.reduce((acc, current) => {
        acc[current.name] = acc[current.name] + 1 || 1;
        return acc;
    }, {});
    let newArrayObj = objArray.filter(element => {
        return count[element.name] === 1;
    });
    return newArrayObj
}
const obj = [
    { name: "Karl", age: 20 },
    { name: "Karl", age: 23 },
    { name: "Marry", age: 20 },
    { name: "Aston", age: 20 },
];

console.log(removeDuplicate(obj));

