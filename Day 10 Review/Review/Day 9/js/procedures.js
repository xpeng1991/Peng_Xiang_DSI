/*
 Xiang Peng
 Section 00
 7-25-15
 procedures
 */


//alert("Testing to see if this works");


// function
function calcArea(w, h){
 var area = w*h;
 //Returns a variable
 return area;
}

//Function call to calcArea
//Catch the return value
var results1 = calcArea(10,20);

console.log(results1);


//This is a Procedure
// A list of steps to do
//Returns NOTHING!
function calcPeri(w,h){
 var peri= 2*w + 2*h;
 console.log(peri);
}

//Function call for our procedure
//Does not catch anything!
calcPeri(10,20);



