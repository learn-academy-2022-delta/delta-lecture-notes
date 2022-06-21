
var nfcWest = ["Arizona", "Los Angeles", "Seattle", "San Francisco" ]
var afcWest = ["Denver", "Kansas City", "Las Vegas", "Los Angeles"]

// input:  array of strings (best to be specific on your data type)
// output:  new array ["Arizona will win the division", "Los Angeles will win the division", "Seattle will win the division", "San Francisco will win the division"] 

// create function that takes in an array
// access each element in the array
// manipulate element -> modify the string (add to sentence)
// return the new array

// const declareWinner = (array) => {
//     // create an empty array to add newly created elements to 
//     let winners = []
//     // iterate over array and add to sentence using string interpolation and .push() method
//     for(let i=0; i<array.length; i++) {
//        winners.push(`${array[i]} will win the division!`)
//     //    console.log(winners)
//     }
//     return winners
// }

// console.log(declareWinner(nfcWest))
// console.log(declareWinner(afcWest))
// console.log(declareWinner(nums))

// typeof   --- checks the datatype and returns data type

// console.log(typeof "football")


const declareWinner = (array) => {
    // create an empty array to add newly created elements to 
    let winners = []
    // iterate over array and add to sentence using string interpolation and .push() method
    for(let i=0; i<array.length; i++) {
        //check the data type to make sure it's a string and then convert to sentence
        if(typeof array[i] === "string") {
            winners.push(`${array[i]} will win the division!`)
        } else {
            //if it's not a string, give an error message
            winners.push("you cannot do that")
        }
    }
    return winners
}

// console.log(declareWinner(nfcWest))
// console.log(declareWinner(nums))

var nums = [8, 15, 36,42]

const triples = (array) => {
    // create an empty array to hold our results
    let result = []
    // iterate over each
    for(let i=0; i<array.length; i++) {
        //multiply each element in order by 3, and push to the empty array to fill the array 
        result.push(array[i] * 3)
    }
    return result
}

console.log(triples(nums))

// a couple of things to remember:
//   Use the let declaration for the empty array because we are modifying the array
//   The empty array must come before the for loop otherwise the loop won't know it exists (js runs top to bottom)
// the return goes outside of the for loop