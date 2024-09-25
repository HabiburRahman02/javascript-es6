const laptop = {
    brand: 'Asus',
    price: 56000,
    isNew: true,
    color: 'silver'
}
console.log(laptop)
const keys = Object.keys(laptop);
const values = Object.values(laptop)

const entries = Object.entries(laptop);
// two dimensional array
// [
//     [ 'brand', 'Asus' ],
//     [ 'price', 56000 ],
//     [ 'isNew', true ],
//     [ 'color', 'silver' ]
// ]

const {brand, ...other} = laptop
// console.log(other)
// Object.freeze(laptop)
Object.seal(laptop)
delete laptop.brand
laptop.isForm = 'USA'
laptop.price = 80000;


console.log(laptop)