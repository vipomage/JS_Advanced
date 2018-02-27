function reSort(arr, order) {
    if (order === 'asc') {
        return (arr.sort((a, b) => a - b));
    } else {
        return (arr.sort((a, b) => b - a));
    }
}

function sortArray(inputArray, sortMethod) {
    let ascendingComparator = (a, b) => a - b;
    let descendingComparator = (a, b) => b - a;
    let sortingStrategies = {'asc': ascendingComparator, 'desc': descendingComparator};

    return inputArray.sort(sortingStrategies[sortMethod])
}


console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));