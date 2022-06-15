//  JAVASCRIPT CONDITIONALS LECTURE //
//   BOOLEAN
// aka decision trees or if else statements

// situation where outcome of evaluation is true or false( Boolean )

// ---------EQUALITY OPERATORS-------

//  ----STRICT EQUALITY
// ===    Checks both data type and value!

// var myName = "Elyse"
// console.log("Elyse" === myName)  //output true
// console.log("Trish" === myName)   //output false

var myFavoriteNumber = 7
// console.log(myFavoriteNumber === 7)
// console.log(myFavoriteNumber === "7")

// ---- LOOSE EQUALITY  -----
//   ==    Checks only the value
//   uses TYPE COERCION 

//type coercison = process of converting value from one data type to another data type

// console.log(myFavoriteNumber == 7)     //  output true
// console.log(myFavoriteNumber == "7")   //  output true

// number data type converted to string data type to perform evaluation

//  not preferred method.  USE STRICT EQUALITY unless necessary. it will be safer for your program

//  ----- RELATIONAL OPERATORS ----
//  returns outcome from comparison (Boolean)
//  greater than  >
//  less than      <
//  greater than or  equal to  >=
//  less than or equal to   <=

// console.log(3 < 4)  
// console.log(3 >= 3)  

//  ----- LOGICAL OPERATORS -----

//evaluate multiple statements at the same time

//  AND    &&
var greeting = "Hello!"
var num = 4
console.log(num > 2 && "Hello!" === greeting)
console.log(num < 2 && "Hello!" === greeting)

//all or nothing.  If one piece is false, it is all false.  Everything must be true for it to be true

//  OR   ||

console.log(num < 2 || "Hello!" === greeting)

//if one is true, it's true

// -------- NEGATION! -----------

//  negate statement by using logical opposite
// BANG operator    !

console.log(num !== greeting)

// ---------CONDITIONALS -----
//  AKA  if else statements 

//  if  starts the statement, must pass evaluation inside ()
//  if evaluates to true, do this action 
//  else do this

if(false) {
    console.log("I'm true!")
} else {
    console.log("Here is the else!")
}

// side note!!!!!!*********** INDENTATION *************!!!!!!!
// sloppy indentation isn't cool.  Makes your code less readable and harder to maintain
//  { }  indents contents
//  make sure your text editor supports good indentation  :)

var myName = "Trish"

if(myName === "Elyse") {
    console.log("Hey Elyse!")
} else {
    console.log("Hey!")
}

//  else if 

var num1 = "Hello"
var num2 = 24

if(num1 > num2) {
    console.log(`${num1} is greater than ${num2}`)
} else if(num1 < num2) {
    console.log(`${num1} is less than ${num2}`)
} else if(num1 === num2) {
    console.log(`${num1} and ${num2} are the same!  Whoopee!`)
} else {
    console.log("Oops! Sorry- cannot evaluate such conditions :(")
}


//   STRING INTERPOLATION  
//   like concatenation, with different syntax and easier with variables. 
    // Uses Backticks ``  ${}
// JS runs line by line top to bottom,  your more specific conditionals should go first.
//  can have two true statements but program will only run the first one, the second will not run

