(function solve() {


    String.prototype.ensureStart = function (str) {
        let beginning = '';
        for (let i = 0; i < str.length; i++) {
            beginning += this[i]
        }
        if (beginning !== str) {
            return str + this;
        }
        return this.toString();
    }

    String.prototype.ensureEnd = function (str) {
        let end = '';
        let output = this.toString();
        for (let i = this.length - str.length; i < this.length; i++) {
            end += this[i]
        }
        if (end !== str) {
            output += str;
        }
        return output;
    }

    String.prototype.isEmpty = function () {
        return this == '';
    }

    String.prototype.truncate = function (n) {
        let currentString = this.toString()
        if (n > currentString.length-1) {
            return currentString;
        }
        if (n < 4) {
            return '.'.repeat(n)
        }
        while (currentString.lastIndexOf(' ') !== -1) {
            if (currentString.lastIndexOf(' ') <= n - 2) {
                return currentString.slice(0, currentString.lastIndexOf(' ')) + '...';
            }
            currentString = currentString.slice(0, currentString.lastIndexOf(' '))
        }
        return currentString.slice(0, n - 3) + '...'
    }

    String.format = function () {
        let argsArr = [...arguments];
        let output = argsArr.shift();
        let regex = /{\d}/
        let string = output.split(' ')

        for (let i = 0; i < string.length; i++) {
            let match = regex.exec(string[i])
            if (match !== null) {
                let index = Number(match[0].substring(1, 2))
                if (argsArr[index] !== undefined) {
                    string[i] = argsArr[index]
                }
            }
        }
        return string.join(' ')
    }

})()


let myString = 'the quick brown fox jumps over the lazy dog';
console.log(myString = myString.truncate(6));
console.log(myString = myString.truncate(12));
