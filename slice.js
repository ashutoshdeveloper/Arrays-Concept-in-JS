// slice is use to extract a part from an array
// it giver a new array 
// it take one starting point and one value that is the length  as parameters
// Syntax - array.slice(0,2)

const arr = [1,2,3,4,5,6,7,8]
const newarr  = arr.splice(2,4)
console.log(newarr)
