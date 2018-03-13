class Console {

    static get placeholder() {
        return /{\d+}/g;
    }

    static writeLine() {
        let message = arguments[0];
        if (arguments.length === 1) {
            if (typeof (message) === 'object') {
                message = JSON.stringify(message);
                return message;
            }
            else if (typeof(message) === 'string') {
                return message;
            }
        }
        else {
            if (typeof (message) !== 'string') {
                throw new TypeError("No string format given!");
            }
            else {
                let tokens = message.match(this.placeholder).sort(function (a, b) {
                    a = Number(a.substring(1, a.length - 1));
                    b = Number(b.substring(1, b.length - 1));
                    return a - b;
                });
                if (tokens.length !== (arguments.length - 1)) {
                    throw new RangeError("Incorrect amount of parameters given!");
                }
                else {
                    for (let i = 0; i < tokens.length; i++) {
                        let number = Number(tokens[i].substring(1, tokens[i].length - 1));
                        if (number !== i) {
                            throw new RangeError("Incorrect placeholders given!");
                        }
                        else {
                            message = message.replace(tokens[i], arguments[i + 1])
                        }
                    }
                    return message;
                }
            }
        }
    }
}

let expect = require('chai').expect;

describe('WriteLineChecks', () => {
    describe('WriteLine(temString,params)', function () {
        describe('fn Tests', () => {
            it('Console should hvae a property writeline', () => {
                expect(Console.hasOwnProperty('writeLine')).to.equal(true)
            })
            it('writeline should be a function', () => {
                expect(typeof Console.writeLine).to.equal("function")
            })
        })


        it('if single string is passed', function () {
            expect(Console.writeLine('hello')).to.be.equal('hello')
        })


        it('if obj is passed', function () {
            expect(Console.writeLine({test: 'test'})).to.equal(JSON.stringify({test: 'test'}))
        });
        it('if arr is passed', function () {
            expect(Console.writeLine(["lel", "suck"])).to.equal(JSON.stringify(["lel", "suck"]))
        });

        it('if multiParams are passed but first is num', function () {
            expect(() => Console.writeLine(213, 3, 4, 7)).to.throw(TypeError)
        });
        it('if fn is passed', function () {
            expect(Console.writeLine(() => {})).to.equal(undefined)
        });
        it('if multiParams are passed but first is obj', function () {
            expect(() => Console.writeLine({lel: 'lel'}, 3, 4, 7)).to.throw(TypeError)
        });
        it('if multiParams are passed but first is arr', function () {
            expect(() => Console.writeLine(['hay', 'wtf'], 3, 4, 7)).to.throw(TypeError)
        });
        it('diff params than actual', function () {
            expect(() => Console.writeLine('Hey {3} {1}', 3, 4, 7)).to.throw(RangeError)
        });
        it('diff params than actual', function () {
            expect(() => Console.writeLine('Hey {0} {1}', 0, 1, 7)).to.throw(RangeError)
        });
        it('arr as first param', function () {
            expect(() => Console.writeLine([], 3, 4)).to.throw(TypeError)
        });
        it('more placeholders than params', function () {
            expect(() => Console.writeLine('Hey {3} {1} {0} {5}', 3, 4, 7)).to.throw(RangeError)
        });
        it('more placeholders than params', function () {
            expect(() => Console.writeLine('Hey {3} {1} {0} {10}', 3, 4, 7)).to.throw(RangeError)
        });
    })
    describe('WriteLine() as intended', function () {
        it('if all is correct', function () {
            expect(Console.writeLine('Hello my name is {0}', 'Ivan')).to.equal('Hello my name is Ivan')
        });
        it('if all is correct', function () {
            expect(Console.writeLine('Hello my name is {0} and i am {1} years old', 'Ivan', 25)).to.equal('Hello my name is Ivan and i am 25' +
                ' years old')
        });
        it('Should replace placeholders 1,2', () => {
            expect(Console.writeLine("{0} {1}", 'pesho', 'hi!')).to.equal("pesho hi!")
        })
    })

})


