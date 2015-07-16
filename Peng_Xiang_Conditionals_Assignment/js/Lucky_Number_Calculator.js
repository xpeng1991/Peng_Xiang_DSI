/*
 Xiang Peng
 Section 00
 7-16-15
 Lucky_Number_Calculator
 */


//alert("Testing to see if this works");


/*
This is just a calculator for fun.
There is no science in it.
Based on users different input, this will finally returns user a lucky number.
Basic data required in the equation:
Age, Gender, Three random numbers from user, another random factor.
 */


// Basic introduction
alert("This is a lucky number calculator.");
alert("Please enter your answer after questions pop up :)");

// ask for age
var age = 0;
do
{

 age = prompt("Please enter your age here, you can use decimal if you want.");

} while(age === 0 || age === "" || (age <=0 || age >= 300) || isNaN(age));

console.log(age);

// ask for gender
var gender = true;   // gender factor
var genderInput = 0
do
{

 genderInput = prompt("Are you a male or a female?\n" +
     "M for male and F for female.");

} while (genderInput === 0 || genderInput === "" ||
               (genderInput != 'M' || genderInput != 'm') ||
                genderInput != 'F' || genderInput != 'f');




