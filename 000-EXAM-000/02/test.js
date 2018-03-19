
let PaymentPackage = require('./script.js')
let expect = require('chai').expect;

describe('PaymentPackage tests', function () {
    describe('Class tests', function () {
        it('should throw error if arg is missing', function () {
            expect(()=>{new PaymentPackage('test')}).to.throw
        });
        it('should throw error if arg is missing', function () {
            expect(()=>{new PaymentPackage(2)}).to.throw
        });
        it('should throw error if arg is missing', function () {
            expect(()=>{new PaymentPackage([])}).to.throw
        });
        it('should throw error if arg is missing', function () {
            expect(()=>{new PaymentPackage({})}).to.throw
        });
        it('should throw error if arg is missing', function () {
            expect(()=>{new PaymentPackage(()=>{})}).to.throw
        });
        it('should throw error if wrong args', function () {
            expect(()=>{new PaymentPackage(2,2)}).to.throw
        });
        it('should throw error if wrong args', function () {
            expect(()=>{new PaymentPackage(2,[])}).to.throw
        });
        it('should throw error if wrong args', function () {
            expect(()=>{new PaymentPackage(2,{})}).to.throw
        });
        it('should throw error if wrong args', function () {
            expect(()=>{new PaymentPackage('hey','lel')}).to.throw
        });
        it('should throw error if wrong args', function () {
            expect(()=>{new PaymentPackage([],2)}).to.throw
        });
        it('should throw error if wrong args', function () {
            expect(()=>{new PaymentPackage({},2)}).to.throw
        });
        it('should throw error if wrong args', function () {
            expect(()=>{new PaymentPackage(()=>{},2)}).to.throw
        });
        it('should throw error if wrong args', function () {
            expect(()=>{new PaymentPackage('hey','hey')}).to.throw
        });
        it('should throw error if wrong args', function () {
            expect(()=>{new PaymentPackage(2,'hey')}).to.throw
        });
        it('should throw error if wrong args', function () {
            expect(()=>{new PaymentPackage()}).to.throw
        });

    })
    describe('properties tests',()=>{
        it('should have all properties', function () {
            let builder = new PaymentPackage('test',2)
            expect(Object.getPrototypeOf(builder).hasOwnProperty('name')).to.equal(true, "Missing name accesor");
            expect(Object.getPrototypeOf(builder).hasOwnProperty('value')).to.equal(true, "Missing value accesor");
            expect(Object.getPrototypeOf(builder).hasOwnProperty('VAT')).to.equal(true, "Missing VAT accesor");
            expect(Object.getPrototypeOf(builder).hasOwnProperty('active')).to.equal(true, "Missing active accesor");
            expect(Object.getPrototypeOf(builder).hasOwnProperty('toString')).to.equal(true, "Missing toString accesor");
        });
    })
    describe('accesosr name tests',()=>{
        it('should get the name', function () {
            let my = new PaymentPackage('Test',5);
            expect(my.name).to.equal('Test')
        });
        it('should set the name', function () {
            let my = new PaymentPackage('Test',5);
            expect(my.name = 'pesho').to.equal('pesho')
        });
        it('should not set the name with empty String', function () {
            let my = new PaymentPackage('Test',5);
            expect(()=>my.name = '').to.throw()
        });
        it('should not set the name', function () {
            let my = new PaymentPackage('Test',5);
            expect(()=>my.name = 5).to.throw()
        });
        it('should not set name and throw', function () {
            let my = new PaymentPackage('Test',5);
            expect(()=>my.name = []).to.throw()
        });
        it('should not set name and throw', function () {
            let my = new PaymentPackage('Test',5);
            expect(()=>my.name = {}).to.throw()
        });
    })
    describe('accesosr value tests',()=>{
        it('should get the value', function () {
            let my = new PaymentPackage('Test',5);
            expect(my.value).to.equal(5)
        });
        it('should set the value', function () {
            let my = new PaymentPackage('Test',5);
            expect(my.value = 10).to.equal(10)
        });
        it('should set the value', function () {
            let my = new PaymentPackage('Test',5);
            expect(my.value = 0).to.equal(0)
        });
        it('should not set the value', function () {
            let my = new PaymentPackage('Test',5);
            expect(()=>my.value = -1).to.throw()
        });
        it('should not set the value', function () {
            let my = new PaymentPackage('Test',5);
            expect(()=>my.value = 'lel').to.throw()
        });
        it('should not set value and throw', function () {
            let my = new PaymentPackage('Test',5);
            expect(()=>my.value = 'ads').to.throw()
        });
        it('should not set value and throw', function () {
            let my = new PaymentPackage('Test',5);
            expect(()=>my.value = []).to.throw()
        });
        it('should not set value and throw', function () {
            let my = new PaymentPackage('Test',5);
            expect(()=>my.value = {}).to.throw()
        });
    })
    describe('accessor VAT tests',()=>{
        it('should get Vat', function () {
            let my = new PaymentPackage('Test',5);
            expect(my.VAT).to.equal(20)
        });
        it('should set Vat', function () {
            let my = new PaymentPackage('Test',5);
            expect(my.VAT = 30).to.equal(30)
        });
        it('should set Vat', function () {
            let my = new PaymentPackage('Test',5);
            expect(my.VAT = 0).to.equal(0)
        });
        it('should not set Vat', function () {
            let my = new PaymentPackage('Test',5);
            expect(()=>my.VAT = -30).to.throw()
        });
        it('should not set Vat', function () {
            let my = new PaymentPackage('Test',5);
            expect(()=>my.VAT = 'ads').to.throw()
        });
        it('should not set Vat', function () {
            let my = new PaymentPackage('Test',5);
            expect(()=>my.VAT = []).to.throw()
        });
        it('should not set Vat', function () {
            let my = new PaymentPackage('Test',5);
            expect(()=>my.VAT = {}).to.throw()
        });
    })
    describe('accesor active tests',()=>{
        it('should be set True default', function () {
            let my = new PaymentPackage('Test',5);
            expect(my.active).to.equal(true)
        });
        it('should set the active', function () {
            let my = new PaymentPackage('Test',5);
            expect(my.active = false).to.equal(false)
        });
        it('should throw on string', function () {
            let my = new PaymentPackage('Test',5);
            expect(()=>my.active = 'hey').to.throw()
        });
        it('should throw on arr', function () {
            let my = new PaymentPackage('Test',5);
            expect(()=>my.active = []).to.throw()
        });
        it('should throw on obj', function () {
            let my = new PaymentPackage('Test',5);
            expect(()=>my.active = {}).to.throw()
        });
        it('should throw on num', function () {
            let my = new PaymentPackage('Test',5);
            expect(()=>my.active = 5).to.throw()
        });
    })
    describe('toString() tests',()=>{
        it('should return overview in string representation', function () {
            let my = new PaymentPackage('Test',1000);
            expect(my.toString()).to.equal('Package: Test\n' +
                '- Value (excl. VAT): 1000\n' +
                '- Value (VAT 20%): 1200')
        });
        it('should return overview in string representation with false', function () {
            let my = new PaymentPackage('Test',1000);
            my.active = false;
            expect(my.toString()).to.equal('Package: Test (inactive)\n' +
                '- Value (excl. VAT): 1000\n' +
                '- Value (VAT 20%): 1200')
        });
    })
})
