function solve() {
    class Balloon {
        constructor(color,gasWeight){
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }

    class PartyBalloon extends Balloon{
        get ribbon() {
            return this._ribbon;
        }
        constructor(gas,gasWeight,ribbonColor,ribbonLength){
            super(gas,gasWeight);
            this._ribbon = {color:ribbonColor,length:ribbonLength}
        }

    }

    class BirthdayBalloon extends PartyBalloon{
        get text() {
            return this._text;
        }
        constructor(gas,gasWeight,ribbonColor,ribbonLength,text){
            super(gas,gasWeight,ribbonColor,ribbonLength);
            this._text = text;
        }
    }

    return {
        Balloon:Balloon,
        PartyBalloon:PartyBalloon,
        BirthdayBalloon:BirthdayBalloon
    }
}

let classes = solve();

let test = new classes.BirthdayBalloon("Tumno-bqlo", 20.5, "Svetlo-cherno", 10.25, "Happy Birthday!!!");
let ribbon = test.ribbon;
console.log(ribbon.length);
