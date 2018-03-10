function personAndTeacher() {
    class Person{
        constructor(name,email){
            this.name = name;
            this.email = email;
        }
        toString(){
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email})`
        }
    }
    class Teacher extends Person{
        constructor(name,email,subject){
            super(name,email);
            this.subject = subject;
        }
        toString(){
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`
        }
    }

    class Student extends Teacher{
        constructor(name,email,course){
            super(name,email);
            this.course = course;
        }
        toString(){
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email}, course: ${this.course})`
        }
    }
    return {Person,Teacher,Student}
}
let result = personAndTeacher();
let classes = result;
let Person = classes.Person;
let Teacher = classes.Teacher;
let Student = classes.Student;

let t = new Teacher("Gosho",'gosh@gosh.com',"Graphics");
let s = new Student("Stamat",'stamcho@stamishteto.bg',666);
console.log(t.toString());
console.log(s.toString());