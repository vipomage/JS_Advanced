class SortedList{
    constructor(){
        this.values = [];
        this.size = 0;
    }
    add(elmnt){
        this.values.push(elmnt)
        this.values.sort((a, b) => a-b)
        this.size++;
    }
    remove(index){
        if (index <= this.values.length && index>=0) {
            this.values[index] = null;
            this.values.sort((a, b) => b - a)
            this.values.pop();
            this.values.sort((a, b) => a - b)
            if (this.size >=1) {
                this.size--;
            }
        }
    }
    get(index){
        if (index <= this.size && index >=0){
            return this.values[index];
        }
    }
}

let myList = new SortedList();
for (let i = 0; i < 10; i++) {
    myList.add(i)

}
console.log(myList.size); /// 10
console.log(myList.get(-1));
console.log(myList.size);
console.log(myList.values); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
myList.remove(-1)
console.log(myList.size); // 10
myList.remove(11)
console.log(myList.size); //10
