//  ---  INHERITANCE   --- ??
//  Parent class ===> User
class User {
    constructor(name, email) {
        this.name = name
        this.email = email
    }
    signUp() {
        return `Welcome ${this,name}`
    }
    logIn(){
        return `Hello ${this.name}`
    }
    logOut(){
        return `See ya soon!`
    }
}

class Admin extends User{
    // extends Parent class attributes to the subclass (Child class)  ==> User class 
    constructor(name, email) {
    //  super passes the attributes from Parent to Child ( User ===> Child)
        super(name, email)
        //can add own attributes to subClass
        this.title = "KeyMaster"
    }
    // add custom methods only to Child class
    deleteUser(user) {
    // use filter to remove user whose email matches arguement 
        users = users.filter(entry => entry.email !== user.email)
        }
    
    }

var user1 = new User("Alex", "alex@examle.com")
var user2 = new User("Alvin", "alvin@example.com")
    
var admin = new Admin("leo", "leo@example.com")

var users = [user1, user2, admin]
// console.log(users)
console.log(users)  // prints out array of all users

// [
//   User { name: 'Alex', email: 'alex@examle.com' },
//   User { name: 'Alvin', email: 'alvin@example.com' },
//   Admin { name: 'leo', email: 'leo@example.com', title: 'KeyMaster' }
// ]
admin.deleteUser(user2)
console.log(users)  // outputs users without user2 since it has been deleted.
// [
//     User { name: 'Alex', email: 'alex@examle.com' },
//     Admin { name: 'leo', email: 'leo@example.com', title: 'KeyMaster' }
//   ]