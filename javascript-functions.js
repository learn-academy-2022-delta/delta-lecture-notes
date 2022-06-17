// JavaScript Functions 6/17/2022

// Functions - run when we decide, and are reusable

// Input/output - no other data should affect the function - encapsulation

// Basic function, output only:
// const makeCoffee = () => {
//   // output
//   return "Coffee is made!"
// }

// invoking the function - telling the function to run
// console.log(makeCoffee())
// console.log(makeCoffee())
// console.log(makeCoffee())
// console.log(makeCoffee())
// console.log(makeCoffee())
// console.log(makeCoffee())


// Function with input and output:
// Input is a special variable that belongs to the function - parameter
// const makeCoffee = (coffeeType) => {
//   // output
//   return `${coffeeType} is made!`
// }
// console.log(makeCoffee())
// --> undefined is made!
// console.log(makeCoffee("Latte"))
// --> Latte is made!
// console.log(makeCoffee("Mocha"))
// console.log(makeCoffee("Black coffee"))
// console.log(makeCoffee("Espresso"))


// Function with logic and multiple parameters:

// Pseudo coding - writing process notes in regular english
// Create a function that takes a coffee type and a coffee size and tells me my order (what coffee and the price). All smalls are $4, all mediums are $5, and all larges $6.
// - function expression
// - parameters: coffeeType and coffeeSize
// - make a decision on the size to determine the price - conditional
// - return string interpolation with the correct order

// const makeCoffee = (coffeeType, coffeeSize) => {
//   if(coffeeSize === "small") {
//     return `${coffeeType} is $4`
//   } else if(coffeeSize === "medium") {
//     return `${coffeeType} is $5`
//   } else if(coffeeSize) === "large") {
//     return `${coffeeType} is $6`
//   } else {
//     return "Please try your order again."
//   }
// }
// console.log(makeCoffee("Latte", "small"))
// --> Latte is $4
// console.log(makeCoffee("Mocha", "Medium"))
// --> Please try your order again.
// console.log(makeCoffee(true, "large"))
// --> true is $6


// Edge cases:
// const makeCoffee = (coffeeType, coffeeSize) => {
//   if(coffeeSize.toLowerCase() === "small") {
//     return `${coffeeType} is $4`
//   } else if(coffeeSize === "medium" || coffeeSize === "Medium") {
//     return `${coffeeType} is $5`
//   } else if(coffeeSize.toLowerCase() === "large") {
//     return `${coffeeType} is $6`
//   } else {
//     return "Please try your order again."
//   }
// }
// console.log(makeCoffee("Mocha", "Medium"))
// console.log(makeCoffee("Mocha", "MEDIUM"))
//
// console.log(makeCoffee("Coffee", "large"))
// console.log(makeCoffee("Coffee", "LARGE"))
// console.log(makeCoffee("Coffee", "laRGE"))


// Abstraction:
const coffeeOrder = "Mocha"
const size = "Medium"

const makeCoffee = (coffeeType, coffeeSize) => {
  if(coffeeSize.toLowerCase() === "small") {
    return `${coffeeType} is $4`
  } else if(coffeeSize === "medium" || coffeeSize === "Medium") {
    return `${coffeeType} is $5`
  } else if(coffeeSize.toLowerCase() === "large") {
    return `${coffeeType} is $6`
  } else {
    return "Please try your order again."
  }
}
console.log(makeCoffee(coffeeOrder, size))
