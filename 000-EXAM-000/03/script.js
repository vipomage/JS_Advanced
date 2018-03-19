class PaymentProcessor {
    get precision() {
        return this._precision;
    }

    set precision(value) {
        if (value !== undefined) {
            this._precision = value;
        } else {
            this._precision = 2;
        }

    }

    get types() {
        return this._types;
    }

    set types(value) {
        if (value !== undefined) {
            this._types = value;
        }
        else {
            this._types = ["service", "product", "other"]
        }
    }

    constructor(options) {
        if (options !== undefined) {
            this.types = options['types'];
            this.precision = options['precision'];
        } else {
            this.types = ["service", "product", "other"];
            this._precision = 2;
        }
        this.id = '';
        this.name = '';
        this.data = {};

    }

    registerPayment(id, name, type, value) {
        if (this.data.hasOwnProperty(id) || id === '' || isNaN(value) || name === '') {
            throw new Error();
        }
        else if (!this.types.includes(type)) {
            throw new Error()
        }
        this.data[id] = {name: name, type: type, value: value}
    }

    deletePayment(id) {
        if (this.data.hasOwnProperty(id)) {
            delete this.data[id]
        } else {
            throw new Error();
        }

    }

    get(id) {
        if (this.data.hasOwnProperty(id)) {
            return `Details about payment ID: ${id}
- Name: ${this.data[id].name}
- Type: ${this.data[id].type}
- Value: ${(this.data[id].value).toFixed(this._precision)}`
        } else {
            throw new Error();
        }

    }

    setOptions(options) {
        let changePrecision = false;
        let changeTypes = false;
        if (options['types'] !== undefined) {
            changeTypes = true
        }
        if (options['precision'] !== undefined) {
            changePrecision = true;
        }
        if (changePrecision) {
            this._precision = options['precision'];
            if (changeTypes) {
                this._types = options['types']
            } else {
                this._types = ["service", "product", "other"];
            }
        } else if (changeTypes) {
            this._types = options['types'];
            if (changePrecision) {
                this._precision = options['precision'];
            } else {
                this._precision = 2;
            }
        }
    }

    toString() {
        let sum = 0;
        for (let value in this.data) {
            sum += this.data[value]['value'];
        }
        return `Summary:
- Payments: ${Object.keys(this.data).length}
- Balance: ${sum.toFixed(this._precision)}`
    }
}

//Initialize processor with default options
const generalPayments = new PaymentProcessor();
generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
console.log(generalPayments.toString());

//generalPayments.registerPayment('E028', 'Rare-earth elements', 'materials', 8000);

generalPayments.setOptions({types: ['product', 'material']});
generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000);
console.log(generalPayments.get('E028'));
generalPayments.registerPayment('CF15', 'Enzymes', 'material', 55000);

// Should throw an error
//generalPayments.deletePayment('E027');
// Should throw an error (ID not found)
//generalPayments.get('E027');


generalPayments.deletePayment('E028');
console.log(generalPayments.toString());


const servicePyaments = new PaymentProcessor({types: ['service']});
servicePyaments.registerPayment('01', 'HR Consultation', 'service', 3000);
servicePyaments.registerPayment('02', 'Discount', 'service', -1500);
console.log(servicePyaments.toString());

// Initialize processor with custom precision
const transactionLog = new PaymentProcessor({precision: 5});
transactionLog.registerPayment('b5af2d02-327e-4cbf', 'Interest', 'other', 0.00153);
console.log(transactionLog.toString());