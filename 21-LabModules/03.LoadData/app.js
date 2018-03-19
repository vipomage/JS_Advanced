let data = require('./data');

function sort(prop){
    return [...[...data].sort((a, b) => a[prop].localeCompare(b[prop]))]
}
function filter(prop,value){
    return [...[...data].filter(item =>item[prop] === value)]
}
result.sort = sort;
result.filter = filter;
