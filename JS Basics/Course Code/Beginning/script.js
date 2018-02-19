/////////////////// Lecture: Variables
/*
var name = 'John';
var lastName = 'Smith';
var age = 26;
var fullAge = 'true';
console.log(name, lastName, ':', age);
console.log('He is of full age:', fullAge);
*/


/////////////////// Lecture: Variables 2
/* 
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
*/


/////////////////// Lecture 3: Operators
/*
var now = 2016;
var birthYear = now - 26;
birthYear = now - 26 * 2;

console.log(birthYear);
*/

/////////////////// Lecture 4: if/else statements

/*var name = 'John';
var lastName = 'Smith';
var age = 26;
var isMarried = 'no';

if (isMarried === 'yes') {
    console.log(name + ' is married!');
} else {
    console.log(name + ' is not married. :(');
}

isMarried = true;

if(isMarried) {
    console.log(name + ' is married!');
} else {
    console.log(name + ' is not married. :(');
}
*/


/////////////////// Lecture 5: Boolean Logic and Switch Statements
 /*
 var age = 55;

 if (age >= 20 && age < 30) {
     console.log('John is a young adult.');
 } else if (age >= 13 && age < 20) {
     console.log('John is a teenager.');
 } else if (age < 13) {
     console.log('John is a child.');
 } else {
     console.log('John is an adult.');
 }

 var job = 'designer';

 job = prompt('What does John do?');

 switch (job) {
     case 'teacher':
        console.log('John teaches kids.');
        break;
    case 'driver':
        console.log('John drives a cab in Libson.');
        break;
    case 'cop':
        console.log('John helps fight crime.');
        break;
    default:
        console.log('John does something else.');
 }
 */


 /////////////////// Code Challenge #1
/*
 var heightJohn = 180;
 var ageJohn = 22;
 var heightFriend = 180;
 var ageFriend = 23;
 var heightPlayerThree = 180;
 var agePlayerThree = 24;

 var scoreJohn = heightJohn + (5 * ageJohn);
 var scoreFriend = heightFriend + (5 * ageFriend);
 var scorePlayerThree = heightPlayerThree + (5 * agePlayerThree);

 console.log("John's score:", scoreJohn);
 console.log("Friend's score:", scoreFriend);
 console.log("Player Three's score:", scorePlayerThree);

 if (scoreJohn > scoreFriend && scoreJohn > scorePlayerThree) {
     console.log("John wins the game with a score of", scoreJohn, "!");
 } else if (scoreFriend > scoreJohn && scoreFriend > scorePlayerThree) {
     console.log("John's friend won the game with a score of", scoreFriend, "!");
 } else if (scorePlayerThree > scoreJohn && scorePlayerThree > scoreFriend) {
     console.log("Player three won the game with a score of", scorePlayerThree, "!");
 } else if (scoreJohn === scoreFriend && scoreJohn > scorePlayerThree) {
     console.log("John and his friend have tied with a score of", scoreJohn, "!");
 } else if (scoreJohn === scorePlayerThree && scoreJohn > scoreFriend) {
     console.log("John and player three have tied with a score of", scoreJohn, "!");
 } else if (scoreFriend === scorePlayerThree && scoreFriend > scoreJohn){
     console.log("John's friend and player three have tied with a score of", scoreFriend, "!");
 } else {
     console.log("Wow, a three-way tie! They all scored", scoreJohn, ".");
 }
 */


/////////////////// Lecture: Functions
/*
function calculateAge(yearOfBirth) {
    var age = 2018 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);

function yearsUntilRetirement(name, year) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement < 0) {
        console.log(name + ' has already retired!');
    }
    else if (retirement === 0) {
        console.log(name + ' retires this year!');
    }
    else {
        console.log(name + ' retires in ' + retirement + ' years!');
    }
}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1953);
yearsUntilRetirement('Mary', 1948);
yearsUntilRetirement('Joshua', 1986);
*/


/////////////////// Lecture: Arrays
/*
var names = ['John', 'Jane', 'Mark', 'Mia', 'Joshua', 'Brittany'];
var years = new Array(1990, 1969, 1948, 1989, 1986, 1990);

console.log(names[4]);
names[1] = 'Ben';
console.log(names[1]);

var john = ['John', 'Smith', 1990, 'driver', false];

john.push('blue');
john.unshift('Mr.');
john.pop();
john.shift();

console.log(john);

if (john.indexOf('teacher') === -1) {
    console.log('John is NOT a teacher.');
}
*/


/////////////////// Lecture: Objects
/*
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false
};

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);
*/


/////////////////// Lecture: Object Methods
// v1.0
/*
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        return 2018 - this.yearOfBirth;
    }
};
console.log(john.calculateAge());
var age = john.calculateAge();
john.age = age;
console.log(john);

// v2.0
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        this.age = 2016 - this.yearOfBirth;
    }
};

john.calculateAge();
console.log(john);
*/

/////////////////// Lecture: Loops
/*
for (var i = 0; i < 10; i++) {
    console.log(i);
}


var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

//For Loops

for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

for (var i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
}


//While Loops
var i = 0;
while(i < names.length) {
    console.log(names[i]);
    i++;
}

for (var i = 1; i < 6; i++) {
    if (i === 3){
        continue;
    }
    console.log(i);
}
*/


/////////////////// Coding Challenge #2

//var yearOfBirth = [2008, 1986, 1989, 1956, 1913];



/*
for (var i = 0; i < yearOfBirth.length; i++){
     arrayAges.push(2018 - yearOfBirth[i]);
    console.log(arrayAges[i]);
};

console.log(arrayAges);

for (var i = 0; i < arrayAges.length; i++) {
    if (arrayAges[i] >= 18) {
        console.log('This person is of age at ' + arrayAges[i] + '.');
    } else {
     console.log('This person is underage at ' + arrayAges[i] + '.');
     };
};
*/




function printFullAge(yearOfBirth) {
    var arrayAges = [];
    var arrayBoolean = [];

    for (var i = 0; i < yearOfBirth.length; i++){
        arrayAges[i] = 2018 - yearOfBirth[i];
        if (arrayAges[i] >= 18) {
            arrayBoolean[i] = true;
            console.log('Person ' + (i + 1) + ' is of age at ' + arrayAges[i] + '.');
        } else {
            arrayBoolean[i] = false;
            console.log('Person ' + (i + 1) + ' is underage at ' + arrayAges[i] + '.');
        }
    }
    return arrayBoolean;
}

var yearOfBirth = [2008, 1986, 1989, 1956, 1913];
var full_1 = printFullAge(yearOfBirth);
var full_2 = printFullAge([2004, 2009, 1980, 1889, 2010]);

//End of Basics
    