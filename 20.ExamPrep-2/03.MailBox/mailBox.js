class MailBox {
    constructor() {
        this.data = {};
        this.messageCount = 0;
    }

    addMessage(subject, text) {
        this.messageCount += 1;
        this.data[subject] = text;
        return this;
    }

    deleteAllMessages() {
        this.data = {};
        this.messageCount = 0;
    }

    findBySubject(substr) {
        let arr = [];
        let regex = new RegExp(substr);
        for (let item in this.data) {
            if (regex.test(item)) {
                arr.push({subject: item, text: this.data[item]})
            }
        }
        return arr;
    }

    toString() {
        if (this.messageCount > 0) {
            let result = '';
            for (let key in this.data) {
                result += (`* [${key}] ${this.data[key]}\n`);
            }
            return result
        } else {
            return ` * (empty mailbox)`
        }
    }
}


let mb = new MailBox();

mb.addMessage('suzzity alpha', 'content');
mb.addMessage('suzzity beta', 'body');

let report = mb.findBySubject('uzzity');
console.log(report);