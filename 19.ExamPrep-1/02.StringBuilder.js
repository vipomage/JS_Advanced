class StringBuilder {
    constructor(string) {
        if (string !== undefined) {
            StringBuilder._vrfyParam(string);
            this._stringArray = Array.from(string);
        } else {
            this._stringArray = [];
        }
    }

    append(string) {
        StringBuilder._vrfyParam(string);
        for (let i = 0; i < string.length; i++) {
            this._stringArray.push(string[i]);
        }
    }

    prepend(string) {
        StringBuilder._vrfyParam(string);
        for (let i = string.length - 1; i >= 0; i--) {
            this._stringArray.unshift(string[i]);
        }
    }

    insertAt(string, startIndex) {
        StringBuilder._vrfyParam(string);
        this._stringArray.splice(startIndex, 0, ...string);
    }

    remove(startIndex, length) {
        this._stringArray.splice(startIndex, length);
    }

    static _vrfyParam(param) {
        if (typeof param !== 'string') {
            throw new TypeError('Argument must be string');
        }
    }

    toString() {
        return this._stringArray.join('');
    }
}

let expect = require('chai').expect;

describe('StringBuilder Tests', function () {
    describe('class.append() tests', () => {
        it('should exist', function () {
            expect(() => new StringBuilder('Hello').append()).to.be.an('function')
        });
        it('should create string with single param', function () {
            expect(new StringBuilder('Hello').toString()).to.equal('Hello')
        });
        it('should append passed string to the end of it', function () {
            let string = new StringBuilder('Hello');
            string.append('lel')
            expect(string.toString()).to.equal('Hellolel')
        });
        it('should throw on invalid param', function () {
            let string = new StringBuilder('Hello');
            expect(()=>string.append(5,3)).to.throw
        });
    });
    describe('class.prepend() tests', () => {
        it('should prepend passed string to begining', function () {
            let string = new StringBuilder('Hello');
            string.prepend('lel')
            expect(string.toString()).to.equal('lelHello')
        });
        it('should prepend passed string to begining', function () {
            let string = new StringBuilder('Hello');
            string.prepend('lel')
            expect(string._stringArray).to.be.an('array')
        });
        it('should exist', function () {
            expect(() => new StringBuilder('Hello').prepend()).to.be.an('function')
        });
        it('should throw on invalid param', function () {
            let string = new StringBuilder('Hello');
            expect(()=>string.prepend(5,3)).to.throw
        });

    })
    describe('class.insertAt() tests', () => {
        it('should convert passed string to arr and adds to specific index', function () {
            let string = new StringBuilder('Hello');
            string.insertAt('lel',4)
            expect(string.toString()).to.eq('Helllelo')
        });
        it('should exist', function () {
            expect(() => new StringBuilder('Hello').insertAt()).to.be.an('function')
        });
        it('should throw on invalid param', function () {
            let string = new StringBuilder('Hello');
            expect(()=>string.insertAt(5,3)).to.throw
        });
    })
    describe('class.remove() tests', () => {
        it('removes element from the storage start given index', function () {
            let string = new StringBuilder('Hello');
            string.remove('el',2)
            expect(string.toString()).to.eq('llo')
        });
        it('should exist', function () {
            expect(() => new StringBuilder('Hello').remove()).to.be.an('function')
        });
        it('should throw on invalid param', function () {
            let string = new StringBuilder('Hello');
            expect(()=>string.remove(3)).to.throw
        });
    })
    describe('class.toString() tests', () => {
        it('return arr as string elmnt', function () {
            let string = new StringBuilder('Hello');
            expect(string.toString()).to.eq('Hello')
        });
        it('should exist', function () {
            expect(() => new StringBuilder('Hello').toString()).to.be.an('function')
        });
        it('return string', function () {
            let string = new StringBuilder('Hello');
            expect(string.toString()).to.string('Hello')
        });
    })
    describe('class tests', () => {
        it('must be isntance of StringBuilder', function () {
            let string = new StringBuilder('Hello');
            expect(string).to.be.instanceOf(StringBuilder)
        });
        it('must contain data as arr', function () {
            let string = new StringBuilder('Hello');
            expect(string._stringArray).to.be.an('array')
        });
        it('must instantiate with single char', function () {
            let string = new StringBuilder('o');
            expect(string.toString()).to.be.eq('o')
        });
        it('must instantiate with single char', function () {
            let string = new StringBuilder();
            expect(string.toString()).to.be.eq('')
        });
        it('initialization not throw', function () {
            expect(()=>new StringBuilder()).to.not.throw
        });
        it('to have property _stringArray', function () {
            let my = new StringBuilder();
            expect(my.hasOwnProperty('_stringArray')).to.equal(true)
        });
        it('to initialize to empty array', function () {
            let my = new StringBuilder();
            expect(my._stringArray instanceof Array).to.equal(true, 'Data must be of type array');
            expect(my._stringArray.length).to.eq(0);

        });
        it('to have properties', function () {
            let my = new StringBuilder();
            expect(Object.getPrototypeOf(my).hasOwnProperty('remove')).to.equal(true)
            expect(Object.getPrototypeOf(my).hasOwnProperty('append')).to.equal(true)
            expect(Object.getPrototypeOf(my).hasOwnProperty('prepend')).to.equal(true)
            expect(Object.getPrototypeOf(my).hasOwnProperty('insertAt')).to.equal(true)
            expect(Object.getPrototypeOf(my).hasOwnProperty('toString')).to.equal(true)
        });
    })
    describe('invalid param tests', () => {
        it('throw err on num', function () {
            expect(()=>new StringBuilder(2)).to.throw(TypeError)
        });
        it('throw err on arr', function () {
            expect(()=>new StringBuilder([])).to.throw(TypeError)
        });
        it('throw err on obj', function () {
            expect(()=>new StringBuilder({})).to.throw(TypeError)
        });
    })
})