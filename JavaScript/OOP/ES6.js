// This is just a new method of declaring class in JavaScript

class Human {
  constructor(firstName, lastName, birthYear) { // constructor is a method of class that is compulsory to mention
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  }
}

const person1 = new Human('John', 'jenny', 1789);
console.log(person1);

// now if we want to add new method we can simply add as:

class Human {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  }

  calcAge = function () {
    console.log(2021 - this.birthYear);
  };
}

const person1 = new Human('John', 'jenny', 1998);
console.log(person1);
person1.calcAge();

// Note that there is no comma between the two methods.


// Note: Something we need to know about ES6 classes:

// 1. Classes are not hoisted i.e. like function declaration we cannot use classes before they are declared.

// 2. Classes are first-class citizes. As classes are special type of function. So we can pass classes into function and return them from the function.

// 3. classes are executed in strict mode
