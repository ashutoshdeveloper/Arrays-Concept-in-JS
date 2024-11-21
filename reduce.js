// reduce take 4 parameter - (previous_value, item,index,array) but we dont use index and array mostly
// previous is the first index of an array by default. but if we initialize the base value that will be consider as the previous value
// syntax - const newArr = array_name.reduce((previous,items)=>{},base_value)
// it returns a single value 
//  generaly it uses in addition 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
const newNumbers = numbers.reduce((prev,items)=> {
    let arr=[]
    arr=items+prev
     return (
        arr
    )
})
console.log(newNumbers)
