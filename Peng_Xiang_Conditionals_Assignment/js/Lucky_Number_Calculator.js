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


if (0) {

// Basic introduction
 alert("This is a lucky number calculator.");
 alert("Please enter your answer after questions pop up :)");

// ask for age
 var age = 0;
 do
 {

  age = prompt("Please enter your age here, you can use decimal if you want.");

 } while (age === 0 || age === "" || (age <= 0 || age >= 300) || isNaN(age));

 console.log("Age: " + age);

// ask for gender
 var gender = true;   // gender factor
 var genderInput = 0;
 var check = 0; // input checker

 do
 {
  genderInput = prompt("Are you a male or a female?\n" +
      "M for male and F for female.");

  if (genderInput === 'M' || genderInput === 'm') {
   gender = true;
   check = 1;
  }

  else if (genderInput === 'F' || genderInput === 'f') {
   gender = false;
   check = 1;
  }
  else {
   genderInput = 0;
   check = 0;
  }

 } while (check === 0);

 console.log("Gender: " + genderInput);
 console.log(gender);

// get the final gender factor number
 var genderNumber = (gender ? 2.5 : 5.2);
 console.log(genderNumber);

} /// test

// Get three random numbers from users
// Getting first number
var num1 = 0;
do
{
 num1 = prompt("Please enter a random number between 0 to 10, can be decimal");
} while(num1 > 10 || num1 < 0 || isNaN(num1) || num1 === "");
console.log(num1);

// Getting second number
var num2 = 0;
do
{
 num2 = prompt("Please enter a random number between 10 to 100, can be decimal");
} while(num2 > 100 || num2 < 10 || isNaN(num2) || num2 === "" || num2 === 0);
console.log(num2);

// Getting third number
var num3 = 0;
do
{
 num3 = prompt("Please enter a random number between 100 to 1000, can be decimal");
} while(num3 > 1000 || num3 < 100 || isNaN(num3) || num3 === "" || num3 === 0);
console.log(num3);


// Set up equations to calculate a lucky number for the user
// getting first factor
var factor1 = 0;
if (age <= 35)
{
 factor1 = Math.floor(Math.random()*(25-1) + 1);
}
else if (age > 35 && age <= 100)
{
 factor1 = Math.ceil(Math.random()*(50 - 25) + 25);
}
else 
{
 factor1 = Math.round(Math.random()*(100 - 50) + 50);
}
console.log(factor1);











