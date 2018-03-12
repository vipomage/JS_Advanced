class CheckingAccount {
    get clientId() {
        return this._clientId;
    }

    get email() {
        return this._email;
    }

    get name() {
        return this._name;
    }

    get surname() {
        return this._surname;
    }


    set clientId(value) {
        if (value.length === 6 && Number(value)) {
            this._clientId = value;
        } else {
            throw new TypeError('Client ID must be a 6-digit number')
        }
    }

    set email(value) {
        if (/^\w{1,}\@{1}(\w+\.{1}\w+)+$/g.exec(value.toLowerCase())) {
            this._email = value;
        } else {
            throw new TypeError('Invalid e-mail')
        }
    }

    set name(value) {
        if (value.length >= 3 && value.length <= 20) {
            if (/^[a-z]+$/g.exec(value.toLowerCase())) {
                this._name = value;
            } else {
                throw new TypeError('First name must contain only Latin characters')
            }
        } else {
            throw new TypeError('First name must be between 3 and 20 characters long')
        }
    }

    set surname(value) {
        if (value.length >= 3 && value.length <= 20) {
            if (/^[a-z]+$/g.exec(value.toLowerCase())) {
                this._surname = value;
            } else {
                throw new TypeError('Last name must contain only Latin characters')
            }
        } else {
            throw new TypeError('Last name must be between 3 and 20 characters long')
        }
    }

    constructor(clientId, email, name, surname) {
        this.clientId = clientId;
        this.email = email;
        this.name = name;
        this.surname = surname;
    }
}

let client = new CheckingAccount('423415', 'petkan@another.co.uk', 'Petkan', 'Draganov');