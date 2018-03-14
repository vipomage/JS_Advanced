class Task {
    get isOverdue() {
        return this._isOverdue;
    }

    set isOverdue(val) {
        let today = new Date();
        this._isOverdue = today > this.deadline;

    }

    get deadline() {
        return this._deadline;
    }

    set deadline(value) {
        if (value instanceof Date && value >= Date.now()) {
            this._deadline = value;
        } else {
            throw new Error()
        }
    }

    static comparator(a, b) {
        if (a instanceof Task && b instanceof Task) {
            if (a - b < 0) {
                return -1
            }
            if (a === b) {
                return 0
            }
            if (a - b > 0) {
                return 1
            }
        } else {
            throw new Error()
        }


    }

    toString() {
        let statusIcon = (() => {
            if (this.isOverdue) {
                return '\u26A0'
            } else {
                switch (this.status) {
                    case 'Open':
                        return '\u2731';
                    case 'In Progress':
                        return '\u219D';
                    case 'Complete':
                        return '\u2714';
                }
            }

        })()
        if (!this.isOverdue) {
            return `[${statusIcon}] ${this.title} {(deadline: ${this.deadline})}`
        } else {
            return `[${statusIcon}] ${this.title} {(deadline: (overdue))}`
        }

    }

    constructor(title, deadline) {
        this.title = title;
        this.deadline = deadline;
        this.status = 'Open';
        this.isOverdue = true;
    }
}

let date1 = new Date();
date1.setDate(date1.getDate() + 7);
let task1 = new Task('JS Homework', date1);
let date2 = new Date();
date2.setFullYear(date2.getFullYear() + 1); // Set date 1 year from now
let task2 = new Task('Start career', date2);
console.log(task1 + '\n' + task2);
let date3 = new Date();
date3.setDate(date3.getDate() + 3);
let task3 = new Task('football', date3);
let task4 = new Task('Task 4', new Date());
let task5 = new Task('Task 5', new Date());
task1.status = 'In Progress';
task3.status = 'In Progress';
task5.status = "Complete";
let tasks = [task1, task2, task3, task4, task5];
setTimeout(() => {
    tasks.sort(Task.comparator);
    console.log(tasks.join('\n'));
}, 1000);
