'use strict'; // this will activate the strict mode in JavaScript

// creating a constructor function

const Human = function (firstName, lastName, birthYear) {

this.firstName = firstName;
this.lastName = lastName;
this.birthYear = birthYear;

};
// Creating 2 object from the Person constructor
const person1 = new Human('John','kennedy', 1998);

const person2 = new Human('John','Wilson', 2002);

console.log(person1);
console.log(person2);

// The following things happens when the new constructor is called:

// 1. New empty object is created (line number 5 in above code)

// 2. Then the function is called and the 'this' keyword will be set to this newly created object

// 3. The newly created object is linked to the prototype of the Human class.

// 4. Then the object created from the Human class(line number 13 and 15) will inherit the methods from the Human class. Note that the methods are only inherited but not copied to the new object created.

// 5. Now we can create as many object as we like that will inherite the methods of the Human class.



// Prototype 
console.log(person1.__proto__); // This gives us the prototype of the person1 Object which is created from Human class
console.log(person1.__proto__ === Human.prototype); // This shows that the prototype of Human class is not the prototype of Human itself, but it is the prototype of the object creted from the Human class.

// All the objects in JavaScript has prototype. since, Human.prototype is also an object, so it also has prototype (Object.prototype).
// In conclusion
// Object.prototype -> prototype of Human class
// Human.prototype -> prototype of the objects created from the Human class.

// Note:
// Object.prototype contains several builtin methods like hasOwnProperty, etc. so If we call these methon in person1 object, it won't find there but as prototype chain it will look up to Human.prototype. There also it wont find it. Finally it will look at Object.prototype where it has that property and calls it for person1 object. **Remember**: this will not copy the method from Object.prototype to the person1 object.


// Adding some methods to the objects created from the class.
const Human = function (firstName, lastName, birthYear) {

this.firstName = firstName;
this.lastName = lastName;
this.birthYear = birthYear;
this.calcAge = function () {
      console.log(2021 - this.birthYear);
};
};
person1.calcAge();
// This method of adding new methods to the object is not a good practice. As when we created large number of object the same method will be created in each of the object which reduces the performance of the code.


// So instead we use the following method
const Human = function (firstName, lastName, birthYear) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
};

Human.prototype.calcAge = function () {
  console.log(2021 - this.birthYear);
};
// what we have done here is, we added the new method to the common prototype of all the objects created from the Human class. So when the objects uses that method it wont acutally copy the method, it will just inherite them from the prototype.

person1.calcAge();  // this will inherit the calcAge method from the prototype to the person1 object


