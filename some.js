// some is similar to filter but filter produce output for every single element of the array but some generate output if any of the element satisfy the condition
// It takes a calback function. Inside the Callback function it take 3   parameters(Items, Index , Array)
// syntax - Array_name.every((items,index,array)=>{ }) or Array_name.some(function(items,index,array){})
// it returns only true or false

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
const newNumbers = numbers.some(function (items, index, array) {
     return (
        items> 5 && index > 9

        // this way we can put multiple conditions
     )
})
console.log(newNumbers)