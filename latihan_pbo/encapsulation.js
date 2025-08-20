class Person {
    #age; // properti benar benar private

    constructor(name, age) {
        this.name = name; // public
        this.#age = age; // private
    }

    // Getter
    getAge() {
        return this.#age;
    }

    // Setter dengan validasi
    setAge(newAge) {
        if (newAge < 0 || newAge > 150) {
            console.log('Umur tidak valid');
        } else {
            this.#age = newAge;
        }
    }
}

var orang = new Person('John', 25);
console.log(orang.name);
console.log(orang.getAge());