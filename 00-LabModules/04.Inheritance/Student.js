let Person = require('./Person');

class Student extends Person {
    get id() {
        return this._id;
    }
    set id(value) {
        if (value === 'number') {
            this._id = value;
        }
    }
    constructor(name,phrase,dog,id) {
        super(name,phrase,dog);
        this._id = id;
    }
    saySomething(){
        return `Id: ${this.id} ${this.name} says: ${this.phrase}${this.dog.saySomething()}`
    }
}

module.exports = Student;