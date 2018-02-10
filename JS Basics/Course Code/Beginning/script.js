// Lecture: Variables
/*
var name = 'John';
var lastName = 'Smith';
var age = 26;
var fullAge = 'true';
console.log(name, lastName, ':', age);
console.log('He is of full age:', fullAge);
*/


//Lecture: Variables 2
var name = 'John';
var age = 26;
var job, isMarried;
//console.log(name + age);
//console.log(age + age);
//console.log(job);

job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');

age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');

var lastName = prompt('What is the last name?');
console.log(lastName);

alert(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');
