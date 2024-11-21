// if we send 2 or more array to a single function parameter we use rest operator
// syntax: function function_name(...params){return(params)} console.log(function_name(arr1,arr2))
// it assign to a new array
// the array will be saperate
let arr1=[1,2,3,4]
let arr2= [4,2,5]
function sum(...numbers){
    return(numbers)
}
 console.log(sum(arr1,arr2))
