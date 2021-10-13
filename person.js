export class Person {
    constructor(person) {
        this.firstName = person.firstName;
        this.lastName = person.lastName;
        this.age = person.age;
    }
    
    speak(something) {
        console.log(something);
    }

    setFirstName(firstName) {
        this.firstName = firstName
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    walk() {
        this.speak(`${this.fullName()} is walking`);
    }

    whoAmI() {
        this.speak(`I am ${this.fullName()} and I am ${this.age} years old.`)
    }
}