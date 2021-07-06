// What is Static method?
// ->  Static method is that type of method which is available only for the constructor itself and not for the objects that are created from the constructor. For Example: Number.parseFloat(12), here the parseFloat method is only callable in the Number constructor itself.
// to define a static method we simply put static keyword infornt of the method


class Human {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Here displayFullName will be added to .prototype property hence it can be used by the objects. This type of method is also called Instance method.
  displayFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }

  // the below greet method is a static method which is callable only in Human constructor.
  static greet() {
    console.log('Hello');
  }
}

const person1 = new Human('Lionel', 'Messi');
person1.displayFullName();

// person1.greet();  Here as it is a static method, if we call the method in object, we will get an error.
Human.greet();
