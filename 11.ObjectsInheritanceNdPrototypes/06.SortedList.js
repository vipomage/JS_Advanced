function solution() {
    let listArr = []
    let listObj = {
        add: function (element) {
            listArr.push(element);
            listArr.sort((a, b) => a - b)
            this.size++;
        },
        remove: function (index) {
            // For some reason splice behaves strange
            if (index >= 0 && index < listArr.length) {
                listArr[index] = undefined
                listArr.sort((a, b) => a - b)
                listArr.pop()
                this.size--;
            }
        },
        get: function (index) {
            if (index >= 0 && index < listArr.length) {
                return listArr[index];
            }
        },
        size: 0
    }
    return listObj
}

myList.add(5);
myList.add(76);
myList.add(3);
console.log(myList.get(0));
console.log(myList.size);