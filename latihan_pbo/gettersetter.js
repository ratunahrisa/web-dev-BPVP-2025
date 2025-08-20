class Car {
    constructor(brand, factory) {
        this._carname = brand;
        this._factory = factory;
    }

    get carname() {
        return this._carname;
    }
    set carname(x) {
        this._carname = x;
    }
    get factory() {
        return this._factory;
    }
    set factory(x) {
        return this._factory = x;
    }
}

newCar = new Car('Pajero', 'Mitsubishi');
newCar.carname = 'Alphard';
newCar.factory = 'Toyota';
console.log(newCar.carname);
console.log(newCar.factory);