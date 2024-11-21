// In JavaScript, the sort() method is used to sort the elements of an array in place. By default, it sorts the array in ascending order based on string Unicode code points, which might not be suitable for numerical sorting without a comparison function.
//  if the comparesion operator omitted the sorting function sort the array as string in ascending order
// syntax - array.sort();
// it sorted the original array

const fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits);

// Sorting Numbers (Needs a Compare Function)
// syntax -  numbers.sort((a,b)=> a-b)

const numbers = [1,54,949,0,100]
numbers.sort((a, b) => a - b); // Ascending order
console.log(numbers);

const numbers2 = [1,54,949,0,100]
numbers2.sort((a, b) => b- a); // Decending order
console.log(numbers2);

// object case
// syntax - array.sort((a,b)=>a.key - b-key)
const items = [
    {name:"ashu",age:22},
    {name:"ROY",age:32},
    {name:"Lotto",age:24}
]
items.sort((a,b)=>a.age - b.age)
console.log(items)

// if uppercase and lowercase is mix 
// syntax - arr.sort((a,b)=>a.toLoerCase.localeCompare(b.toLowerCase()))
const words = ["Banana", "apple", "Cherry"];
words.sort((a,b)=>a.toLowerCase().localeCompare(b.toLowerCase()))
console.log(words)

// if we dont want to chnage the original array
const arr = [9,5,3,8,6,2]
const arr2 = [...arr].sort((a,b)=>a-b)
console.log(arr,arr2)