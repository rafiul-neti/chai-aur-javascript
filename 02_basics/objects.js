// singleton

// literals
const mySym = Symbol("key1")

const jsUser = {
    name: "rafi",
    age: 16,
    location: "Naogaon",
    email: "rafi@google.com",
    isLoggedIn: false,
    lastLoginDays: ["mon", "sat"],
    "full name": "rafiul islam",
    [mySym]: "key-01"
}

// console.log(jsUser.email)
// console.log(jsUser["full name"])
// console.log(jsUser["email"])
// console.log(typeof jsUser[mySym])

// Object.freeze(jsUser) // make the object immutable.

jsUser.greeting = function () {
    console.log("Hello Js User");
}

jsUser.greetingTwo = function () {
    console.log(`Hello Js User, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

