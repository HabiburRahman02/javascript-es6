// var we should not use var
// let const
const myName = 'atik mia';
// myName = 'josim uddin' //given error because const can not reassign
// console.log(myName)

let roll = 56;
roll = 12;
// console.log(roll)

const numbers = [23, 45, 67, 8];
numbers[1] = 566
numbers.push(111)
// console.log(numbers)

const institute = {
    name: 'polytechnic',
    location: 'Sherpur',
}
// institute  = {name: 'abc'} 
//can not reassign but can apply method like: push, pop, shift, slice etc.
institute.location = 'cumilla'
// console.log(institute)

let add = 0;
for(let i = 0; i<10; i++){
    add = add + i;
}
console.log(add)