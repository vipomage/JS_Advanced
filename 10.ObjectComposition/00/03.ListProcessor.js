function iife(arr) {
    let commandExecutor = (function () {
        let inputs = [];
        function add(string) {inputs.push(string)}
        function remove(string) {inputs = inputs.filter(word => word !== string) }
        function print() {console.log(inputs.join(','));}
        return {add,remove,print}
    })();
    for (let str of arr) {
        let [command,value] = str.split(' ');
        commandExecutor[command](value)
    }
}

iife(['add hello', 'add again', 'remove hello', 'add again', 'print']);