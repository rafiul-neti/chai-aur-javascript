function sayMyName () {
    console.log("rafiul");
}
// sayMyName()

// function addTwoNumbers (number1, number2) {
//     console.log
//      (number1 + number2);
// }

function addTwoNumbers (number1, number2) {
//   const result = 
//      (number1 + number2);

//      return result

return number1 + number2
}

const res = addTwoNumbers(3,"4")

// console.log(res);

function loginUserMessage (username) {
return `${username} just logged in`

// if username is not passed through argument, it will be undefined in this function scope.
}

console.log(loginUserMessage("hitesh"))