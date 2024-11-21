// In JavaScript, the reverse() method is used to reverse the order of elements in an array in place, meaning it modifies the original array and also returns it.
// syntax - array.reverse();
// it modifies the original array

const arr1 = [1,2,3,4,5,6,7,8,9]
let arr2 = arr1.reverse()
console.log(arr1,arr2)

//Although reverse() is an array method, it can be used to reverse a string by splitting the string into an array of characters, reversing the array, and then joining it back. 
// syntax - strName.split("").reverse().join("")
// it returns the output in a new string

const str = "ASHUTOSH"
let str2=str.split("").reverse().join("")
console.log(str2)

// Mutates the Original Array: The reverse() method modifies the original array directly. If you want to keep the original array intact, make a copy before reversing
// we have to do it by taking the spreading operator in a new variable

const arr = [12,43,22,38,78]
const reverse = [...arr].reverse()
console.log(arr,reverse)