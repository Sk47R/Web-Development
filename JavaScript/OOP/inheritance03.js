// Inheritance in classes created using Object.create() function.

const HumanProto = {
  calcAge() {
    console.log(2021 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const stefen = Object.create(HumanProto);
// The below code will make a chain so that Student can inherit from Human.
const StudentProto = Object.create(HumanProto);
StudentProto.init = function (firstName, birthYear, course) {
  HumanProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I am studing ${this.course}`);
};

const damon = Object.create(StudentProto);
damon.init('Damon', 2010, 'English');
damon.introduce();
damon.calcAge();
