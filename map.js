// const numbers = [3, 4, 6, 2];

// const doubled = []
// for (const number of numbers) {
//    doubled.push(number * 2)
// }

// console.log(doubled)


const numbers = [3, 4, 6, 2];

const doubleIt = num => num * 2

const result = numbers.map(doubleIt);

const output = numbers.map(n=> n *2)


console.log(output)