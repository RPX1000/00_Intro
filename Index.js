// Node.js is a runtime that lets you run javascript outside a web-browser

console.log('Hello World');

let name = 'cool';
console.log(name);

// Variable Rules
// let > Var ------
// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain space or hyphen
// Case sensitive
// Best Practice: Declare each variable on a single line


// Constants section
// If we don't need to re-assign variable const is default choice
// Error will trigger if we try to re-assign const variable
// However, let allows you re-assign variables with no error

const interestRate = 0.3;
console.log(interestRate);


// Primitive types
let nametwo = 'Mosh'; // String literal
let age = 30; // Number literal
let isApproved;  // Boolean literal, note (True and False are reserved keywords)
let firstName = undefined; 
let selectedColor = null; // Used where we want to clear variable values


// Dynamic Typing (Javascript is a dynamic language)
// The type of the variable can change in the future (versus static languages)
// after it is declared
// The type of these variables will be determined at runtime based off the
// values we assign to them


// Reference Types
// Object, Array, Function
// An object in javascript, is like an object in real life -- properties

let person = { // braces are object literal
    nameThree: 'Rainier',
    ageThree: 30

};

// adjusting object properties

// Using dot notation -- concise and shorter and should be default choice
person.nameThree = "Ray"; // changing value of poperty

console.log(person.nameThree)

// Using bracket notation -- more dynamic, we can access reference proprties
// Ex. if 
person['ageThree'] = "31"; // changing value of property

console.log(person.ageThree)


// Dynamic way of bracket notation -- as mentioned above

let selection = 'ageThree';
person[selection] = '32';

console.log(person['ageThree'])

console.log(person); // final output


// Arrays - A data structure that we use to represent a list of items
// initializing array []

let selectColors = ['red', 'blue', 'yellow'];
// index starts at 0, so 0 = red, 1 = blue, 2 = yellow

console.log(selectColors[1]);

// Arrays properties are automatically inherited (length, every, fill, indexOf, etc.)

console.log(selectColors.length); // output is 3 for the 3 colors


// Function -- a set of statements that performs a task or calculate a value

// Declaring the function
function greet() {

    console.log('Testing the first function');

}

// Calling the function

greet();

// Modified functions

function greet2(name, lastName) {

console.log("Hello " + name + " " + lastName)

};

greet2("Rainier", "Pasalli");



// Types of Functions -------------------------

// performing a task
function greet2(name, lastName) {

console.log("Hello " + name + " " + lastName)

};

greet2("Rainier", "Pasalli");


// calculating a value
function square(number){
    return number * number
};

console.log(square(2));