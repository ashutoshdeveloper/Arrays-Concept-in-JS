// if their is only single value given it replace the whole array by the single value but if you give a 2 value then it fill the first value from the index number given in the 2nd value
// syntax- arr.fill(2) : replace whole the array by two
//  arr.fill(2,2) : replace the whole array by 2 from the index 2
// it also gives a new array

const array= [2,4,5,1]
const newArr = array.fill(2)
console.log(newArr)

newArr2 = array.fill(9,1)
console.log(newArr2)