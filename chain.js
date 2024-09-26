const data = [{ name: 'jamal kodu', age: 45, address: 'kamalpur' }];

// console.log(data[0].address)

const actor = {
    name: 'salman',
    address: {
        street: {
            first: 'block-1',
            second: 'block-2',
            Third: 'block-3',
            separate: [
                { id: 1, houseNo: 23, fee: 8000 }
            ]
        },
        city: 'Dhaka'
    }
}

const seeFirst = actor.address.street.Third
const seeFirst2 = actor.address.street.Third.more?.andMore

// console.log(actor.address.street.separate[0].fee)
console.log(seeFirst2)