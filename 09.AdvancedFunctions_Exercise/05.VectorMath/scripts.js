let solution =(()=>{
    return {
        add: (arr1, arr2) => {
            return [arr1[0] + arr2[0], arr1[1] + arr2[1]]
        },
        multiply: (arr, multiplier) => {
            return [arr[0] * multiplier, arr[1] * multiplier]
        },
        length:(arr)=>{
            let x = arr[0];
            let y = arr[1];
            return Math.sqrt(Math.pow(x,2)+(Math.pow(y,2)))
        },
        dot:(first,second)=>{
            let x1 = first[0];
            let y1 = first[1];
            let x2 = second[0];
            let y2 = second[1];

            return x1*x2 + y1*y2
        },
        cross:(first,second)=>{
            let x1 = first[0];
            let y1 = first[1];
            let x2 = second[0];
            let y2 = second[1];
            return x1*y2 - y1*x2
        }
    }
})();


console.log(solution.add([1, 1], [1, 0]));
console.log(solution.multiply([3.5, -2], 2));
console.log(solution.length([3, -4]));
console.log(solution.dot([1, 0], [0, -1]));
console.log(solution.cross([3, 7], [1, 0]));