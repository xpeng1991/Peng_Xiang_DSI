//
//
// Test


alert("This is a Test");




if (0)
{
// Celsius to Fahrenheit converter
 var number = prompt("Please enter the temperature you want to convert: ");
 console.log(number);

 var ForC = prompt("Please enter which one you want to convert to.\n" +
     "Enter 'F' or 'C' ;");
 console.log(ForC);

 var temp = 0;


// C to F
 if (ForC === 'F' || ForC === 'f')
 {
  temp = (number - 32) * (5 / 9);
  alert("The temperature is " + temp + " degrees Fahrenheit");
 }

// F to C
 if (ForC === 'C' || ForC === 'c')
 {
  temp = number * (9 / 5) + 32;
  alert("The temperature is " + temp + " degrees Celsius.");
 }

}



if (0)
{
// Grade Letter Calculator
 var grade = prompt("Please enter your number grade: ");

 var letterGrade = "0";

 if (grade >= 95 && grade <= 100)
  letterGrade = "A+";

 if (grade >= 90 && grade <= 94)
  letterGrade = "A";

 if (grade >= 85 && grade <= 89)
  letterGrade = "A+";

 if (grade >= 80 && grade <= 84)
  letterGrade = "A+";

 if (grade >= 76 && grade <= 79)
  letterGrade = "A+";

 if (grade >= 73 && grade <= 75)
  letterGrade = "A+";

 if (grade >= 70 && grade <= 72)
  letterGrade = "A+";

 if (grade >= 0 && grade <= 69)
  letterGrade = "A+";

 alert("You have a " + grade + "%, which means you have earned a(n) " +
     letterGrade + " in the class!");


}

if (0)
{
// Movie Ticket Price
 var age = prompt("Please enter your age");
 var time = prompt("What time will you see this movie?\n" +
     "enter the hour only");

 if (age < 10 || age >= 55)
 {
  alert("The ticket price is $7.00.");
 }
 else if (time > 3 || time < 5)
 {
  alert("The ticket price is $7.00.");
 }
 else {
  alert("The ticket price is $12.00.");
 }

}


























