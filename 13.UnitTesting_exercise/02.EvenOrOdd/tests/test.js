let expect = require('chai').expect;

describe('isOddOrEven', function () {
    it('with a number parameter, should return undefined', function () {
        expect(isOddOrEven(13)).to.be.equal(undefined,'Function did not return the correct result')
    })
    it('with a number parameter, should return even', function () {
        expect(isOddOrEven('even')).to.be.equal('even','Function did not return the correct result')
    })
    it('with a number parameter, should return undefined', function () {
        expect(isOddOrEven('oddline')).to.be.equal('odd','Function did not return the correct result')
    })

})



function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

