"use strict";
// class User {
//     public email: string
//     private name: string
//     readonly city: string = "Poznań"
//     constructor(email : string, name: string){
//         this.email = email; 
//         this.name = name
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Poznań";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    //geter, seter
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const pawel = new User("pst@pst", "pawel");
// pawel.deleteToken()
