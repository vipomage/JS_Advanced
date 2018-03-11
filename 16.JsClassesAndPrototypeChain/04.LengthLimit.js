class Stringer{
    get innerString() {
        return this._innerString;
    }
    set string(value) {

    }
    get innerLength() {
        return this._innerLength;
    }
    set length(value) {

    }

    constructor(string,length){
        this._innerString = string;
        this._innerLength = length;
    }
    toString(){
        if (this._innerLength < this._innerString.length){
            return this._innerString.slice(0,this._innerLength)+'...';
        }else{
            return this._innerString
        }
    }
    decrease(value){
        if (value>= this._innerLength) {
            this._innerLength = 0;
        }else{
            this._innerLength -= value;
        }
    }
    increase(value){
        this._innerLength +=value;
    }
}


let test = new Stringer('Test',5);
console.log(test.toString());
test.decrease(3);
console.log(test.toString());
test.decrease(5);
console.log(test.toString());
test.increase(4)
console.log(test.toString());
