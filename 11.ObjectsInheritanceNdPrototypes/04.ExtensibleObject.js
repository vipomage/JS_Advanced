function getExtObj() {
    let obj = {
        extend:(template)=>{
            for (let property in template) {
                if (typeof template[property] === "function") {
                    Object.getPrototypeOf(obj)[property] = template[property];
                }else{
                    obj[property] = template[property]
                }
            }
        }
    }
    return obj
}

let extensibleObj = getExtObj();
extensibleObj.extend({
    extensionMethod:function () {
        return 'someMethod'
    },
    extensionProperty: 'someProperty'
})
console.log(extensibleObj);