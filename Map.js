// Map inbuiilt loop. 
// It takes a calback function. Inside the Callback function it take 3   parameters(Items, Index , Array)
// syntax - Array_name.map((items,index,array)=>{ }) or Array_name.map(function(items,index,array){})
// It returns a toatally new array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
const newNumbers = numbers.map(function (items, index, array) {
    items= items+5
     return {items, index}
    //  if we need to return multiple thing then we need to put it inside {}.
})
console.log(newNumbers)

