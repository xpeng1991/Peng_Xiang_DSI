/*
 Xiang Peng
 Section 00
 7-14-15
 Conditionals_worksheet
 */


//alert("Testing to see if this works");





// Celsius to Fahrenheit converter

// ask the user for temperature
var number = prompt("Please enter the temperature you want to convert: ");
console.log(number);

// ask the user which one wants to convert
var ForC = prompt("Please enter which one you want to convert to.\n" +
    "Enter 'F' or 'C' ;");
console.log(ForC);

// store the temperature
var temp = 0;


// F to C
if (ForC === 'C' || ForC === 'c')
{
 temp = (number - 32) * (5 / 9);
 alert("The temperature is " + temp + " degrees Celsius");
}

// C to F
if (ForC === 'F' || ForC === 'f')
{
 temp = number * (9 / 5) + 32;
 alert("The temperature is " + temp + " degrees Fahrenheit.");
}





// Grade Letter Calculator

// ask for a number grade
var grade = prompt("Please enter your number grade: ");

// store the letter grade
var letterGrade = "0";


// grades under different conditions
if (grade >= 95 && grade <= 100)
 letterGrade = "A+";

if (grade >= 90 && grade <= 94)
 letterGrade = "A";

if (grade >= 85 && grade <= 89)
 letterGrade = "B+";

if (grade >= 80 && grade <= 84)
 letterGrade = "B";

if (grade >= 76 && grade <= 79)
 letterGrade = "C+";

if (grade >= 73 && grade <= 75)
 letterGrade = "C";

if (grade >= 70 && grade <= 72)
 letterGrade = "D";

if (grade >= 0 && grade <= 69)
 letterGrade = "F";

// show the result
alert("You have a " + grade + "%, which means you have earned a(n) " +
    letterGrade + " in the class!");












