let result = function () {
    let sum = arguments[0];

    function increase(num) {
        sum += num;
        return increase
    }

    increase.toString = function () {
        return sum
    };
    return increase
};

console.log(result(1)(6)(-3)+'');
console.log(result(1)+'');
console.log(result(-1)(1)(-1)(1)+'');