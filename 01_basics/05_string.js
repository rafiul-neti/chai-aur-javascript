const name = "rafi"
const repoCount = 40

// console.log(name + repoCount);

// modern syntax to concatenate string ``
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// another way to declare String
const gameName = new String("rafi-fc")

console.log(gameName[0]);
console.log(gameName.__proto__);

// some string methods
console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));
console.log(gameName.indexOf('i'));

// substring() method doesn't accept negative index values
const newString = gameName.substring(0, 4)
console.log(newString);

// slice() method accepts negative index values
const anotherString = gameName.slice(-7, 4)
console.log(anotherString);



// trim() method removes the extra spaces of a string
// there are other two trim() method as well: trimStart() and trimEnd()
const newStringOne = '   rafi   '
console.log(newStringOne);
console.log(newStringOne.trim());

// replace() method takes two arguments. first, what will be searched and second, with what the search value will be replaced
const url = "https://localhost:5242/rafi%20fc";
console.log(url.replace("%20", "-"));

// includes() method
console.log(url.includes("%20"));

// convert a string to an array based on a separator
console.log(gameName.split("-"));

