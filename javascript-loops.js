// JAVASCRIPT LOOPS

// Iteration - process of repeating something over and over again

// For loops don't innately connect to arrays
// For loops are great for counting!

// -- Info needed to set up a for loop
  // Where to start counting
  // Where to stop counting
  // How to get from the start to the stop

  // --- VARIABLE DECLARATIONS

    // var - global scope , can be accessed anywhere inside or outside of block
    // let - only available inside the block defined in, can be reassigned but not redeclared
    // const - cannot redeclare or reassign

  // if(true) {
  //   var myName = "Elyse"
  // }
  // console.log(myName) // This will work

  // if(true) {
  //   let yourName = "Trish"
  // }
  // console.log(yourName) // This will throw and error

// let myCat = "Tobey"
// myCat = "Nala"

// console.log(myCat) // This will work

// const myDog = "Bruno"
// myDog = "Kodi"

// console.log(myDog) // This will throw an error

// --- LOOPS ---

// It is common to use the variable name index to store current count (shortend use i)

// -- Info needed to set up a for loop
  // Where to start counting (let index = 0)
  // Where to stop counting (index < 10)
  // How to get from the start to the stop (index = index + 1)

// for(let index = 0; index < 10; index = index + 1) // Longhand way

for(let i = 0; i < 10; i++) {
  console.log(i)
}


// --- Connecting Loops to Arrays

// Arrays start with index 0
// All arrays have a length property
// Once we have an index, we can extract the value

const numsArray = [5, 6, 7, 8, 9]
console.log("length", numsArray.length)
for(let i = 0; i < numsArray.length; i++) {
  console.log("index", i, "value", numsArray[i])
}

// --- Creating Logic in the Loop

for(let i = 0; i < numsArray.length; i++) {
  if(numsArray[i] % 2 !== 0) {
    console.log(`${numsArray[i]} is an odd number!`)
  }
}
