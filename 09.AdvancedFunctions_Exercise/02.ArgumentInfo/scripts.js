function myFunc() {

    let summary = new Map();
    for (let i = 0; i < arguments.length; i++) {
        let obj = arguments[i];
        let type = typeof obj;
        console.log(type+ ': '+ obj);

        if (!summary[type]) {
            summary[type]=1;
        }else{
            summary[type]++;
        }
        var sortedTypes = [];
        for (let currentType in summary) {
            sortedTypes.push([currentType,summary[currentType]]);
        }
    }
    for (let [objType,value] of sortedTypes.sort((a, b) => b[1] - a[1] )) {
        console.log(objType +' = '+ value);
    }
}
//myFunc('cat','dog', 42,33,12, function () { console.log('Hello world!'); });
myFunc({'name': 'bob'}, 3.333, 9.999);