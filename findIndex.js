
// The findIndex() method in JavaScript is used to find the index of the first element in an array that satisfies a provided testing function. If no element matches, it returns -1.
// syntax - index = array.findIndex((items)=>{item==element}) 


const number = [1,2,3,4,5,6,7,8,9]
let index = number.findIndex(items => items > 3)
console.log(index)

const numbers = [4, 9, 16, 25];
const isOver15 = numbers.findIndex(num => num > 15);

console.log(isOver15);