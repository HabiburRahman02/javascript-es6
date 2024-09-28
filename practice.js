// task-01
const oddNumbers = [1, 3, 5, 7, 9];

const evenNumbers = [];
for (const number of oddNumbers) {
    const even = number + 1
    evenNumbers.push(even)
}
// console.log(evenNumbers)

const even = oddNumbers.map(n => n + 1);
// console.log(even)


// task- 02
const array = [50, 57, 30, 54, 40, 80, 96, 70];
const divisibleByTen = array.filter(n => n % 10 === 0);
// console.log(divisibleByTen);

const matchedFirst = array.find(n => n % 10 === 0);
// console.log(matchedFirst);

const instructors = [
    { name: 'adil', age: 15, position: 'senior' },
    { name: 'zampa', age: 20, position: 'junior' },
    { name: 'harry', age: 22, position: 'senior' }
];

const allSenior = instructors.filter(ins => ins.position === 'senior');
// console.log(allSenior);

let totalAge = 0;
for (const instructor of instructors) {
    totalAge += instructor.age
}
// console.log(totalAge)

const age = instructors.reduce((total, currentValue) => {
    return total + currentValue.age;
}, 0)
console.log(age)