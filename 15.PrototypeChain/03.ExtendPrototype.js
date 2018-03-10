let Person = require('./02.InheritingAndReplacingToStr')

function extendPrototype(classToExtend){
    classToExtend.prototype.species = 'Human';
    classToExtend.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`
    }
}



let p = new Person('Gosho','gosh@mail.com');
extendPrototype(Person)
console.log(p.toSpeciesString());