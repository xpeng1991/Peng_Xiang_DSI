/*
 Xiang Peng
 Section 00
 7-18-15
 Loops_worksheet
 */


//alert("Testing to see if this works");




// While Loop

// user enter a random through 1 to 10
// then there will be popup window that shows the number user entered
// this popup window will show X times depends on users input
if (1)
{
 // basic var
 var num = 0;

 // get input
 do
 {

  num = prompt("Please enter a number between 1 - 10");

 } while ((((num < 1 || num > 10 ) || num === 0 ) || num === "" ) || isNaN(num));

 // show the result
 var x = 0;

 while (x < num) {
  x++;
  alert("you entered number: " + num + "\nThis is [" + x + "] time this shows up.");
 }
}




// Do While Loop
if (1) {
 var fruit = 0;
 var count = 0;

// until the user enters 'y', this will keeps poping up
 do
 {
  // getting input from user
  do
  {
   fruit = prompt("Do you want to eat fruit? (Y/N)");
  } while (fruit.toLowerCase() != 'y' && fruit.toLowerCase() != 'n');

  // if the user entered yes, this loops is over and show the result
  if (fruit == 'y') {
   alert("Good, you are healthy!");
  }

  // if the user entered now, this will keeps popping up several times
  // then go back to the beginning and ask again
  if (fruit == 'n')
  {
   count = 0;
   do
   {
    alert("Eat more fruit!");
    count++;
   } while (count < 9);
   fruit = "n";
  }
 } while (fruit.toLowerCase() != 'y');
}




 if (1) {
// For Loop

// basic vars
  var num2 = 0;
  var star = [0];

// ask user how many stars they want, input valid
  do
  {
   num2 = prompt("How many stars do you want? (1 - 10)");
  } while (((num2 > 10 || num2 < 1 ) || num2 === "" ) || isNaN(num2));

// put stars into array
  for (var i = 0; i < num2; i++) {
   star[i] = "* ";
  }

// show the answer
  alert("You have " + num2 + " stars!\n" + star);
 }














