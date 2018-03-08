let expect = require('chai').expect;

describe('Check lookupChar', function () {
    it('it should return undefined first arg is array', function () {
        expect(lookupChar([], 3)).to.be.equal(undefined)
    })
    it('it should return undefined first arg is int', function () {
        expect(lookupChar(3, 3)).to.be.equal(undefined)
    })
    it('it should return undefined 2nd arg is not integer', function () {
        expect(lookupChar('blablalbla', 3.34)).to.be.equal(undefined)
    })
    it('it should return undefined second argument is string', function () {
        expect(lookupChar('lol', 'asd')).to.be.equal(undefined)
    })
    it('it should return incorrect index int bigger than length', function () {
        expect(lookupChar('lol', 5)).to.be.equal('Incorrect index')
    })
    it('it should return incorrect index int less than 0', function () {
        expect(lookupChar('lol', -1)).to.be.equal('Incorrect index')
    })
    it('it should return "l"', function () {
        expect(lookupChar('lol', 2)).to.be.equal('l')
    })
    it('it should return undefined 1st arg not string', function () {
        expect(lookupChar(2, 'dd')).to.be.equal(undefined)
    })
    it('it should return undefined first arg is Obj', function () {
        expect(lookupChar({}, 'dd')).to.be.equal(undefined)
    })
    it('it should return h', function () {
        expect(lookupChar('hello', 0)).to.be.equal('h')
    })
    it('it should return last char', function () {
        expect(lookupChar('hello', 4)).to.be.equal('o')
    })
    it('it should return incorrect index', function () {
        expect(lookupChar('hello', 5)).to.be.equal('Incorrect index')
    })
    it('it should return undefined only single arg is passed', function () {
        expect(lookupChar(5)).to.be.equal(undefined)
    })
    it('it should return undefined only single arg is passed', function () {
        expect(lookupChar('hell')).to.be.equal(undefined)
    })
    it('it should return undefined only single arg is passed', function () {
        expect(lookupChar([])).to.be.equal(undefined)
    })
    it('it should return undefined only single arg is passed', function () {
        expect(lookupChar({})).to.be.equal(undefined)
    })
})



function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}
