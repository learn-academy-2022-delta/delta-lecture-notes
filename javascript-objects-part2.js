// OBJECTS IN ARRAYS

const pets = [
             {name: "Tala", type: "dog", age: 4},
             {name: "Milky", type: "chicken", age: 1},
             {name: "Kevin", type: "cat", age: 8},
             {name: "Jack", type: "cat", age: 20}
            ]

// use HOF to iterate over array of objects

// create a function that returns the name and type of each pet

//Pseudocode:  
// declare a function
// iterate .map()
// return result  

//input = pets array
// output =  "Tala is a dog"

const petType = (arrayOfPets) => {
    return arrayOfPets.map(value => {
        return `${value.name} is a ${value.type}`
    })
}

console.log(petType(pets))

const petName = (array) => {
    return array.filter(value => {
        return value.age >= 8
    })
}
console.log(petName(pets))