// Higher Order Functions

// Built-in method - a premade function made by JS developers that are easily invokable

// Iteration - repeating process over and over again until a condition is met.
  // For loops


  // -- Higher Order Functions - a function that takes a function as an arguement
      // Only called on arrays
      // Takes up less cpu


  // ------ .forEach - great for doing something to each element in an array

  // [3, 4, 5, 6].forEach((value, index, array) => {
  //   console.log("value:", value)
  //   console.log("index:", index)
  //   console.log("array:", array)
  // })

  // [3, 4, 5, 6].forEach((value, index, array) => {})

  // HOF's require value and optional values are index and array

    // Value - required arguement in HOF's, is the value of the current index (array[i])
    // Index - current index in iteration process (i)


  // const greeter = (parameter) => {}

  // [2, 3, 4, 5].forEach((apple, banana, orange) => {
  //   console.log("apple:", apple)
  //   console.log("banana:", banana)
  //   console.log("orange:", orange)
  // })



  // ----- .map - iterates over each element in an array and returns a new array that has the same length

  const myArray = [3, 4 ,5, 6]

  // const mappedArray = myArray.map(value => {
  //   return value * 2
  // })

  const mappedArray = myArray.map(value => value * 2)

  console.log(mappedArray) // [ 6, 8, 10, 12 ]
  console.log(myArray) // [ 3, 4, 5, 6 ]


// Create a function that will take in an array of numbers and will display "even" if the number is even, and "odd" if the number is odd
// Input: myArray
// Output: ["odd", "even", "odd", "even"]

// Psuedocode:
  // Create a function called evenOrOdd
  // Take in an array as a param
  // Run .map to iterate over each value in the array
  // Use a conditional to evaluate whether even or odd using modulo
      // if even - return "even"
      // if odd - return "odd"

const evenOrOdd = (array) => {
  return array.map(value => {
    if(value % 2 === 0) {
      return "even"
    } else if(value % 2 !== 0) {
      return "odd"
    } else {
      return "Ooops, something went wrong"
    }
  })
}

console.log(evenOrOdd(myArray)) // [ 'odd', 'even', 'odd', 'even' ]
console.log(evenOrOdd([8, 9, 50, 90, 35])) // [ 'even', 'odd', 'even', 'even', 'odd' ]



  // ---- .filter - filters out what we don't want and only keeps what we do want
          // returns a subset of the array
          // has a built in if statement

const myOtherArray = [5, 6, 7, 8, 9, 10]

const myFilteredArray = myOtherArray.filter(value => {
  return value % 2 !== 0
})

console.log(myFilteredArray) // [ 5, 7, 9 ]


const onlyEvens = (array) => {
  return array.filter(value => value % 2 === 0)
}

console.log(onlyEvens(myOtherArray)) // [ 6, 8, 10 ]
console.log(myOtherArray) // [ 5, 6, 7, 8, 9, 10 ]



// Create a function that filters the cost to between $20 and $40
// Input: [10, 22, 33, 94, 46, 55, 27, 37]
// Output: [22, 33, 27, 37]

// Psuedocode

// Declare a function called filterTwentyToForty
// Declare a parameter called array 
// Use filter to determine if value is between 20 and 40
// Return those results

const prices = [10, 22, 33, 94, 46, 55, 27, 37]

const filterTwentyToForty = (array) => {
  return array.filter(value => {
    return value > 20 && value < 40
  })
}

console.log(filterTwentyToForty(prices)) // [ 22, 33, 27, 37 ]
