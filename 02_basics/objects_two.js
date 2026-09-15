// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "user-02";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);
const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "rafi",
            lastName: "islam"
        }
    }
}

const obj1 = {
    1: "a", 2: "b"
}

const obj2 = {
    3: "a", 4: "b"
}

// const obj3 = Object.assign({},obj1, obj2) // merges multiple objects into one
// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 2,
        email: "r2@gmail.com"
    },
    {
        id: 3,
        email: "r3@gmail.com"
    },
]

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
