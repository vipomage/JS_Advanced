function solve() {

    class Melon {
        get elementIndex() {
            return this._elementIndex;
        }

        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new Error('Abstract class cannot be instantiated directly')
            }
            this.weight = weight;
            this.melonSort = melonSort;
            this._elementIndex = this.weight * this.melonSort.length
            this.element = this.constructor.name.replace('melon', '')
        }

        toString() {
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }

    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }

    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }

    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }

    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }

    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = 'Water';
        }

        morph() {
            switch (this.element) {
                case 'Water':
                    this.element = 'Fire';
                    break;
                case 'Fire':
                    this.element = 'Earth';
                    break;
                case 'Earth':
                    this.element = 'Air';
                    break;
                case 'Air':
                    this.element = 'Water';
                    break;
            }
        }
    }

    return {Melon, Watermelon, Firemelon, Earthmelon, Airmelon, Melolemonmelon}
}

let classes = solve();
let mutant = new classes.Melolemonmelon(150, "Melo");
mutant.morph();
mutant.morph();
mutant.morph();
console.log(mutant.toString());
