(function solve() {

    Array.prototype.last = function () {
        return this[this.length - 1];
    };

    Array.prototype.skip = function (n) {
        let temp = [];
        for (let i = n; i < this.length; i++) {
            temp.push(this[i])
        }
        return temp;
    };

    Array.prototype.take = function (n) {
        let temp = [];
        for (let i = 0; i < n; i++) {
            temp.push(this[i]);
        }
        return temp;
    };

    Array.prototype.sum = function () {
        let sum = 0;
        this.forEach(number => sum += number);
        return sum;
    };

    Array.prototype.average = function () {
        let sum = this.sum();
        return sum / this.length
    };

})()


