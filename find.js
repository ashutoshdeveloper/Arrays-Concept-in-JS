// find returns the first element of the array which satisfy the given condition
// syntax - Array_name.find((items,index,array)=>{ }) or Array_name.find(function(items,index,array){})
// it also return a signle value
//  if the given condtion is not satisfy then it returns undefined

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
const newNumbers = numbers.find(function (items, index, array) {
     return (
        items>5 && index<7
     )
})
console.log(newNumbers)