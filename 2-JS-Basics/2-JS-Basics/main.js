// Lecture 1: variables

/*
var name = 'Rafael';
console.log(name);

var lastName = 'Moura';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

// Lecture: variables 2
/*
var name = 'Rafael';
var age = 28;

//console.log(name + age);
//console.log(age + age);

var job, isMarried;

//console.log(job);

job = 'teacher';
isMarried = 'false';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');


age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

//var lastName = prompt('What is the last name?');
//console.log(lastName);


alert(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');
*/

//Lecture 3 Operatos
/*
var now = 2016;
var birthYear = now - 26;

birthYear = now - 26 * 2;
//2016 - 52
//1964

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;
//ageJohn = ageMark = 26;
//ageJohn = 26;

ageJohn++;
ageMark *= 2;

console.log(ageJohn);
console.log(ageMark);
*/

//Lecture if/else

/*
var name = 'Rafael';
var age = 28;
var isMarried = 'yes';

if (isMarried === 'yes') {
    console.log(name + ' is married!');
} else {
    console.log(name + ' will hoperfully marry soon');
    
}
isMarried = true;

/*

if (isMarried) {
    console.log('YES!');
} else {
    console.log('NO!');
}

if (isMarried) {
    console.log('YES!');
}

if (23 == '23') {
    console.log('print alguma coisa');
}




var playerOne = 'Rafael';
var heightRafael = 1.82;
var ageRafael = 28;
var resultPlayerOne = heightRafael + 5 * ageRafael;

var playerTwo = 'John';
var heightJohn = 1.70;
var ageJohn = 26;
var resultPlayerTwo = heightJohn + 5 * ageJohn;

var playerTree = 'Ash';
var heightAsh = 1.90;
var ageAsh = 32;
var resultPlayerTree = heightAsh + 5 * ageAsh;

if(resultPlayerOne > resultPlayerTwo && resultPlayerOne > resultPlayerTree){
    console.log(playerOne + ' is winner!');   
}

else if(resultPlayerTwo > resultPlayerOne && resultPlayerTwo > resultPlayerTree){
    console.log(playerTwo + ' is winner!');   
    
}else{
    console.log(playerTree + ' is winner!');   
}

console.log(resultPlayerOne);
console.log(resultPlayerTwo);
console.log(resultPlayerTree);
*/


///////////////////////////////////////
// CODING CHALLENGE 2

/*
1. Create an array with some years where persons were born
2. Create an empty array (just [] )
3. Use a loop to fill the array with the ages of the persons
4. Use another loop to log into the console whether each person is of full age (18 or older), as well as their age

5. Finally, create a function called printFullAge which receives the array of years as an argument, executes the steps 2., 3. and 4. and returns an array of true/false boolean values: true if the person is of full age (>= 18 years) and false if not (< 18 years)
6. Call the function with two different arrays and store the results in two variables: full_1 and full_2

Example input:  [1965, 2008, 1992]
Example output: [true, false, true]

Hint: you can use a loop not only to read from an array, like y[i], but also to set values in an array, like y[i] = ... You can also use the specific array methods.
*/







//console.log(arrayEmpty);


var years = [1989, 1992, 2000, 2003];
function printFullAge(years) {
    
    var arrayEmpty = [];
    var saida = [];

    for (let index = 0; index < years.length; index++) {
        arrayEmpty[index] = 2018 - years[index];
    }

    for (let index = 0; index < arrayEmpty.length; index++) {
        console.log(arrayEmpty[index]);
        arrayEmpty[index] >= 18 ? saida.push(true) : saida.push(false);
    }

    return console.log(saida);      
}

printFullAge(years);