const nayoks = {
    name: 'kodu',
    age: 78,
    movie: 'poran jai joliye',
    isHero: false
}


// const template = `${nayoks.name} is very cute`;
// console.log(template)

const { name, movie, ...other } = nayoks
// console.log(name, movie, other);

const [first, second, third, ...lastOther] = [34, 56, 67, 45, 34, 234, 23, 23];
// console.log(first, second, third, lastOther)

const square = a => a * a
const add = (x, y) = x + y