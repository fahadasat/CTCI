/**
 * @param {string[]} tokens
 * @return {number}
 * 150
 */
var evalRPN = function (tokens) {
    let stack = [];

    const eval = {
        "+": (a, b) => a + b,
        "-": (a, b) => b - a,
        "*": (a, b) => a * b,
        "/": (a, b) => ~~(b / a)

    }


    for (token of tokens) {
        // console.log(stack)
        if (eval[token]) {
            let numTwo = stack.pop();
            let numOne = stack.pop();

            stack.push(eval[token](numTwo, numOne));
        } else {
            stack.push(~~token)
        }

    }

    // console.log(stack)
    return stack[0]
};