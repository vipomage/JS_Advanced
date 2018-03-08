let sharedObject = require('../script').sharedObject;
let expect = require('chai').expect;
let $ = require('jquery');

describe('Test HTML Inputs', function () {
    it('test name prop', function () {
        expect(sharedObject.name).to.equal(null)
        expect(sharedObject.income).to.equal(null)
        expect(sharedObject.changeName('dd')).to.equal('dd')
    })


})





