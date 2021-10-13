import { Person } from "./person.js";
import { Student } from "./student.js";

const personObject = {
    firstName: 'Timi',
    lastName: 'Owolabi',
    age: 23
}

const studentObject = {
    firstName: 'Kafayat',
    lastName: 'Jimoh',
    age: 23,
    id: 558762,
    department: 'Pen Testing'
}

let timi = new Person(personObject);
let kafayat = new Student(studentObject);

timi.whoAmI();
kafayat.whoAmI();
timi.speak('I am a developer')
kafayat.speak('I am a developer')

timi.speak(`Hello my name is ${timi.fullName()}`);
timi.walk();

timi.setFirstName('Salma')

timi.speak(timi.fullName())