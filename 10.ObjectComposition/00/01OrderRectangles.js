function orderRectangles(arrOfArr) {
    for (let i = 0; i < arrOfArr.length; i++) {
        arrOfArr[i] = {
            width: arrOfArr[i][0],
            height: arrOfArr[i][1],
            area: function (){
                return this.width * this.height
            },
            compareTo: function(other){
                let difference = other.area() - this.area();
                return difference || other.width - this.width
            }
        }

    }
    arrOfArr.sort((a,b)=> a.compareTo(b));
    return arrOfArr
}

console.log(orderRectangles([[10, 5], [3, 20], [5, 12]]));