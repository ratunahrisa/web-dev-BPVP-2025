class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // method
    say() {
        return `Hello, my name is ${this.name}. I am ${this.age} years old.`
    }
}

var person2 = new Person("Rudi", 20);
console.log(person2.say());