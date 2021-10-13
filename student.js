import { Person } from "./person.js";

export class Student extends Person {
    constructor(student){
        super(student);
        this.id = student.id;
        this.department = student.department;
    }

    whoAmI() {
        super.whoAmI();
        this.speak(`and my ID is ${this.id} and I belong to the ${this.department} department`)
    }

    askQuestion(question) {
        super.speak(question)
    }

    speak(words) {
        super.speak(`The Student: ${this.fullName()} said: ${words}`)
    }
}