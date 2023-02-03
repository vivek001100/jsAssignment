let arr=[1,2,3,4,5]
console.log(arr.push(6))
console.log(arr.pop())
arr.shift()
console.log(arr)
arr.unshift(0)
console.log(arr)
let newArr=arr.map((e)=>e*2);
console.log(newArr)
console.log(arr.filter((e)=>e%2!=0));
arr.splice(1,1,6)
console.log(arr)
console.log(arr.slice(2,4))
console.log(arr.sort())
let newStrArr=['a','b','c']
console.log(newStrArr.join(''))




