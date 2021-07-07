// The Object.create() function creates a new object, using an object as the prototype of the newly created object. It doesnot have constructor function and neither it uses new keyword.

// To create new object using Object.create we do the following steps

// First we make an object which will be the prototype of all the other object that we will create from Object.create function
const HumanProto = {
  calcAge() {
    console.log(2021 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
// Now creating an object with Object.create function
const person1 = Object.create(HumanProto);
// Here we pass the prototype object as argument to create method.
// what line 8 does is create an empty object named person1
console.log(person1); // we will get an empty object

// now since we dont have properties on the object we need to make them
// First method is to create manually
person1.name = 'John';
person1.birthYear = 2002;

// Now if we call calcAge method we must get required age
person1.calcAge();

// As the First method is not a good practice we go with the second approach i.e. we programmatically create properties. We do that my creating a function which looks similar to constructor function(but is not the constructor function). We can name that function anything. I have named it init.

// lets create another person object and create its property programmatically
const person2 = Object.create(HumanProto);
person2.init('Robin', 1989);
person2.calcAge();
