//  CLASSES 

//classes are recipes for making objects.  They have data (what we need, aka the ingredients) and action (what to do with the things we need)

const myCar = {
    make: "Subaru",
    model: "CrossTrek",
    year: 2016,
    color: "Blue"
}

console.log(myCar)

// specific structure and syntax for declaring classes
// uses the keyword class to declaration
// class names use PascalCase  
// basic class structure  class + NameOfClass + curly brackets
// class MakeCar {
//     //constructor is a method that builds the object  - pass in paramaters that will be the values of our key-value pairs
//     constructor(carMake, carModel,carYear, carColor) {
//     // we use the keyword 'this' to referto the object it belongs to
//         this.make = carMake
//         this.model = carModel
//         this.year = carYear
//         this.color = carColor
//     }
// }

// let myOtherCar = new MakeCar()
// new is keyword that creates a new instance of the object 

// let yourCar = new MakeCar( "Audi", "S4", 2022, "White")
// console.log(yourCar) //MakeCar { make: 'Audi', model: 'S4', year: '2022', color: 'White' }


class MakeCar {
    constructor(carMake, carModel,carYear, carColor) {
        this.make = carMake
        this.model = carModel
        this.year = carYear
        this.color = carColor
        this.isOperational = true  //we can set default values
    }
    carBoasting() {
        return `My ${this.make} ${this.model} is super cool`   
    }
    brokeDown() {
        // create a function that sets changes default value
        this.isOperational = false
    }
}
const someOtherCar = new MakeCar( "Audi", "S4", 2022, "White")
console.log(someOtherCar.carBoasting())
// Here we can run the class method brokeDown and it will change the value
someOtherCar.brokeDown()
console.log(someOtherCar)