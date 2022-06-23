// JavaScript Objects 6/23/2022

// Primitive Data Types
// - string
// - number
// - boolean
// - undefined
// - null
// - symbol - unique identifier, often used as keys in objects

// Object - data type that is a collection of things
// - Array [4, 5, 6, 8]
// - Object {key: "value"}

// CSS:
// h1 {
//   color: "purple"
// }

// let myObject = {key1: "value1", key2: "value2", key3: "value3", key4: 7, key5: true}

let myObject = {
  key1: "value1", 
  key3: "value3", 
  key2: "value2", 
  key5: true,
  key4: 7
}
// referencing a value using dot notation and the key
// console.log(myObject.key2)
// --> value2
// console.log(myObject.key1)

// Nested Objects
let breakfast = {
  item1: "cereal",
  item2: "fish",
  item3: "eggs",
  item4: {
    beverage1: "coffee",
    beverage2: "chai tea",
    beverage3: "orange juice",
    beverage4: {
      smoothie1: "berries",
      smoothie2: "greens",
      smoothie3: "herbal"
    }
  } 
}
// console.log(breakfast.item1)
// --> cereal
// console.log(breakfast.item4.beverage4.smoothie1)
// console.log(breakfast.item4.beverage3)

// console.log(breakfast.item4.beverage4.smoothie1)
// console.log(breakfast.item4.beverage4.smoothie2)
// console.log(breakfast.item4.beverage4.smoothie3)

// Destructuring - creating a defined pathway through a nested object

// let { smoothie1, smoothie2, smoothie3 } = breakfast.item4.beverage4
// console.log(smoothie1)
// console.log(smoothie1)
// console.log(smoothie1)
// console.log(smoothie3)

// Methods
// .pop()
// .toUpperCase()
// .push()
// --> true.pop is not a function - you care calling a methond on the wrong data type

// Method - function (behavior) that belongs to an object
// this - referencing the object name when you are inside the object
// Objects can have static data (any data type) and behavior (function)

let numbers = {
  num1: 5,
  num2: 10,
  num3: 15,
  addUp: function() {
    return this.num1 + this.num2 + this.num3
  }
}
// console.log(numbers.num1)
// --> 5
console.log(numbers.addUp)
// --> [Function: addUp]
console.log(numbers.addUp())
// --> 30

// JSON - JavaScript Object Notation, the data structure used to pass 
