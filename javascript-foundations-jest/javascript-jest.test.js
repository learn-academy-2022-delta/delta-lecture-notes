// Jest - Javascript testing framework

// Yarn - a package manager for javascript that contains code being share from other developers 

// $ yarn add jest 
// This command will add jest to your folder (only run once)

// ---- TDD (Test Driven Development) - RED - GREEN - REFACTOR

// 1. Write the test first
// 2. Run the testing suite to see a failing test (RED)
// 3. Write the code
// 4. Run the testing suite to see a passing test (GREEN)
// 5. Refactor confidently if necessary

// ----- Create a function called greeter that returns a string that says Hi Delta 2022!!

// Input: none
// Output: "Hi Delta 2022!!"

// a describe method lists the name of the function OR names the test
describe("greeter", () => {
  // an it method nested within the describe block, that in plain words describes what the function does (feel free to copy from the prompt here)
  it("returns a string that says Hi Delta 2022!!", () => {
    // expect will invoke the function and compare the result to a predetermined expected output using .toEqual matcher (outputOfFunction === expectedOutput)
    expect(greeter()).toEqual("Hi Delta 2022!!")
  })
})

// To run the test $ yarn jest

// ReferenceError: greeter is not defined (RED)


const greeter = () => {
  return "Hi Delta 2022!!"
}


// ---- Create a function that logs help others if you do understand or ask questions if you don't understand

// Input: "yes"
// Output: "help others"

// Input: "no"
// Output: "ask questions"


describe("doYouUnderstand", () => {
  it("logs help others if you do understand or ask questions if you don't understand", () => {
    // (outputOfFunction === expectedOutput)
    expect(doYouUnderstand("yes")).toEqual("help others")
    expect(doYouUnderstand("no")).toEqual("ask questions")
    expect(doYouUnderstand("maybe")).toEqual("Ooops, invalid entry")
  })
})

// ReferenceError: doYouUnderstand is not defined

// Pseudocode:
// Declare a function
// Define parameter of string
// Conditional to evaluate string
// Return help others if string is yes, ask questions if string is no

const doYouUnderstand = (string) => {
  if(string === "yes") {
    return "help others"
  } else if(string === "no") {
    return "ask questions"
  } else {
    return "Ooops, invalid entry"
  }
}



// ----- Prompt: Create a function that allows a customer to filter the cost of an item dynamically by selecting the cost range

// Input: [10, 22, 33, 94, 46, 55, 27, 37, 999, 355], 20, 40
// Output: [22, 33, 27, 37]

// describe("", () => {
//   it("", () => {
//     expect().toEqual()
//     expect().toEqual()
//   })
// })

describe("priceFilter", () => {
  it("filter the cost of an item dynamically by selecting the cost range", () => {
    const prices = [10, 22, 33, 94, 46, 55, 27, 37, 999, 355]
    const expectedPriceResults = [22, 33, 27, 37]
    expect(priceFilter(prices, 20, 40)).toEqual(expectedPriceResults)
  })
})

// ReferenceError: priceFilter is not defined

// Pseudocode:
// Declare a function called priceFilter
// Set 3 parameters - array, num1, num2
// Use filter HOF to iterate on the array
// Return only values greater than num1 and less than num2

const priceFilter = (array, num1, num2) => {
  return array.filter(value => {
    return value > num1 && value < num2
  })
}


// ----- Prompt: Create a function that will filter the name in an array based on an input 

// Input: ["Will", "Pua", "Gene", "David", "Alvin", "Corey"], "i"
// Output: ["Will", "David", "Alvin"]

// Input: ["Will", "Pua", "Gene", "David", "Alvin", "Corey"], "A"
// Output: ["Pua", "David", "Alvin"]

describe("filterNames", () => {
  it("filters the name in an array based on an input ", () => {
    const delta = ["Will", "Pua", "Gene", "David", "Alvin", "Corey"]
    const outputForLetterI = ["Will", "David", "Alvin"]
    const outputForLetterA = ["Pua", "David", "Alvin"]
    expect(filterNames(delta, "i")).toEqual(outputForLetterI)
    expect(filterNames(delta, "A")).toEqual(outputForLetterA)
  })
})

// ReferenceError: filterNames is not defined

// Pseudocode:
// Declare a function called filterNames
// Will have 2 parameters - array, string
// Use filter to only return values that include the string using .includes
// Use .toLowerCase() to make case insenstive

const filterNames = (array, string) => {
  return array.filter(value => {
    return value.toLowerCase().includes(string.toLowerCase())
  })
}
