/*
 Xiang Peng
 Section 00
 7-25-15
 Peng_Xiang_Function_Assignment
 */


//alert("Testing to see if this works");




// Function to calculate the volume of a cube

// ask for width, length, and height
var width = 0;
var length = 0;
var height = 0;
var volume = 0;

// width
do
{
 width = prompt("Please enter the width of a cube that you want to calculate (no zero):");
 width = Number(width);
} while(width == 0 || width == "" || isNaN(width));
console.log("width: " + width);

// length
do
{
 length = prompt("Please enter the length of a cube that you want to calculate (no zero):");
 length = Number(length);
} while(length == 0 || length == "" || isNaN(length));
console.log("length: " + length);

// height
do
{
 height = prompt("Please enter the width of a cube that you want to calculate (no zero):");
 height = Number(height);
} while(height == 0 || height == "" || isNaN(height));
console.log("height: " + height);


// call the function and catch the return value
volume = cube(width, length, height);
console.log("volume: " + volume);



/////////////////////////////////////////////////////
// anonymous function that shows the user result
var answer = function(v)
{
 var result = "the volume of this cube is: " + v + " cubic unit.";
 return result;
};

// call the function to show the result
var showUser = answer(volume);
console.log(showUser);
alert(showUser);



/////////////////////////////////////////////////
// A normal function that calculates the volume
function cube(w, l, h)
{
 var vol = w * l * h;
 vol = Number(vol);
 return vol;
}



/////////////////////////////////
// Test Table

// Test 1 Inputs: 












