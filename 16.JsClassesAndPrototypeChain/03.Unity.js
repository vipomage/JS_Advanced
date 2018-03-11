class Rat {
    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }

    toString() {
        let count = this.unitedRats.length
        if (count === 0) {
            return this.name
        } else {
            let ratNames = [this.name];
            let rats = this.unitedRats
            for (let unitedRat of rats) {
                ratNames.push(`##${unitedRat.name}`);
            }
            return ratNames.join('\n')
        }
    }

    unite(newRat) {
        if (newRat.constructor ===  Rat) {
            this.unitedRats.push(newRat)
        }

    }

    getRats() {
        return this.unitedRats
    }

}


let test = new Rat('Pesho');
console.log(test.toString());
console.log(test.getRats());


test.unite(new Rat('Gosho'))
test.unite(new Rat('Sasho'))
test.unite('Sasho')

console.log(test.getRats());

console.log(test.toString());

