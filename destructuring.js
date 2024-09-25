// object destructuring
const user = {
    name: 'alia bhatt',
    age: 45,
    location: 'India'
}

const { name: nayka, age, location } = user;
// console.log(nayka)

// array destructuring
const numbers = [12, 45, 67, 980];
const [first, second, third, fourth] = numbers;
console.log(first, second, third)

const doubleIt = (num1, num2) => [num1 * 2, num2 * 2]

const [first2, last] = doubleIt(2, 6);
console.log(first2,last)
