const numbers = [1, 2, 3, 4, 5];

const totalValue = numbers.reduce((prevValue, currentValue) => {
    return prevValue + currentValue;
}, 0)
// console.log(totalValue)

const products = [
    { name: 'asus', price: 56000 },
    { name: 'hp', price: 40000 },
    { name: 'dell', price: 46000 },
    { name: 'apple', price: 156000 },
]

// map
const laptopNames = products.map(p => p.name)
// console.log(laptopNames)

// forEach
products.forEach(p=>{
    // console.log(p.price)
})

// filter
const expensive  = products.filter(p=> p.price > 50000);
// console.log(expensive)

// filter
const lowerPrice = products.filter(p=> p.price < 50000);
// console.log(lowerPrice)

// find
const matchedFirst = products.find(p=> p.price < 50000);
// console.log(matchedFirst)

// reduce
const total = products.reduce((total,currentValue)=>{
    return total + currentValue.price
},0)

console.log(total)