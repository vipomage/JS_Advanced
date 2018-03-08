let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

let expect = require('chai').expect;

describe('check functions of mathEnforcer', function () {
    it('AddFive()', function () {
        expect(mathEnforcer.addFive('string')).to.be.equal(undefined)
        expect(mathEnforcer.addFive([])).to.be.equal(undefined)
        expect(mathEnforcer.addFive({})).to.be.equal(undefined)
        expect(mathEnforcer.addFive(10)).to.be.equal(15)
        expect(mathEnforcer.addFive(10.5)).to.be.equal(15.5)
        expect(mathEnforcer.addFive(-10.5)).to.be.equal(-5.5)
        expect(mathEnforcer.addFive(-10)).to.be.equal(-5)
    })
    it('subtractTen()', function () {
        expect(mathEnforcer.subtractTen('string')).to.be.equal(undefined)
        expect(mathEnforcer.subtractTen([])).to.be.equal(undefined)
        expect(mathEnforcer.subtractTen({})).to.be.equal(undefined)
        expect(mathEnforcer.subtractTen(15)).to.be.equal(5)
        expect(mathEnforcer.subtractTen(15.5)).to.be.equal(5.5)
        expect(mathEnforcer.subtractTen(-15.5)).to.be.equal(-25.5)
        expect(mathEnforcer.subtractTen(-25)).to.be.equal(-35)
    })
    it('sum()', function () {
        expect(mathEnforcer.sum('string',2)).to.be.equal(undefined)
        expect(mathEnforcer.sum(2)).to.be.equal(undefined)
        expect(mathEnforcer.sum('lolrly')).to.be.equal(undefined)
        expect(mathEnforcer.sum(2,'string')).to.be.equal(undefined)
        expect(mathEnforcer.sum([],2)).to.be.equal(undefined)
        expect(mathEnforcer.sum(2,[])).to.be.equal(undefined)
        expect(mathEnforcer.sum({},2)).to.be.equal(undefined)
        expect(mathEnforcer.sum(2,{})).to.be.equal(undefined)
        expect(mathEnforcer.sum(15,15)).to.be.equal(30)
        expect(mathEnforcer.sum(15.3,15)).to.be.equal(30.3)
        expect(mathEnforcer.sum(15,15.3)).to.be.equal(30.3)
        expect(mathEnforcer.sum(15.3,-15)).to.be.equal(0.3000000000000007)
        expect(mathEnforcer.sum(16,-15)).to.be.equal(1)
        expect(mathEnforcer.sum(-15,16)).to.be.equal(1)
        expect(mathEnforcer.sum(-15,-16)).to.be.equal(-31)
    })
})


