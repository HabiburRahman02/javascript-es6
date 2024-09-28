class Person {
    constructor(name, age) {
        this.name = name     //this.myName = name
        this.age = age       // this.myAge = age
    }
    ghumai(){
        console.log(`Tmi gumao kno ${this.name}`)
    }
}

const newPerson = new Person('Saddam', 67);
newPerson.ghumai();
console.log(newPerson)