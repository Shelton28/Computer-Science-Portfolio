var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");


var squares = document.querySelectorAll('.square'); 
for (var i = 0; i < 9; i++) {
	squares[i].addEventListener("click", game);
	squares[i].addEventListener("click", threeInARow);
};

var turn = ["O","X"];
var count = false;
var oData = [];
var xData = [];

function game() {
	if(count === false) {
		this.innerHTML = "";
		this.insertAdjacentHTML('beforeend', turn[0]);
		this.removeEventListener("click", game)
		oData[i++]=this.getAttribute('id');
	}
	else {
		this.innerHTML = "";
		this.insertAdjacentHTML('beforeend', turn[1]);
		this.removeEventListener("click", game)
		xData[i++]=this.getAttribute('id');

	}
	count = !count;
	console.log(oData,xData)
}

function threeInARow () {
	if (((one.innerHTML === two.innerHTML) && (two.innerHTML === three.innerHTML)) === true) {
		if (this.innerHTML === turn[0]) {
			alert("Player1 Wins");
		}
		else {
			alert("Player2 Wins");
		}
	}
	else if (((four.innerHTML === five.innerHTML) && (five.innerHTML === six.innerHTML)) === true) {
		if (this.innerHTML === turn[0]) {
			alert("Player1 Wins");
		}
		else {
			alert("Player2 Wins");
		}
	}
	else if (((seven.innerHTML === eight.innerHTML) && (eight.innerHTML === nine.innerHTML)) === true) {
		if (this.innerHTML === turn[0]) {
			alert("Player1 Wins");
		}
		else {
			alert("Player2 Wins");
		}
	}
	else if (((one.innerHTML === four.innerHTML) && (four.innerHTML === seven.innerHTML)) === true) {
		if (this.innerHTML === turn[0]) {
			alert("Player1 Wins");
		}
		else {
			alert("Player2 Wins");
		}
	}
	else if (((two.innerHTML === five.innerHTML) && (five.innerHTML === eight.innerHTML)) === true) {
		if (this.innerHTML === turn[0]) {
			alert("Player1 Wins");
		}
		else {
			alert("Player2 Wins");
		}
	}
	else if (((three.innerHTML === six.innerHTML) && (six.innerHTML === nine.innerHTML)) === true) {
		if (this.innerHTML === turn[0]) {
			alert("Player1 Wins");
		}
		else {
			alert("Player2 Wins");
		}
	}
	else if (((one.innerHTML === five.innerHTML) && (five.innerHTML === nine.innerHTML)) === true) {
		if (this.innerHTML === turn[0]) {
			alert("Player1 Wins");
		}
		else {
			alert("Player2 Wins");
		}
	}

	else if (((three.innerHTML === five.innerHTML) && (five.innerHTML === seven.innerHTML)) === true) {
		if (this.innerHTML === turn[0]) {
			alert("Player1 Wins");
		}
		else {
			alert("Player2 Wins");

		}
	}
}
