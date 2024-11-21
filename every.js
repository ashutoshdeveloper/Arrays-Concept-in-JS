// like some every checks through out the array but it satisfy the condition if all the elements are satisfy
// syntax - Array_name.every((items,index,array)=>{ }) or Array_name.every(function(items,index,array){})
// it returns true or false

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
const newNumbers = numbers.every(function (items, index, array) {
     return (
        items>=1
     )
})
console.log(newNumbers)