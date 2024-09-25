function multiply(num1 = 1, num2 = 1) {
    const multi = num1 * num2
    console.log(num1, num2, multi);
    return multi
}

const multi = multiply(5, 10);

function fullName(first, last = 'Sheikh') {
    const full = first + ' ' + last;
    return full
}

const myFullName = fullName('habibur');
console.log(myFullName)


function friends(names = []) {
    //if argument is array now default parameter is [] empty array
}


function institute(features = {}) {
//if argument is object now default parameter is {} empty object
}