/*
 Xiang Peng
 Section 00
 7-25-15
 Multiple
 */


//alert("Testing to see if this works");



//Create variables for height and width
var height=8;
var width = 6;

//create another variable for a base of a triangle
var base = 5;


//Function call to area
var resultsArea = calcArea(height,width);
console.log(resultsArea);

//Create a function to calc the perimeter or a rectangle
var calcPeri = function(h,w){
 return 2*h + 2*w;

};

//Funtional call must go under function definintion for Anons
var resultsPeri = calcPeri(height,width);

console.log(resultsPeri);

//Create a function to calc the area of a rectangle
function calcArea(h,w){
 return w*h;

}

//Create a anon function to calc the area of triangle
var triArea = function(b,h){
 return .5*b*h;

};


//Function call to triangle area
var triAreaTotal = triArea(base,height);
console.log(triAreaTotal);

//Create a procedure that will console log the rect peri and area
function printOut(p,a){
 console.log("The perimeter is "+p);
 console.log("The area of the rectangle is "+a);

}

//Function call for out print outs
printOut(resultsPeri,resultsArea);











