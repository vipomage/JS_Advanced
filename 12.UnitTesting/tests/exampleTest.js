let expect = require('chai').expect;

describe('Group',function () {
    it('SumOfArray()', function () {
        expect(sum([3,3,3])).to.be.equal(9)
    })

})

function sum(arr) {
    let sum = 0;
    for (let num of arr){
        sum+=Number(num)
    }
    return sum;
}

