// const User ={
//     name: "pawel",
//     email: "pst@pst",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}){}

// let newUser = {name: "pawel", isPaid: false, email: 'p@p.com'} 

// createUser(newUser)




// function createCourse():{name: string, price: number}{
//     return {name: "reactjs", price: 399}
// }


// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;
// }

// function createUser(user: User): User{
//     return {name: "", email:'', isActive: true}
// }

// createUser({name: "", email:'', isActive: true})

type User ={
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    credcardDetails?: number;
}

let myUser: User = {
    _id: "12345",
    name: 'h',
    email: 'p@p.com',
    isActive: false
}

type cardNumber = {
    cardNumber: string;
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate &{
    cvv: number
}

myUser.email = "p@gmail.com"
// myUser._id = 'asa'

export {}