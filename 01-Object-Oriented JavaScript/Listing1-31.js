// Define a simple object with two properties

// The below code will explode if you uncomment this
//"use strict";

var personalDetails = {
    name: "Den Odell",
    email: "den.odell@me.com"
};

console.log(Object.isExtensible(personalDetails)); // true, as by default all objects can be extended

// Prevent the ‘personalDetails’ object being added to
Object.preventExtensions(personalDetails);

console.log(Object.isExtensible(personalDetails)); // false, as the object is now locked down

// Attempt to add a new property to the ‘personalDetails’ object
personalDetails.age = 35; // Throws an exception if using ‘strict’ mode as the object is locked