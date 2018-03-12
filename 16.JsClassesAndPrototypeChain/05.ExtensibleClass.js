let Extensible = (()=> {
    let id = 0;
    class Extensible {
        constructor() {
            this.id = id++;
        }
        extend(template){
            for (let func in template) {
                console.log(typeof(template[func]));
                if (typeof(template[func]) === 'function') {
                    this.constructor.prototype[func] = template[func]
                }else{
                    this[func] = template[func]
                }
            }
        }
    }

    return Extensible;
})();

let template = {
    extensionMethod: function () {},
    extensionProperty:'someString'
}

let obj1 = new Extensible();
obj1.extend(template)
console.log(obj1);

