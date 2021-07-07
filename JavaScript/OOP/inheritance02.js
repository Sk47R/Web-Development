// Inheritance in ES6 classes.
// Human is the parent class and Student is a children class.

class Human {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2021 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }
}

class Student extends Human {
  // extends keywords links the prototype behind the scene.
  constructor(fullName, birthYear, course) {
    // In previous method i.e. inheritance in class declared using constructor function, we did Student.call() but here we simply use super function.
    // super is the constructor function of parent class
    // Always the inheritance need to happen first as super function is responsible for creating this keyword in sub-class.
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I am studing ${this.course}.`);
  }

  // overwrites the method comming from parents class i.e. polymorphism.
  calcAge() {
    console.log(`I'm ${2021 - this.birthYear} years old.`);
  }
}

const jonathan = new Student('Jonathan Gilbert', 2002, 'Computer Science');
console.log(jonathan);
jonathan.greet();
jonathan.introduce();
jonathan.calcAge();
