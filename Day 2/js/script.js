/*
This is going to be a multi lined comment
Xiang Peng
7-9-15
DSI Section 00
Day 2 Coding Basics
 */

//alert("This is making sure that our js file is connected");

//This is a single lined comment
//Usually will describe what comes after

/*
multi-lined comment
anything between the stars and slashes is ignored by the browser
 */

//Alert - gives the user information but returns nothing to us
alert("welcome to fullsail");

//Console logging information
console.log("this is the console. learn to love it!");

//declare a variable
//start with the keyword var
var whatever;  //declaration of a variable
//define the variable
whatever = 45;
//create a storage container = value;

//declare and define a variable
var a = 2;

//send variable value to the console so we can see it
console.log(a);

//Change the value of a variable
a = 6;
console.log(a);

// add 3 to the current value of a
a += 3;
console.log(a);

//create another variable
var b;
b = a + 3;

console.log(a);
console.log(b);

//simple math
//find our age

//create variable for year born
var yearBorn = 1991;
var age = 2015 - yearBorn - 1;
console.log(age);

// MATH!!
// +, -, *, /

//Find the area of a triangle
var width = 8;
var height = 7;

var areaTriangle = width * height / 2;
console.log(areaTriangle);

// Module - %
// gives you the remainder

var remainder = 31 % 3;
console.log(remainder);

//find out if even or odd
//mod by 2

var evenOrOdd = 67 % 2;
console.log(evenOrOdd);
// 0 means even
// 1 means odd

// Assignment Operator
/*
 =  assignment operator - "is"
 ++ adds 1 to the current value of the variable
 -- subtract 1 from the current value
 += addition assignment operator - adds the value after it to the current value
 -= subtract
 *= multiply
 /= divide by the current value
 */

var tester = 5;
tester++; // tester = tester + 1
tester--; // tester = tester - 1
tester += 3; // tester = tester + 3
tester -= 6; // tester = tester - 2
tester /= 3; // tester = tester / 3
tester *= 6; // tester = tester * 6
console.log(tester);

// orders of operation
// PEMDAS
// parenthesis, exponents, multiply, divide, add, subtract

// find quiz average
var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 70;

// add up all of them and divide the number of them
var average = (quiz1 + quiz2 + quiz3) / 3;
console.log(average);

// string - text for coding
// must have matching " or '
// needed to separate variable names from standard text

var kermit = "Light green";
var frogName = "kermit";

console.log(frogName);

// double or single quote
// escape character \ backslash
var phrase = 'I don\'t know.\nYou never know';
console.log(phrase);

// \n new line


// Booleans - true or false
var yes = true;
var no = false;












