// alert ("Javascript test.");

// simplify buttom names
var display = document.getElementById("display");
var clear = document.getElementById("clear");
var square = document.getElementById("square");
var sqroot = document.getElementById("sqroot");
var modulo = document.getElementById("modulo");
var obelus = document.getElementById("obelus");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var dimension = document.getElementById("dimension");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var minus = document.getElementById("minus");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var plus = document.getElementById("plus");
var zero = document.getElementById("zero");
var decimal = document.getElementById("decimal");
var equals = document.getElementById("equals");
var negative = document.getElementById("negative");

// one.addEventListener("click", function() );

var input = ""
var z=0
var x=""
var repeat = ""
var output= ""
// one.addEventListener('click', numberClickHandler)

// number buttons
one.onclick = function () {
	if (z === 1) input = "";
	z=0;
	input = input + 1;
	console.log(input);
	displayput=input
	if (input.length>16) longinput(input);
	display.innerText = displayput;
};

// one.onclick("click", addthings(event,1));

two.onclick = function () {
	if (z === 1) input = "";
	z=0;
	input = input + 2;
	console.log(input);
	displayput=input
	if (input.length>16) longinput(input);
	display.innerText = displayput;
};
three.onclick = function () {
	if (z === 1) input = "";
	z=0;
	input = input + 3;
	console.log(input);
	displayput=input
	if (input.length>16) longinput(input);
	display.innerText = displayput;
};
four.onclick = function () {
	if (z === 1) input = "";
	z=0;
	input = input + 4;
	console.log(input);
	displayput=input
	if (input.length>16) longinput(input);
	display.innerText = displayput;
};
five.onclick = function () {
	if (z === 1) input = "";
	z=0;
	input = input + 5;
	console.log(input);
	displayput=input
	if (input.length>16) longinput(input);
	display.innerText = displayput;
};
six.onclick = function () {
	if (z === 1) input = "";
	z=0;
	input = input + 6;
	console.log(input);
	displayput=input
	if (input.length>16) longinput(input);
	display.innerText = displayput;
};
seven.onclick = function () {
	if (z === 1) input = "";
	z=0;
	input = input + 7;
	console.log(input);
	displayput=input
	if (input.length>16) longinput(input);
	display.innerText = displayput;
};
eight.onclick = function () {
	if (z === 1) input = "";
	z=0;
	input = input + 8;
	console.log(input);
	displayput=input
	if (input.length>16) longinput(input);
	display.innerText = displayput;
};
nine.onclick = function () {
	if (z === 1) input = "";
	z=0;
	input = input + 9;
	console.log(input);
	displayput=input
	if (input.length>16) longinput(input);
	display.innerText = displayput;
};
zero.onclick = function () {
	if (z === 1) input = "";
	z=0;
	input = input + 0;
	console.log(input);
	displayput=input
	if (input.length>16) longinput(input);
	display.innerText = displayput;
};

//clear button
clear.onclick = function () {
	input = "";

	console.log(input);
	display.innerText = input;
};

//operator buttons
plus.onclick = function () {
	output = calc(input)
	input = output
	z=0;
	console.log(input);
	input = input + " + ";
	display.innerText = input;
};
minus.onclick = function () {
	output = calc(input);
	input = output;
	z=0;
	console.log(input);
	input = input + " - ";
	display.innerText = input;
};
obelus.onclick = function () {
	output = calc(input);
	input = output;
	z=0;
	console.log(input);
	input = input + " ÷ ";
	display.innerText = input;
};
modulo.onclick = function () {
	output = calc(input);
	input = output;
	z=0;
	console.log(input);
	input = input + " % ";
	display.innerText = input;
};
dimension.onclick = function () {
	output = calc(input);
	input = output;
	z=0;
	console.log(input);
	input = input + " x ";
	display.innerText = input;
};
square.onclick = function () {
	output = calc(input);
	input = output;
	z=0;
	console.log(input);
	input = input + " ^ ";
	display.innerText = input;
};
sqroot.onclick = function () {
	output = calc(input)
	input = output;
	output = Math.sqrt(input);
	if (output % 1 < 1 && output % 1 > 0) {
		decimal=output%1
		console.log(decimal)
		integer=output-decimal
		console.log(integer)
		decimal = Math.round(decimal*1000);
		decimal = decimal / 1000;
		output = integer+decimal;
		repeat = "..."
	}
	z=0;
	console.log(output);
	input=output;
	display.innerText = input + repeat;
};
negative.onclick = function () {
	output = input * -1
	z=0;
	console.log(input);
	input=output
	display.innerText = input;
};


//equals button
function calc () {
	console.log(input)
  let num1 = ""
  let arr=[]
  let output = input
	repeat = ""
	// let input = display.innerText;
  for (let i=0 ; i<input.length ; i++) {
    if (input[i] === "+") {
      arr = input.split(" + ")
      output = Number(arr[0]) + Number(arr[1]);
			console.log(output)
			return output
    }
	  if (input[i] === "x") {
	    arr = input.split(" x ");
	    output = Number(arr[0]) * Number(arr[1]);
			console.log(output)
			return output
	  }
	  if (input[i] === "÷") {
			let decimal;
			let integer;
	    arr = input.split(" ÷ ");
	    output = Number(arr[0]) / Number(arr[1]);
			console.log( output%1 )
			if (output % 1 < 1 && output % 1 > 0) {
				decimal=output%1
				console.log(decimal)
				integer=output-decimal
				console.log(integer)
				decimal = decimal*1000
				if (decimal % 1 < 1 && decimal % 1 > 0) {
					decimal = Math.round(decimal);
					repeat = "..."
				}
				decimal = decimal / 1000;
				output = integer+decimal;
			}
			return output
	  }
		if (input[i] === "%") {
			arr = input.split(" % ");
			output = Number(arr[0]) % Number(arr[1]);
			console.log(output)
			return output
		}
	  if (input[i] === "-") {
	    arr = input.split(" - ");
	    output = Number(arr[0]) - Number(arr[1]);
			console.log(output)
			return output
	  }
		if (input[i] === "^") {
			arr = input.split(" ^ ");
			output = Number(arr[0]);
			for (let i = 1 ; i < Number(arr[1]) ; i++) {
				output = output * Number(arr[0])
			}
			return output
		}
	}
	console.log(output % 1)
	return output
}

// equals.onclick = function () {
// 	output = calc(input);
// 	console.log(output);
// 	input = output;
// 	z=1;
// 	display.innerText = output + repeat;
// }

equals.onclick = function () {
	output = calc(input);
	console.log(output);
	input = output;
	z=1;
	console.log(input)
	input = input.toString()
	console.log(input.length)
	if (input.length>15) {display.innerText = "Small numbers, please."} else {
	display.innerText = output + repeat};
}

function longinput(nput) {
	nput = nput.slice(nput.length-15,nput.length);
	nput = "…" + nput
	console.log(nput)
	displayput=nput
	nput=""
}
// function addthings(event,x) {
// 	console.log(x);
// 	input = input + "1"
// 	display.innerText = input
// }
