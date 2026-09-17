/*




<!-- start-main -->

JavaScript Execution Context:

* There's must be a "Global Execution Context" and reffers to 'this' (different in Node.js and Browser(window object))

* There's another execution context: Function Execution Context

* Eval Execution Context


<!-- start-phases -->
> JS Code runs in two phases:
i) Memory Creation Phase (It often called 'Creation Phase')

ii) Execution Phase

Example---->
    let value1 = 5
    let value2 = 20

function addNums(num1, num2) {
    let total = num1 + num2
    return total
}

let result1 = addNums(value1, value2)
let result2 = addNums(10, 6)

Execution steps of the code example above:
1. Global Execution: At first, code runs through Global Execution and it (Global Execution) allocates in 'this'.
2. Memory Phase: In this phase, all variable names are collected and kept 'undefined' in those variables. Like,

    value1 = undefined
    value2 = undefined
    addNums = definition (for functions, their definitions are being passed in the memory phase)
    result1 = undefined
    result2 = undefined

3. Execution Phase: In this phase, all the variable's values will be assigned in them.

    value1 = 5
    value2 = 20
    addNums = definition is already passed in the memory phase. There's nothing for execution yet.
    result1 = since it is a function here, so a new Execution Context will be created here. And the Memory Phase and the Execution Phase will be repeated as well. As like:
        i. Memory Phase:
            num1 = undefined
            num2 = undefined
            total = undefined

        ii. Execution Phase:
            num1 = 5
            num2 = 20
            total = 25

            and at the end, the value of 'total' is returning back it's parent Executional Context or Global Executional context, here is in the 'result1' variable.

    After executing the above, the Execution Context, that was created for the function, will be deleted.

    result2 = will repeat the result1 process

 Note: For every function that is being called somewhere, a new Execution Context will be created there. And the Memory Phase and the Execution Phase will be repeated there as well.

<!-- end-phases -->














*/ 