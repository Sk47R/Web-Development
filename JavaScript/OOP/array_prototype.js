// As we search some method of array in mdn we see Array.prototype.method_name 
// Array is the array object and the prototype is the prototype of the object created from the constructor.
// Lets find out why mdn writes the method as in above format.

// prototype of array

const arr = [1, 2, 3, 4, 5, 7];

console.log(arr.__proto__);

// This is how we see the prototype of the array. It contains all the method that we used like find, map etc. Hence the methods of array are not actually their own method but they are inherited from the prototype of array.

console.log(arr.__proto__ === Array.prototype); // from this we can see that the prototype of the arr we made is equal to the prototype of the Array object as both of them are the same.

console.log(arr.__proto__.__proto__);  // This gives the prototype of the arr.__proto__ as it is an object itself and it also contains a prototype which is Object.prototype.


// Making a method of array by ourself

Array.prototype.unique = function () {

// making a new method named unique that will give us an array of new unique elements.

return [...new Set(this)];

};

console.log(arr.unique());

// We can see that the methods of array that we use like map, filter, reduce, etc. are not the method of the array object but it is inherited from the prototype of the Array constructor which is same for all the array object. 
// So basically each and every method of array is stored in prototype and not in the array itself. so when we need those method we simply inherit it from the prototype. Note that inheriting the method won't copy the method. This increases the performance of the code.

// Hope we got the reason why mdn uses above format.
