// function declaration
function add(a, b) {
    return a + b;
}

// function expression
const add2 = function (a, b) {
    return a + b
}

// arrow function
const add3 = (a, b) => a + b

// const sum = add3(5, 5);
// console.log(sum);

const into = (a, b, c) => a * b * c

const multi = into(5, 5, 5);
console.log(multi)