// Array declearation
let arr = new Array();
let arr1 = [];

// How to add someting
let arr2 = ["apple","banana","mango"]
let arr3 = [{name:"Ashu",age:22},{name:"Ram",age:"23"}]
let arr4 = ["apple",22,'V',{name:"Ashu",age:22}]

// How to access them
console.log(arr2[0],arr2[1])
console.log(arr3[0],arr3[1])
console.log(arr4[0],arr4[3])

// How to get the size of an Array
let size = arr3.length
console.log(size)

// Add and Remove element from the end of the array(PUSH AND POP) 
// * It maniupulate the same Array
arr2.push("papaya")
arr3.pop()
console.log(arr2,arr3)

// Adding and removing element from the top of the array
arr3.unshift("My name is ASHUTOSH RATNA NANDA")
arr2.shift()
console.log(arr2,arr3)

//Looping in Array
// For loop
for(let i=0;i<arr4.length;i++)
    {
        console.log(arr4[i])
    } 
// While loop
let i =0
while(i < arr2.length)
{
    console.log(arr2[i])
    i++
}


