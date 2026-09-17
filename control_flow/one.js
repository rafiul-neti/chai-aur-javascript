const month = 3;

switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("Mar");
        break;
    case 4:
        console.log("Apr");
        break;

    default:
        console.log("default case");
        break;
}

// if we don't use the 'break' keyword, then it will execute all the cases except the default without checking them.

/*
falsy values: false, 0, "", -0, (BigInt) 0n, null, undefined, NaN
truthy values: function(){}
*/ 

// Nullish coalescing operator (??): null && undefined
let val1;
val1 = null ?? 10

console.log(val1);
