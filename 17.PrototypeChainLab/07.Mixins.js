class Keyboard {
    constructor(manufacturer, responseTime) {
        this.manufacturer = manufacturer;
        this.responseTime = Number(responseTime);
    }
}

class Monitor {
    constructor(manufacturer, width, height) {
        this.manufacturer = manufacturer;
        this.width = Number(width);
        this.height = Number(height);
    }
}

class Battery {
    constructor(manufacturer, expectedLife) {
        this.manufacturer = manufacturer;
        this.expectedLife = Number(expectedLife);
    }
}

class Computer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
        if (new.target === Computer) {
            throw new Error('Cannot instantiate directly.')
        }
        this.manufacturer = manufacturer;
        this.processorSpeed = Number(processorSpeed);
        this.ram = Number(ram);
        this.hardDiskSpace = Number(hardDiskSpace);
    }
}

class Laptop extends Computer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
        super(manufacturer, processorSpeed, ram, hardDiskSpace);
        this.weight = Number(weight);
        this.color = color;
        this.battery = battery;
    }

    get battery() {
        return this._battery;
    }

    set battery(value) {
        if (value instanceof Battery) {
            this._battery = value;
        } else {
            throw new TypeError()
        }
    }

}

class Desktop extends Computer {
    get keyboard() {
        return this._keyboard;
    }

    set keyboard(value) {
        if (value instanceof Keyboard) {
            this._keyboard = value;
        } else {
            throw new TypeError()
        }
    }

    get monitor() {
        return this._monitor;
    }

    set monitor(value) {
        if (value instanceof Monitor) {
            this._monitor = value;
        } else {
            throw new TypeError()
        }
    }

    constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
        super(manufacturer, processorSpeed, ram, hardDiskSpace);
        this.keyboard = keyboard;
        this.monitor = monitor;
    }
}

let desk = new Desktop('Sony', 3, 4, 500, new Keyboard('Dell', 0.3), new Monitor('LG', 50, 30))

function createMixins() {
    function computerQualityMixin(classToExtend) {
        
        classToExtend.prototype.getQuality = function(){
            return (this.processorSpeed + this.ram + this.hardDiskSpace) / 3
        }
        classToExtend.prototype.isFast = function()  {
            return this.processorSpeed > (this.ram / 4)
        }
        classToExtend.prototype.isRoomy = function () {
            return this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed)
        }
    }

    function styleMixin(classToExtend) {
     
        classToExtend.prototype.isFullSet = function () {
            let name = this.manufacturer;
            return this.keyboard.manufacturer === name && name === this.monitor.manufacturer
        }
        classToExtend.prototype.isClassy = function () {
            return this.battery.expectedLife >= 3 && (this.color === 'Silver' || this.color === 'Black') && this.weight < 3
        }
    }

    return {computerQualityMixin, styleMixin}
}


let mixins = createMixins();
let computerQualityMixin = mixins.computerQualityMixin;
let styleMixin = mixins.styleMixin;

computerQualityMixin(Desktop);
styleMixin(Desktop);
computerQualityMixin(Laptop);
styleMixin(Laptop);

let keyboard = new Keyboard('Logitech',70);
let keyboard2 = new Keyboard('A-4',70);
let monitor = new Monitor('Logitech',28,18);
let battery = new Battery('Energy',3);
let laptop = new Laptop("Hewlett Packard",2.4,4,0.5,2.99,"Silver",battery);
let laptop2 = new Laptop("Hewlett Packard",2.4,4,12,2.99,"Silver",battery);
let desktop = new Desktop("Logitech",3.3,8,1,keyboard,monitor);
let desktop2 = new Desktop("Logitech",1.3,8,10,keyboard2,monitor);



console.log(desktop.isFullSet());