function returnThreeClasses() {
    class Figure {
        constructor() {
            if (new.target === Figure) {
                throw new TypeError('Cannot create an instance of abstract Class')
            }
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super()
            this.radius = radius;
            let self = this
            this.area = (() => {
                return Math.PI * self.radius * self.radius
            })()
        }

        toString() {
            return `${this.constructor.name} - radius: ${this.radius}`
        }
    }

    class Rectangle extends Figure {
        constructor(width, height) {
            super();
            this.width = width;
            this.height = height;
            let self = this;
            this.area = (() => {
                return self.width * self.height
            })()
        }

        toString() {
            return `${this.constructor.name} - width: ${this.width}, height: ${this.height}`
        }
    }

    return {Figure, Circle, Rectangle}
}


// let f = new Figure() //must be ERR
// let c = new Circle(5)
// console.log(c.area);
// console.log(c.toString());
// let r = new Rectangle(3, 4);
// console.log(r.area);
// console.log(r.toString());