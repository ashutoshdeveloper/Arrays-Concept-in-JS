// splice removes elements from an array and if necessary inserts new wlwmwnt in their place,returning the deleted element
// it takes the 3 parameter[start(the zero based location),deletecount(the number of element to remove),returns(an array containing the element which are deleted)] 
// it is use to also add element but it does not return any arr
//  it returns a new array
// syntax for adding- arr.splice(start,deletecount,"which is to be add") for deleteing - arr.splice(start,deletecount,deleted array)

const num= [9,5,7,8,2,4,1]
const newArr= num.splice(2,3)
console.log(newArr)

const addArray = num.splice(1,2,"banana")
console.log(num)