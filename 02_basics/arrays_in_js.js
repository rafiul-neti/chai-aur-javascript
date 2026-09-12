// array

const myArr = [1,2,3,4]

const names = ["user_one", "user_two", "user_three"]

const arr2 = new Array(1,5,9)



// array methods
// myArr.push(6)
myArr.push(5)
// myArr.pop()

// myArr.unshift(0)
// myArr.shift()

// console.log(myArr.includes(7));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);


// slice() and splice()
console.log("A ", myArr);

const myA1 = myArr.slice(1, 4)
const myA2 = myArr.splice(1, 4)

console.log(myA1);
console.log(myA2);
console.log("B ", myArr);