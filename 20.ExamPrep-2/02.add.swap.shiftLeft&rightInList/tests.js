let createList = require('./script');
let expect = require('chai').expect;

describe('CreateList FN Tests', function () {
    let builder;
    beforeEach(function () {
        builder = createList();
    });
    describe('createlist() tests', () => {
        it('should have properties', function () {
            expect(builder.hasOwnProperty('add')).to.equal(true, "Missing append function");
            expect(builder.hasOwnProperty('shiftLeft')).to.equal(true, "Missing prepend function");
            expect(builder.hasOwnProperty('shiftRight')).to.equal(true, "Missing insertAt function");
            expect(builder.hasOwnProperty('swap')).to.equal(true, "Missing remove function");
            expect(builder.hasOwnProperty('toString')).to.equal(true, "Missing toString function");
        });
    })
    describe('list.add() tests', () => {
        it('should add item to list', function () {
            builder.add(2);
            expect(builder.toString()).to.equal('2')
        });
        it('should add string to list', function () {
            builder.add('hello');
            expect(builder.toString()).to.equal('hello')
        });
        it('should add obj to list', function () {
            builder.add({});
            expect(builder.toString()).to.equal('[object Object]')
        });
        it('should add arr to list', function () {
            builder.add([]);
            expect(builder.toString()[0]).to.equal(undefined)
        });
        it('should add item to list', function () {
            builder.add(2);
            builder.add(3)
            expect(builder.toString()).to.equal('2, 3')
        });
        it('should add item to end of list', function () {
            builder.add(2);
            builder.add(3)
            let items = builder.toString().split(', ');
            expect(builder.toString().split(', ')[items.length-1]).to.equal('3')
        });
    })
    describe('list.shiftLeft() tests', () => {
        it('should shift all elmnts to leeft (first -> last)', function () {
            builder.add(1);
            builder.add(2);
            builder.add(3);
            builder.add(4);
            builder.shiftLeft();
            expect(builder.toString()).to.equal('2, 3, 4, 1')
        });
    })
    describe('list.shiftRight() tests', () => {
        it('should shift all elmnts to right (last -> first)', function () {
            builder.add(1);
            builder.add(2);
            builder.add(3);
            builder.add(4);
            builder.shiftLeft();
            expect(builder.toString()).to.equal('2, 3, 4, 1')
        });
    })
    describe('list.swap(index1,index2) tests', () => {
        it('should swap index1 with index2', function () {
            builder.add(1);
            builder.add(2);
            builder.add(3);
            builder.add(4);
            builder.swap(0,3);
            expect(builder.toString()).to.equal('4, 2, 3, 1')
        });
        it('should swap index1 with index2', function () {
            builder.add(1);
            builder.add(2);
            builder.add(3);
            builder.add(4);
            builder.swap(3,0);
            expect(builder.toString()).to.equal('4, 2, 3, 1')
        });
        it('should swap index1 with index2 and return true', function () {
            builder.add(1);
            builder.add(2);
            builder.add(3);
            builder.add(4);
            expect(builder.swap(0,3)).to.equal(true)
        });
        it('should swap index1 with index2 and return true', function () {
            builder.add(1);
            builder.add(2);
            builder.add(3);
            builder.add(4);
            builder.swap(0,3)
            expect(builder.toString()).to.equal('4, 2, 3, 1')
        });
        it('should not swap index1 with index2 second arg eq length', function () {
            builder.add(1);
            builder.add(2);
            builder.add(3);
            builder.add(4);
            builder.swap(0,4);
            expect(builder.toString()).to.equal('1, 2, 3, 4')
        });
        it('should not swap index1 with index2 first arg less than length', function () {
            builder.add(1);
            builder.add(2);
            builder.add(3);
            builder.add(4);
            builder.swap(-1,2);
            expect(builder.toString()).to.equal('1, 2, 3, 4')
        });
        it('should not swap first index not int', function () {
            builder.add(1);
            builder.add(2);
            builder.add(3);
            builder.add(4);
            builder.swap(['hey'],2);
            expect(builder.toString()).to.equal('1, 2, 3, 4')
        });
        it('should not swap second index not int', function () {
            builder.add(1);
            builder.add(2);
            builder.add(3);
            builder.add(4);
            builder.swap(2,['hey']);
            expect(builder.toString()).to.equal('1, 2, 3, 4')
        });
        it('should not swap first index not int and return false', function () {
            builder.add(1);
            builder.add(2);
            builder.add(3);
            builder.add(4);

            expect(builder.swap(['hey'],2)).to.equal(false)
        });
        it('should not swap second index not int and return false', function () {
            builder.add(1);
            builder.add(2);
            builder.add(3);
            builder.add(4);

            expect(builder.swap(2,['hey'])).to.equal(false)
        });
        it('should not swap first index not int', function () {
            builder.add(1);
            builder.add(2);
            builder.add(3);
            builder.add(4);
            builder.swap({'hey':2},2);
            expect(builder.toString()).to.equal('1, 2, 3, 4')
        });
        it('should not swap second index not int', function () {
            builder.add(1);
            builder.add(2);
            builder.add(3);
            builder.add(4);
            builder.swap(2,{'hey':2});
            expect(builder.toString()).to.equal('1, 2, 3, 4')
        });
        it('should not swap first index not int and return false', function () {
            builder.add(1);
            builder.add(2);
            builder.add(3);
            builder.add(4);

            expect(builder.swap({'hey':2},2)).to.equal(false)
        });
        it('should not swap second index not int and return false', function () {
            builder.add(1);
            builder.add(2);
            builder.add(3);
            builder.add(4);

            expect(builder.swap(2,{'hey':2})).to.equal(false)
        });
        it('should not swap first index not int', function () {
            builder.add(1);
            builder.add(2);
            builder.add(3);
            builder.add(4);
            builder.swap('hey',2);
            expect(builder.toString()).to.equal('1, 2, 3, 4')
        });
        it('should not swap second index not int', function () {
            builder.add(1);
            builder.add(2);
            builder.add(3);
            builder.add(4);
            builder.swap(2,'hey');
            expect(builder.toString()).to.equal('1, 2, 3, 4')
        });
        it('should not swap first index not int', function () {
            builder.add(1);
            builder.add(2);
            builder.add(3);
            builder.add(4);

            expect(builder.swap('hey',2)).to.equal(false)
        });
        it('should not swap second index not int', function () {
            builder.add(1);
            builder.add(2);
            builder.add(3);
            builder.add(4);

            expect(builder.swap(2,'hey')).to.equal(false)
        });
        it('should not swap index1 with index2', function () {
            builder.add(1);
            builder.add(2);
            builder.add(3);
            builder.add(4);
            builder.swap(2,2);
            expect(builder.toString()).to.equal('1, 2, 3, 4')
        });
        it('should not swap index1 with index2 and return false', function () {
            builder.add(1);
            builder.add(2);
            builder.add(3);
            builder.add(4);
            expect( builder.swap(-1,2)).to.equal(false)
        });
        it('should not swap with floating points arg1', function () {
            builder.add(1);
            builder.add(2);
            builder.add(3);
            builder.add(4);
            builder.swap(2.2,2);
            expect(builder.toString()).to.equal('1, 2, 3, 4')
        });
        it('should not swap with floating points arg1 and return false', function () {
            builder.add(1);
            builder.add(2);
            builder.add(3);
            builder.add(4);
            expect( builder.swap(2.2,2)).to.equal(false)
        });
        it('should not swap with floating points arg2', function () {
            builder.add(1);
            builder.add(2);
            builder.add(3);
            builder.add(4);
            builder.swap(2,2.2);
            expect(builder.toString()).to.equal('1, 2, 3, 4')
        });
        it('should not swap with floating points arg2 and return false', function () {
            builder.add(1);
            builder.add(2);
            builder.add(3);
            builder.add(4);
            expect( builder.swap(2,2.2)).to.equal(false)
        });
    })
})



