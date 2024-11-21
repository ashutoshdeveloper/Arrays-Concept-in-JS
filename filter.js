// Filter also works same like map the only difference is that is takes a condition inside it and return only those element who satisfy the condition
// // It takes a calback function. Inside the Callback function it take 3   parameters(Items, Index , Array)
// syntax - Array_name.filter((items,index,array)=>{ }) or Array_name.filter(function(items,index,array){})
// It returns a new array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
const newNumbers = numbers.filter(function (items, index, array) {
     return (
        items> 5 && index > 5

        // this way we can put multiple conditions
     )
})
console.log(newNumbers)
