function mapSort(map,sortFn){

    return new Map([...map].sort(sortFn))

}

module.exports = mapSort;