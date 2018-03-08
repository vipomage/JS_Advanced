let jsdom = require('jsdom-global')();
let $ = require('jquery');
let expect = require('chai').expect;
let sharedObject = require('./script').sharedObject;
document.body.innerHTML =
    `<body>
    <div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>
</body>`

describe('Shared Object Tests', function () {

    describe('test init name and income prop for null',()=>{
        it('test name for null ', function () {
            expect(sharedObject.name).to.equal(null)
        });
        it('test income for null ', function () {
            expect(sharedObject.income).to.equal(null)
        });
    })
    describe('test changeName() func',()=>{
        it('changeName() should not change name.prop on empty string', function () {
            sharedObject.changeName('')
            expect(sharedObject.name).to.equal(null)
        });
        it('changeName() should change name.prop on passing a string', function () {
            sharedObject.changeName('Test')
            expect(sharedObject.name).to.equal('Test')
            sharedObject['name'] = null;
        });
        it('changeName() with valid string NAME Field Value', function () {
            sharedObject.changeName('String');
            let nameField = $('#name')
            expect(nameField.val()).to.be.equal('String');
        });
    })
    describe('test changeIncome() func',()=>{

        it('changeIncome() should not change income.prop on passing a negative int', function () {
            sharedObject.changeIncome(-1)
            expect(sharedObject.income).to.equal(null)
        });
        it('changeIncome() should not change income.prop on passing a floating point', function () {
            sharedObject.changeIncome(3.5)
            expect(sharedObject.income).to.equal(null)
        });
        it('changeIncome() should not change income.prop on passing 0', function () {
            sharedObject.changeIncome(0)
            expect(sharedObject.income).to.equal(null)
        });
        it('changeIncome() should change income.prop on passing a positive int', function () {
            sharedObject.changeIncome(5)
            expect(sharedObject.income).to.equal(5)
            sharedObject['income'] = null;
        });
        it('changeIncome() with a valid Number INCOME Field Value', function () {
            sharedObject.changeIncome(20);
            let incomeField = $('#income')
            expect(incomeField.val()).to.be.equal('20');
        });
    })
    describe('test updateName() func',()=>{
        it('updateName() should not change name.prop on passing a empty string', function () {
            $('#name').val('')
            sharedObject.updateName()
            expect(sharedObject.name).to.equal(null);
        });
        it('updateName() should change name.prop on passing a correct string', function () {
            $('#name').val('lel')
            sharedObject.updateName()
            expect(sharedObject.name).to.equal('lel');
            sharedObject['name'] = null;
        });

    })
    describe('test updateIncome() func',()=>{
        it('updateIncome() should not change income.prop on passing a negative int', function () {
            sharedObject.updateIncome(-1)
            expect(sharedObject.income).to.equal(null)
        });
        it('updateIncome() should not change income.prop on passing a floating point', function () {
            sharedObject.updateIncome(3.5)
            expect(sharedObject.income).to.equal(null)
        });
        it('updateIncome() should not change income.prop on passing a zero', function () {
            sharedObject.updateIncome(0)
            expect(sharedObject.income).to.equal(null)
        });
        it('updateIncome() should change income.prop on passing a positive int', function () {
            $('#income').val(5)
            sharedObject.updateIncome()
            expect(sharedObject.income).to.equal(5)
            sharedObject['income'] = null;
        });
    })
})




