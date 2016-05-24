var myString = prompt ("string please");
var myNumber = prompt("Number please");


// Question #1  Five! Five! Five!
function tripleFive(){
	for (var i = 0; i < 3; i++){
	console.log("Five!");
	}
}

tripleFive()

// Question #2  Return the Last Letter of a String
function lastLetter(string) {
	console.log(string.charAt(string.length-1));
}

lastLetter(myString)

// Question #3 Create a function accepting a number parameter and square that number
function square(num) {
	console.log(num * num);
}

squareMe(myNumber)

// Question #4 accept a number and return it negated
function negate(num){
	console.log(-(num));
}

negate(myNumber)

// Question #5  Create a function accepting three parameters and returning them in an array
function toArray( a, b, c ) {
	var makeArray = [a, b, c];
	console.log(makeArray);
}

toArray (8, 9, 10)

// Question #6 Accept a string and test for whether it starts with the letter "a"
function startsWithA(string){
	if(string.charAt(0)=="A" || string.charAt(0) == "a"){
		console.log(true);
	} else {
		console.log(false);
	}

}

startsWithA(myString)

// Question #7 Accept a string an add "!!!"
function excite(string){
	console.log(string + "!!!");
}

excite(myString)

// Question #8 Accept a string an pass it as a parameter to a function and set the string for having "sun" or "Sun" within it
function sun(string){
	string = string.toLowerCase()
	console.log((string.indexOf("sun",0)) ? true : false);
}

sun(myString)

// Question #9 Accept a number and test for whether it is greather than 0 and less than 1
function tiny(num){
	if(num > 0 && num < 1){
		console.log(true);
	} else {
		console.log(false);
	}	
}

tiny(myNumber)

// Question # 10 Accept two parameters MM:SS and calculate the total seconds and return these to console log
function getSeconds(MM,SS){
	console.log((MM * 60) + SS);
}

getSeconds(00,03)