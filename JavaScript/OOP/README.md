## What is OOP?

It is a programming paradigm based on the concept of objects.

paradigm → style of code, "how" we write and organize code.

→ We use objects to model(describe) real_world or abstract features;

→ Objects may contain data(properties) and code (methods). By using objects, we pack data and the corresponding behavior into one block;

→ In OOP, objects are self-contained pieces/ block of code;

→ Objects are building blocks of applications, and interact with one another;

→ Interactions happen through a public interface(API): methods that the code outside of the object can access and use to communicate with the object:

→ OOP was developed with the goal of organizing code, to make it more flexible and easier to maintain (avoid "spaghetti code")

## Four fundamentals of OOP

1. **Abstraction** → Ignoring or hiding details that dosen't matter, allow us to do what we want, instead of knowing the details that dont really matter to our implementation. Eg. When we use addEventListener, we dont know how it works but we know how to use it.
2. **Encapsulation** → Keeping properties and methods private inside the class so they are not accessible from outside the class. Some methods can be exposed as public interface(API).

    → Making some properties private prevents external codes from accidentally manipulating internal properties/ state.

3. **Inheritance** → Making all properties and methods of a certain class available to a child class, forming a hierarchical relationship between classes. This allows us to reuse common logic and to model real-world relationships. The use of inheritance allows us to make our code dry (i.e. donot repeat yourself) and it also improves the performance of the code.
4. **Polymorphism** → A child class can overwrite a method it inherited from a parents class.

## Prototypes
Prototype is a mechanism in which the objects of JavaScript are allowed to inherit certain features from the constructor. The objects of JavaScript are linked to a prototype Object.

**Prototypal inheritance:** The prototype contains methods (behaviour) that are accessible to all objects linked to that prototype. This type of inheritance is called prototypal inheritance. Prototypal inheritance is not the same as the noraml inheritance.
**Prototype Chain** : Series of links between objects, linked through prototypes( similar to the scope chain in JavaScript).
