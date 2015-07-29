/*
 Xiang Peng
 Section 00
 7-28-15
 Review
 */


//alert("Testing to see if this works");


//Figure out how much pizza costs per sq in
//Calculate how much pizza per slice

//Prompt the user for:
//Radius of Pizza
//Cost of Pizza
//# of the slices

var pizzaRadius = prompt("We are going to calculate how much pizza costs.\nWhat is the radius of your pizza?");
//validate
while(isNaN(pizzaRadius) || pizzaRadius===""){
    //Re-prompt
    pizzaRadius = prompt("Please do not leave blank and only use numbers.\nPlease enter your pizza's radius:");
}

//Cast to numbers
pizzaRadius = Number(pizzaRadius);


var pizzaCost = prompt("How much does your piza cost in total?");
//Validate
while(isNaN(pizzaCost) || pizzaCost===""){
    //Re-prompt
    pizzaCost = prompt("Please do not leave blank and only use numbers.\nPlease enter your pizza's cost:");
}
//Cast to number
pizzaCost = Number(pizzaCost);

var pizzaSlices = prompt("How many slices are in your pizza?");
//Validate
while(isNaN(pizzaSlices) || pizzaSlices===""){
    //Re-prompt
    pizzaSlices = prompt("Please do not leave blank and only use numbers.\nPlease enter your pizza's total number of slices:");
}
//Cast to number
pizzaSlices = Number(pizzaSlices);






//Create a function that launches all of the functions
function masterPizzaFunc(rad,cost,slices){
    //Function Call For Area function
    var area = pizzaArea(rad);

    //Function call Sq In Function
    var sqInCost = pizzaSqInCost(cost,area);

    //Function call to slices function
    var slicePrice = pricePerSlice(slices,cost);
    return [sqInCost,slicePrice];
}

//Function call to the master function
var results = masterPizzaFunc(pizzaRadius,pizzaCost,pizzaSlices);


//Print out results
console.log("Your pizza costs $"+results[0]+" per sq inch of pizza or $"+results[1]+" per slice.");


//Create a function to calc the area of pizza
function pizzaArea(r){
    //Area of circle r*r*PI
    var area = Math.pow(r,2)*Math.PI;
    return area;
}

//Create a function that calculates the price per sq in
function pizzaSqInCost(price, area){
    //cost per in  = price/area
    var costPerIn = price/area;
    //Since this is cost - aka dollars and cents
    //Round to 2 decimal places
    costPerIn = costPerIn.toFixed(2);

    return costPerIn;
}

//Create a function that calculates the cost per slice
function pricePerSlice(slices, price) {
    //cost per slice = pizza price /#of slices
    var costPerSlice = price / slices;

    //round to 2 decimals
    costPerSlice = costPerSlice.toFixed(2);
    return costPerSlice;
}







