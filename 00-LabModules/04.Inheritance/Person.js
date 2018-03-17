let Entity = require('./Entity');
let Dog = require('./Dog');

class Person extends Entity {
    get dog() {
        return this._dog;
    }
    set dog(value) {
        if (value instanceof Dog) {
            this._dog = value;
        }
    }
    constructor(name,phrase,dog) {
        super(name);
        this.phrase = phrase;
        this.dog = dog;
    }
    saySomething(){
        return `${this.name} says: ${this.phrase}${this._dog.saySomething()}`
    }

}

module.exports = Person;