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

console.log(mathEnforcer.sum(3.5, 3, 2));
console.log(mathEnforcer.sum('string',2))
console.log(mathEnforcer.sum(2,'string'))
console.log(mathEnforcer.sum([],2))
console.log(mathEnforcer.sum(2,[]))
console.log(mathEnforcer.sum({},2))
console.log(mathEnforcer.sum(2,{}))
console.log(mathEnforcer.sum(15,15))
console.log(mathEnforcer.sum(15.3,15))
console.log(mathEnforcer.sum(16,-15))
console.log(mathEnforcer.sum(-15,16))