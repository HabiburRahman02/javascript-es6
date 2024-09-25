const diff = (a, b) => a - b
const multi = (a, b) => a * b

const getRoll = student => student.roll

const newStudent = {
    name: 'adu bhai',
    roll: 90,
}
console.log(getRoll(newStudent));


const getMarks = (marks) => marks[1];

console.log(getMarks([23, 45, 67, 789]))

const randomNumber = () => Math.random() * 10;
console.log(randomNumber());


const multiCalc = (num1, num2) => {
    const total = num1 + num2;
    const multi = num1 * num2;
    return total + multi;
}

console.log(multiCalc(2,3))
// if i used only i calculation like + - then no return
// another then used must be return keyword 