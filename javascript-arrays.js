// -------- ARRAYS -------------- 

// definition:  a data structure that is used to store a collection of data in an indexed list 

// [1, 2 ,3, 4, 5]     example of an array

//  - each item in array is called an element
//  - elements are separated by commas
//  - enclosed by square brackets
//  - zero-based index
//  - able to use .length property we used on strings

// -------- BRACKET NOTATION -------

//  - allows us to access elements by index
//  - square brackets with desired index inside  example: [3]

let numbers = [1, 2 ,3, 4, 5]


// console.log(numbers[2])      --> output  3
// console.log(numbers.length)  --> output  5
// console.log(numbers[10])     --> output  undefined

// console.log(numbers[2]= 15)  -->  reassigns element at index 2 with a value of 15
console.log(numbers)

// console.log(numbers[6])   --->  output  undefined  (there is no element at index 6 yet!)
// console.log(numbers[6] = 36)   --->  adds an element of value 36 to the array at index 6
console.log(numbers)

// let newArray = ["cat", "dog", true, 42, false]   ---  js allows arrays to be of mixed data types 

// let empty = []   --  you can assign an empty array.  This will be useful in loops

// --------  SETTERS AND GETTERS  -----------

// // SETTERS  - mutators they change the original array
// // GETTERS  - accessor  get the element so you can use it, but id doesn't change the array

// // -----------   SETTERS  -----  

// // .push()   adds and item to the END of array

 let names = ["Fred", "Tom", "Jane"]
    names.push("Sally")
    console.log(names)

//  .unshift()   adds to the beginning of array
// names.unshift("Jojo")
console.log(names)

// // .pop() removes last element from array and it returns its value

console.log(names.pop())

// console.log(names)
// // .shift()  removes first element from array and it returns its value
console.log(names.shift()) 

let removedItem = names.shift()
console.log(removedItem)

console.log(names)

// GETTERS

//   .concat()  add multiple arrays

  let nums = [1, 2, 3]
  let biggerNums = [45, 67, 89]

  console.log(nums.concat(biggerNums))

//  make string array and then back to a string

   let split = "hello".split("")

   console.log(split.join(""))
  

   //   DESTRUCTURING  an array

   let fullName = ["Tricia", "Sykes"]

   let [firstName, lastName] = ["Tricia", "Sykes"]

   let [firstName, lastName] = fullName


   console.log(firstName)


  