//SOLUTION
/*
describe("list", function () {
    let list;
    beforeEach(function () {
        list = createList();
    });

    describe("add", function () {
        it('with a multiple elements of different types, should work correctly', function () {
            list.add('Pesho');
            list.add(5);
            let obj = {name: "gosho"};
            list.add(obj);
            expect(list.toString()).to.equal('Pesho, 5, [object Object]');
        });
    });

    describe("shiftLeft", function () {
        it('with a multiple elements, should shift them to the left', function () {
            list.add('one');
            list.add(2);
            list.add('three');
            list.shiftLeft();
            expect(list.toString()).to.equal("2, three, one");
        });
    });

    describe("shiftRight", function () {
        it('with a multiple elements, should shift them to the right', function () {
            list.add('one');
            list.add(2);
            list.add('three');
            list.shiftRight();
            expect(list.toString()).to.equal("three, one, 2");
        });
    });

    describe("swap", function () {
        it('with a negative first index, should return false', function () {
            list.add('one');
            list.add(2);
            expect(list.swap(-5, 1)).to.equal(false);
        });

        it('with a negative first index, should not change the collection', function () {
            list.add('one');
            list.add('two');
            list.swap(-5, 1);
            expect(list.toString()).to.equal("one, two");
        });

        it('with a non integer first index, should return false', function () {
            list.add('one');
            list.add('two');
            expect(list.swap('stamat', 1)).to.equal(false);
        });

        it('with a non integer first index, should not change the collection', function () {
            list.add('one');
            list.add('two');
            list.swap([4, 13], 1);
            expect(list.toString()).to.equal("one, two");
        });

        it('with first index equal to number of elements, should return false', function () {
            list.add('one');
            list.add('two');
            list.add('three');
            expect(list.swap(3, 1)).to.equal(false);
        });

        it('with first index equal to number of elements, should not change the collection', function () {
            list.add('one');
            list.add('two');
            list.add('three');
            list.swap(3, 1);
            expect(list.toString()).to.equal("one, two, three");
        });

        it('with a negative second index, should return false', function () {
            list.add('one');
            list.add(2);
            expect(list.swap(0, -1)).to.equal(false);
        });

        it('with a negative second index, should not change the collection', function () {
            list.add('one');
            list.add('two');
            list.swap(0, -1);
            expect(list.toString()).to.equal("one, two");
        });

        it('with a non integer second index, should return false', function () {
            list.add('one');
            list.add('two');
            expect(list.swap(0, 'stamat')).to.equal(false);
        });

        it('with a non integer second index, should not change the collection', function () {
            list.add('one');
            list.add('two');
            list.swap(0, [4, 13]);
            expect(list.toString()).to.equal("one, two");
        });

        it('with second index equal to number of elements, should return false', function () {
            list.add('one');
            list.add('two');
            list.add('three');
            expect(list.swap(0, 3)).to.equal(false);
        });

        it('with second index equal to number of elements, should not change the collection', function () {
            list.add('one');
            list.add('two');
            list.add('three');
            list.swap(0, 3);
            expect(list.toString()).to.equal("one, two, three");
        });

        it('with equal indexes, should return false', function () {
            list.add('one');
            list.add('two');
            list.add('three');
            expect(list.swap(1, 1)).to.equal(false);
        });

        it('with equal indexes, collection should stay the same', function () {
            list.add('one');
            list.add('two');
            list.add('three');
            list.swap(1, 1);
            expect(list.toString()).to.equal("one, two, three");
        });

        it('with zero first index, should return true', function () {
            list.add('one');
            list.add('two');
            list.add('three');
            expect(list.swap(0, 1)).to.equal(true)
        });

        it('with zero second indexes, should return true', function () {
            list.add('one');
            list.add('two');
            list.add('three');
            expect(list.swap(2, 0)).to.equal(true);
        });

        it('with zero first index, should swap the values', function () {
            list.add('one');
            list.add('two');
            list.add('three');
            list.swap(0, 2);
            expect(list.toString()).to.equal("three, two, one");
        });

        it('with zero second index, should swap the values', function () {
            list.add('one');
            list.add('two');
            list.add('three');
            list.swap(1, 0);
            expect(list.toString()).to.equal("three, two, one");
        });
    });
});*/

