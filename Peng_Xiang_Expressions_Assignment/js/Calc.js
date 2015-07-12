/*
 Xiang Peng
 Section 00
 7-11-15
 Expressions Assignment
 */


//alert("Testing to see if this works");

// tell the user what to do

alert("This is a simple calculator that calculates the average number.\n" +
    "The Maximum number of terms you may calculate is 5.\n" +
    "Enter numbers you want to calculate\n" +
    "Numbers can be decimal.");

// set an array to store users' input
var index = 0;
var arr = [0];

// ask the user to do the input, and store them in the array
arr[index] = prompt("Please enter a number you want to calculate:");
index++;
arr[index] = prompt("Please enter another number:");
index++;
arr[index] = prompt("Please enter another number:");
index++;
arr[index] = prompt("Please enter another number:");
index++;
arr[index] = prompt("Please enter another number:");

console.log(arr);



// show us the result
var answer = "You entered: " + arr[0] + ", " + arr[1] + ", " + arr[2] + ", " +
        arr[3] + ", " + arr[4] + ", and the average value is: " + value + ".";

console.log(answer);
alert(answer);


/*
test 1: entered: 15, 20, 25, 30, 50, and got answer: 28
test 2: entered: 7, 15, 44, 32, 9, and got answer: 21.4
test 3: entered: 11.3, 56.3, 24.9, 67.2, 12.9, and got answer: 34.519999999999996
 */


