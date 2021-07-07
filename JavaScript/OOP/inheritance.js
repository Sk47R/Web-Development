// Here Human is the parent component and Student is a child component. So Student class inherits some methods from the Human class.

const Human = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Human.prototype.calcAge = function () {
  console.log(2021 - this.birthYear);
};

// creating a child class
const Student = function (firstName, birthYear, course) {
  // Inheriting the property that are common to Human Class.
  Human.call(this, firstName, birthYear);
  // here we have used the call method to set the this keyword point towards the Human class.
  this.course = course;
};
// It is important to have this line of code at this point
Student.prototype = Object.create(Human.prototype); // now the prototype of student class can inherit method of prototype of human class.

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const ussop = new Student('Ussop', 2002, 'Computer Science');
console.log(ussop);
ussop.introduce();

ussop.calcAge();

// Changing the constructor from Human back to Student
Student.prototype.constructor = Student;
