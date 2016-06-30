//JS File

console.log("Hello World")

function add(x, y){
	console.log(x + y);
}

add(4, 5);

function multiply(a, b){
	console.log(a * b);
}

multiply(98, 101);



//Arrays//
//                   0       1        2          3  //
var classmates = ["Matt", "Tara", "Danielle", "Evan"];

for(var j=0; j<classmates.length; j++){
	console.log(classmates[j]);

//OR      for(var i in classmates){
//           console.log(classmates[i]);
}	

var typesOfSoda = new Array();
typesOfSoda[0] = "Red Cream Soda";
typesOfSoda[1] = "IBC";

console.log(classmates);
console.log(typesOfSoda);

var mixedTypeArray = ["Elephant", 100, (5>2)];
var sameType = ["Elephant", "Giraffe", "Duck"];


//BRONZE Challenge//

function colorList(){
	var colors = ["red", "blue", "green", "yellow", "orange", "pink"];
for(var j = 0; j< colors.length; j++){
	console.log(colors[j]);
}
	
}

//SILVER Challenge//

//var randomNums[11, 25, 54, 22, 11, 98, 25, 44, 12, 99,];

//for(var i = 0; i< randomNums.length; i++){

//

var numbers = [2,28,56,3,92,8]

var randomNumber;

function matchNumber(randomNumber){
	for (var i in numbers)
	{
		if (randomNumber === numbers[i])
			{
				return true;
			}
		else
		{
			return false;
		}
	}
}



//*************DO NOT GO ABOVE THIS LINE RIGHT NOW***********************//
//**********************THERE IS TOO MUCH FUN ABOVE****************//




//OBJECT LITERAL//

var friend = {
	
//Properties//
	fullname			: "",
	age					:  0,
	married				: true,
	vocation			: "",
	closeLikeABro		: true,
	yearsKnown			:  0,
	highSchool			: true,
	college 			: true,

//Method
	printVocation		: function(){
		return this.vocation;
	},
	
	introduceToSisterInLaw	: function(){
		if(this.yearsKnown >= 5 && this.closeLikeABro == true && this.married == false){	
			return "I want you to meet Lizzy.";
		}else{
			return "Have you tried Tinder?";

		}

	},
	mascotCheer		: function(){
		if(this.highSchool == true && this.college == true){
			return "Go Royals and Hoosiers!";
		}else if(this.highSchool == true && this.college == false){
			return "Go Royals!!";
		}else if(this.highSchool == false && this.college == true){
			return "Go IU!"
		}else{
			return "Your school is subpar";
		}

		

	}


}


var nickKirkes = Object.create(friend);
nickKirkes.fullname = "Nick Kirkes";
nickKirkes.age = 38;
nickKirkes.married = false;
nickKirkes.vocation = "Project Manager at Sales Force";
nickKirkes.yearsKnown = 20;
nickKirkes.highSchool = false;
nickKirkes.college = false;

var hansKloepfer = Object.create(friend);
hansKloepfer.fullname = "Hans Kloepfer";
hansKloepfer.age = 42;
hansKloepfer.married = false;
hansKloepfer.vocation = "Sailboat Captain";
hansKloepfer.yearsKnown = 31;


var emilyax = Object.create(friend);
emilyax.fullname = "Emily Ax";
emilyax.age = 30;
emilyax.married = true;
emilyax.vocation = "Stay-at-home-mom";
emilyax.yearsKnown = 25;
emilyax.highSchool = true;
emilyax.college = true;

var jimmyminar = Object.create(friend);
jimmyminar.fullname = "Jimmy Minar";
jimmyminar.age = 32;
jimmyminar.married = false;
jimmyminar.vocation = "banking";
jimmyminar.yearsKnown = 12;
jimmyminar.highSchool = false;
jimmyminar.college = true;

var lisalong = Object.create(friend);
lisalong.fullname = "Lisa Long";
lisalong.age = 33;
lisalong.married = true;
lisalong.vocation = "nurse";
lisalong.yearsKnown = 20;
lisalong.highSchool = true;
lisalong.college = true;

var kristinarfman = Object.create(friend);
kristinarfman.fullname = "Kristin Arfman";
kristinarfman.age = 29;
kristinarfman.married = true;
kristinarfman.vocation = "athletic trainer";
kristinarfman.yearsKnown = 29;
kristinarfman.highSchool = true;
kristinarfman.college = false;














