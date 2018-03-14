class Sumator {
    constructor() { this.data = []; }

    add(item) { this.data.push(item); }

    sumNums() {
        let sum = 0;
        for (let item of this.data) {
            if (typeof (item) === 'number') {
                sum += item;
            }
        }
        return sum;
    }

    removeByFilter(filterFunc) { this.data = this.data.filter(x => !filterFunc(x)); }

    toString() {
        if (this.data.length > 0) {
            return this.data.join(", ");
        } else {
            return '(empty)';
        }
    }
}


let expect = require('chai').expect;

describe('Class Sumator Tests', function () {
    describe('class data tests',()=>{
        it('should contain a property data', function () {
            let myClass = new Sumator();
            expect(myClass).to.haveOwnProperty('data')
        })
        it('property data should be []', function () {
            let myClass = new Sumator();
            expect(myClass.data).to.be.an('array').that.is.empty
        })
    })

    describe('class add() tests', () => {
        it('should contain add() Func', function () {
            let myClass = new Sumator();
            expect(()=> myClass.add()).to.be.an('function')
        })
        it('class.add(num) should add item to data', function () {
            let myClass = new Sumator();
            myClass.add(1)
            expect(myClass.data).to.be.an('array').with.contain(1)
        })
        it('class.add([2,3]) should add item to data', function () {
            let myClass = new Sumator();
            myClass.add([2, 3])
            expect(myClass.data[0]).to.be.an('array').that.include(2).that.include(3)
        })
        it('class.add(()=>{}) should add function to data', function () {
            let myClass = new Sumator();
            myClass.add(()=>{})
            expect(myClass.data[0]).to.be.an('function')
        })
        it('class.add({prop:"hey"}) should add item to data', function () {
            let myClass = new Sumator();
            myClass.add({prop: 'hey'})
            expect(myClass.data[0]).to.be.an('object').to.include({prop: 'hey'})
        })
        it('class.add(new class) should add item to data', function () {
            let myClass = new Sumator();
            myClass.add(new Sumator())
            expect(myClass.data[0]).to.an.instanceOf(Sumator)
        })
    })
    
    describe('class sumNums() Tests', () => {
        it('should contain sumNums Func', function () {
            let myClass = new Sumator();
            expect(()=> myClass.sumNums()).to.be.an('function')
        })

        it('class.sumNums(2,3,4,5) return sum 14', function () {
            let myClass = new Sumator();
            myClass.add(2)
            myClass.add(3)
            myClass.add(4)
            myClass.add(5)
            let result = myClass.sumNums()
            expect(result).to.equal(14)
        })
        it('class.sumNums("lel",2,3,4,5) return sum 14', function () {
            let myClass = new Sumator();
            myClass.add('lel')
            myClass.add(2)
            myClass.add(3)
            myClass.add(4)
            myClass.add(5)
            let result = myClass.sumNums()
            expect(result).to.equal(14)
        })
        it('class.sumNums([],2,3,4,5) return sum 14', function () {
            let myClass = new Sumator();
            myClass.add([])
            myClass.add(2)
            myClass.add(3)
            myClass.add(4)
            myClass.add(5)
            let result = myClass.sumNums()
            expect(result).to.equal(14)
        })
        it('class.sumNums({},2,3,4,5) return sum 14', function () {
            let myClass = new Sumator();
            myClass.add({})
            myClass.add(2)
            myClass.add(3)
            myClass.add(4)
            myClass.add(5)
            let result = myClass.sumNums()
            expect(result).to.equal(14)
        })
        it('class.sumNums({},2,3,4,5) return sum 14', function () {
            let myClass = new Sumator();
            myClass.add({})
            myClass.add(2)
            myClass.add(3)
            myClass.add(4)
            myClass.add(5)
            myClass.add('5.5')
            let result = myClass.sumNums()
            expect(result).to.equal(14)
        })
        it('class.sumNums() return sum 0', function () {
            let myClass = new Sumator();
            let result = myClass.sumNums()
            expect(result).to.equal(0)
        })
    })
    
    describe('class removeByFilter() tests',()=>{
        it('should contain removeByFilter Func', function () {
            let myClass = new Sumator();
            expect(()=> myClass.removeByFilter(x=> x%2 === 0)).to.be.an('function')
        });

        it('should remove items that are even', function () {
            let myClass = new Sumator();
            myClass.add(2)
            myClass.add(3)
            myClass.add(6)
            myClass.add(9)
            myClass.removeByFilter(x => x % 2 === 0);
            expect(myClass.data).to.include(3).that.include(9)
        });
        it('should remove items that are odd', function () {
            let myClass = new Sumator();
            myClass.add(2)
            myClass.add(3)
            myClass.add(6)
            myClass.add(9)
            myClass.removeByFilter(x => x % 2 !== 0);
            expect(myClass.data).to.include(2).that.include(6)
        });
    })

    describe('class toString() tests',()=>{
        it('should contain toString() Func', function () {
            let myClass = new Sumator();
            expect(()=> myClass.toString()).to.be.an('function')
        });
        it('should return all elements with comma and space sep', function () {
            let myClass = new Sumator();
            myClass.add(1)
            myClass.add(3)
            myClass.add('hey')
            expect(myClass.toString()).to.equal('1, 3, hey')
        });
        it('should return (empty) string with no elements', function () {
            let myClass = new Sumator();
            expect(myClass.toString()).to.equal('(empty)')
        });
    })

})