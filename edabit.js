Convert Minutes into Seconds
function convert(minutes) {
	return minutes*60;
	
}
Right Shift by Division
function shiftToRight(x, y) {
	return Math.floor(x/2**y) ;
	
}
Return the First Element in an Array
function getFirstValue(arr) {
	return  arr[0];

}

Find Number of Digits in Number
function num_of_digits(num) {
num=num.toString();
	x=num.length
if(x==9){
 x=8
}
if(x==11){
	x=10
}	
	return x
}
Area of a Triangle
function triArea(base, height) {
	return (base*height)/2;
}
Power Calculator
function circuitPower(voltage, current) {
	return voltage*current;
}
Find the Perimeter of a Rectangle
function findPerimeter(length, width) {
	return (length+width)*2;
}
Buggy Code (Part 1)
function cubes(a) {
	return a**3;
}
Convert Age to Days
function calcAge(age) {
	return age*365;
}
Power Calculator
function circuitPower(voltage, current) {
	return voltage*current;
}
Maximum Edge of a Triangle
function nextEdge(side1, side2) {
	return (side1+side2)-1;
}
Return the Next Number from the Integer Passed
function addition(num) {
	return num+1;
}
Convert Hours into Seconds
function howManySeconds(hours) {
	return hours*3600;
}
Less Than 100?
function lessThan100(a, b) {
	x=a+b;
	if(x<100){
		return true;
	}
	if (x>100){
		return false;
	}
}
The Farm Problem
function animals(chickens, cows, pigs) {
	return chickens*2+cows*4+pigs*4;
}
Fix the Expression
function isSeven(x) {
	if(x==7){
		return true;
	
	}
	if(x!=7){
		return false;
	}
}
Using the "&&" Operator
function and(a, b) {
	return (a&&b);
}
Convert Hours and Minutes into Seconds
function convert(hours, minutes) {
	return (hours*3600+minutes*60);
}
Frames Per Second
function frames(minutes, fps) {
	return minutes*60*fps;
}
Pair Management
function makePair(num1, num2) {
	return [num1,num2]
}
Basic Variable Assignment
function nameString(name){
	
	
  	return (name+"Edabit")
}
Area of a Rectangle
function area(h, w) {
 if (h<=0 ){
	 return -1;
 }
	if (w<=0){
		return -1;
	}
   
    return h*w;
}
Convert Age to Days
function calcAge(age) {
	if(age==0){
		return 0;
	}
	return age *365;
}
Number of Stickers
function howManyStickers(n) {
	return n*6*n;
}