const max = Math.max(12,45,23,4);
const numbers = [34,45,89,23];
const arrayMax = Math.max(...numbers)

const newNumbers = [...numbers]
numbers.push(111)

console.log(numbers)
console.log(newNumbers)


// some advanced

const numbs = [...numbers, 999, 232]
console.log(numbs)