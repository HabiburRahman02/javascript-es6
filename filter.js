const numbers = [45, 67, 34, 56, 86, 35];
const getOdd = numbers.filter(n=> n%2===1);

const friends = ['sadek', 'kalua', 'williams', 'alex ross'];
const bigNames = friends.filter(n=> n.length > 5);
console.log(bigNames)