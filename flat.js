// In JavaScript, the flat() method is used to create a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// depth is by default is one
// it gives a new array
const numbers = [1,2,[3,4,[5,6]],[7,8]]
const flatArray  = numbers.flat()
console.log(flatArray)

const flatArray2  = numbers.flat(2)
console.log(flatArray2)