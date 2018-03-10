function personAndTeacher() {
    class Person{
        constructor(name,email){
            this.name = name;
            this.email = email;
        }
        toString(){
            return `Person (name: ${this.name}, email: ${this.email})`
        }
    }
    class Teacher extends Person{
        constructor(name,email,subject){
            super(name,email,subject);
            this.subject = subject;
        }
        toString(){
            return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`
        }
    }
    return {Person,Teacher}
}

