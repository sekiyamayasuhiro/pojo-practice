/***********************************************************************
Write a function `getFullName(person)` that takes in an person object
and returns a string containing their full name.


Examples:
let p1 = {firstName: 'John', lastName: 'Doe'};
getFullName(p1); // => 'John Doe'
let p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};
getFullName(p2); // => 'Charlie Brown'
***********************************************************************/
let p1 = {firstName: 'John', lastName: 'Doe'};
let p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};

function getFullName(person) {

  return person.firstName + " " + person.lastName;

}

console.log(getFullName(p1));
console.log(getFullName(p2));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = getFullName;
