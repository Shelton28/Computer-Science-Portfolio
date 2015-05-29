var squares = document.querySelectorAll('.square'); //this selects everything with the class "square"
console.log(squares);
for (var i = 0; i < squares.length; i++) { //this adds an event listener for every every tile on the grid and runs the function placeToken when there is a click.
	squares[i].addEventListener("click", placeToken);

};

var col1 = [false, false, false , false, false, false]; //an array for all of the squares in column 1
var col2 = [false, false, false , false, false, false]; //an array for all of the squares in column 2
var col3 = [false, false, false , false, false, false]; //an array for all of the squares in column 3
var col4 = [false, false, false , false, false, false]; //an array for all of the squares in column 4
var col5 = [false, false, false , false, false, false]; //an array for all of the squares in column 5
var col6 = [false, false, false , false, false, false]; //an array for all of the squares in column 6
var col7 = [false, false, false , false, false, false]; //an array for all of the squares in column 7

var count = false; //this variable is used to identify who's turn it is

//this function identifies who is placing their token and where they are trying to place it
function placeToken() {
	if(count === false) { //this checks to see if it is player 1's turn (this takes place when count is false)
		if(this.innerHTML === "1") { //this checks to see if the player selected a square in column 1 (all squares in column 1 have 1 in their innerHTML)
			if(col1[0] === false) { //this checks to see if the bottom square in column 1 is empty (it is empty when col1[0] is false)
				document.getElementById("one").style.backgroundColor = "black"; //this changes the background of the bottom square in column 1 to black
				document.getElementById("one").style.color = "black"; //this changes the text color of the bottom square in column 1 to black
				col1[0] = true; //this lets the program know there is a token placed in the bottom sqaure of the first column
			}
			else if (col1[0] && !(col1[1])) {
				document.getElementById("eight").style.backgroundColor = "black";
				document.getElementById("eight").style.color = "black";
				col1[1] = true;
			} 
			else if (col1[0] && col1[1] && !(col1[2])) {
				document.getElementById("fifteen").style.backgroundColor = "black";
				document.getElementById("fifteen").style.color = "black";
				col1[2] = true;
			}
			else if (col1[0] && col1[1] && col1[2] && !(col1[3])) {
				document.getElementById("twentyTwo").style.backgroundColor = "black";
				document.getElementById("twentyTwo").style.color = "black";
				col1[3] = true;
			}
			else if (col1[0] && col1[1] && col1[2] && col1[3] && !(col1[4])) {
				document.getElementById("twentyNine").style.backgroundColor = "black";
				document.getElementById("twentyNine").style.color = "black";
				col1[4] = true;
			}
			else if (col1[0] && col1[1] && col1[2] && col1[3] && col1[4] && !(col1[5])) {
				document.getElementById("thirtySix").style.backgroundColor = "black";
				document.getElementById("thirtySix").style.color = "black";
				col1[5] = true;
			}  
		}
		else if(this.innerHTML === "2") {
			if(col2[0] === false) {
				document.getElementById("two").style.backgroundColor = "black";
				document.getElementById("two").style.color = "black";
				col2[0] = true;
			}
			else if (col2[0] && !(col2[1])) {
				document.getElementById("nine").style.backgroundColor = "black";
				document.getElementById("nine").style.color = "black";
				col2[1] = true;
			} 
			else if (col2[0] && col2[1] && !(col2[2])) {
				document.getElementById("sixteen").style.backgroundColor = "black";
				document.getElementById("sixteen").style.color = "black";
				col2[2] = true;
			}
			else if (col2[0] && col2[1] && col2[2] && !(col2[3])) {
				document.getElementById("twentyThree").style.backgroundColor = "black";
				document.getElementById("twentyThree").style.color = "black";
				col2[3] = true;
			}
			else if (col2[0] && col2[1] && col2[2] && col2[3] && !(col2[4])) {
				document.getElementById("thirty").style.backgroundColor = "black";
				document.getElementById("thirty").style.color = "black";
				col2[4] = true;
			}
			else if (col2[0] && col2[1] && col2[2] && col2[3] && col2[4] && !(col2[5])) {
				document.getElementById("thirtySeven").style.backgroundColor = "black";
				document.getElementById("thirtySeven").style.color = "black";
				col2[5] = true;
			}
		}
		else if(this.innerHTML === "3") {
			if(col3[0] === false) {
				document.getElementById("three").style.backgroundColor = "black";
				document.getElementById("three").style.color = "black";
				col3[0] = true;
			}
			else if (col3[0] && !(col3[1])) {
				document.getElementById("ten").style.backgroundColor = "black";
				document.getElementById("ten").style.color = "black";
				col3[1] = true;
			} 
			else if (col3[0] && col3[1] && !(col3[2])) {
				document.getElementById("seventeen").style.backgroundColor = "black";
				document.getElementById("seventeen").style.color = "black";
				col3[2] = true;
			}
			else if (col3[0] && col3[1] && col3[2] && !(col3[3])) {
				document.getElementById("twentyFour").style.backgroundColor = "black";
				document.getElementById("twentyFour").style.color = "black";
				col3[3] = true;
			}
			else if (col3[0] && col3[1] && col3[2] && col3[3] && !(col3[4])) {
				document.getElementById("thirtyOne").style.backgroundColor = "black";
				document.getElementById("thirtyOne").style.color = "black";
				col3[4] = true;
			}
			else if (col3[0] && col3[1] && col3[2] && col3[3] && col3[4] && !(col3[5])) {
				document.getElementById("thirtyEight").style.backgroundColor = "black";
				document.getElementById("thirtyEight").style.color = "black";
				col3[5] = true;
			}
		}
		else if(this.innerHTML === "4") {
			if(col4[0] === false) {
				document.getElementById("four").style.backgroundColor = "black";
				document.getElementById("four").style.color = "black";
				col4[0] = true;
			}
			else if (col4[0] && !(col4[1])) {
				document.getElementById("eleven").style.backgroundColor = "black";
				document.getElementById("eleven").style.color = "black";
				col4[1] = true;
			} 
			else if (col4[0] && col4[1] && !(col4[2])) {
				document.getElementById("eighteen").style.backgroundColor = "black";
				document.getElementById("eighteen").style.color = "black";
				col4[2] = true;
			}
			else if (col4[0] && col4[1] && col4[2] && !(col4[3])) {
				document.getElementById("twentyFive").style.backgroundColor = "black";
				document.getElementById("twentyFive").style.color = "black";
				col4[3] = true;
			}
			else if (col4[0] && col4[1] && col4[2] && col4[3] && !(col4[4])) {
				document.getElementById("thirtyTwo").style.backgroundColor = "black";
				document.getElementById("thirtyTwo").style.color = "black";
				col4[4] = true;
			}
			else if (col4[0] && col4[1] && col4[2] && col4[3] && col4[4] && !(col4[5])) {
				document.getElementById("thirtyNine").style.backgroundColor = "black";
				document.getElementById("thirtyNine").style.color = "black";
				col4[5] = true;
			}
		}
		else if(this.innerHTML === "5") {
			if(col5[0] === false) {
				document.getElementById("five").style.backgroundColor = "black";
				document.getElementById("five").style.color = "black";
				col5[0] = true;
			}
			else if (col5[0] && !(col5[1])) {
				document.getElementById("twelve").style.backgroundColor = "black";
				document.getElementById("twelve").style.color = "black";
				col5[1] = true;
			} 
			else if (col5[0] && col5[1] && !(col5[2])) {
				document.getElementById("nineteen").style.backgroundColor = "black";
				document.getElementById("nineteen").style.color = "black";
				col5[2] = true;
			}
			else if (col5[0] && col5[1] && col5[2] && !(col5[3])) {
				document.getElementById("twentySix").style.backgroundColor = "black";
				document.getElementById("twentySix").style.color = "black";
				col5[3] = true;
			}
			else if (col5[0] && col5[1] && col5[2] && col5[3] && !(col5[4])) {
				document.getElementById("thirtyThree").style.backgroundColor = "black";
				document.getElementById("thirtyThree").style.color = "black";
				col5[4] = true;
			}
			else if (col5[0] && col5[1] && col5[2] && col5[3] && col5[4] && !(col5[5])) {
				document.getElementById("fourty").style.backgroundColor = "black";
				document.getElementById("fourty").style.color = "black";
				col5[5] = true;
			}
		}
		else if(this.innerHTML === "6") {
			if(col6[0] === false) {
				document.getElementById("six").style.backgroundColor = "black";
				document.getElementById("six").style.color = "black";
				col6[0] = true;
			}
			else if (col6[0] && !(col6[1])) {
				document.getElementById("thirteen").style.backgroundColor = "black";
				document.getElementById("thirteen").style.color = "black";
				col6[1] = true;
			} 
			else if (col6[0] && col6[1] && !(col6[2])) {
				document.getElementById("twenty").style.backgroundColor = "black";
				document.getElementById("twenty").style.color = "black";
				col6[2] = true;
			}
			else if (col6[0] && col6[1] && col6[2] && !(col6[3])) {
				document.getElementById("twentySeven").style.backgroundColor = "black";
				document.getElementById("twentySeven").style.color = "black";
				col6[3] = true;
			}
			else if (col6[0] && col6[1] && col6[2] && col6[3] && !(col6[4])) {
				document.getElementById("thirtyFour").style.backgroundColor = "black";
				document.getElementById("thirtyFour").style.color = "black";
				col6[4] = true;
			}
			else if (col6[0] && col6[1] && col6[2] && col6[3] && col6[4] && !(col6[5])) {
				document.getElementById("fourtyOne").style.backgroundColor = "black";
				document.getElementById("fourtyOne").style.color = "black";
				col6[5] = true;
			}
		}
		else if(this.innerHTML === "7") {
			if(col7[0] === false) {
				document.getElementById("seven").style.backgroundColor = "black";
				document.getElementById("seven").style.color = "black";
				col7[0] = true;
			}
			else if (col7[0] && !(col7[1])) {
				document.getElementById("fourteen").style.backgroundColor = "black";
				document.getElementById("fourteen").style.color = "black";
				col7[1] = true;
			} 
			else if (col7[0] && col7[1] && !(col7[2])) {
				document.getElementById("twentyOne").style.backgroundColor = "black";
				document.getElementById("twentyOne").style.color = "black";
				col7[2] = true;
			}
			else if (col7[0] && col7[1] && col7[2] && !(col7[3])) {
				document.getElementById("twentyEight").style.backgroundColor = "black";
				document.getElementById("twentyEight").style.color = "black";
				col7[3] = true;
			}
			else if (col7[0] && col7[1] && col7[2] && col7[3] && !(col7[4])) {
				document.getElementById("thirtyFive").style.backgroundColor = "black";
				document.getElementById("thirtyFive").style.color = "black";
				col7[4] = true;
			}
			else if (col7[0] && col7[1] && col7[2] && col7[3] && col7[4] && !(col7[5])) {
				document.getElementById("fourtyTwo").style.backgroundColor = "black";
				document.getElementById("fourtyTwo").style.color = "black";
				col7[5] = true;
			}
		}
	}
	else if(count === true) {
		if(this.innerHTML === "1") {
			if(col1[0] === false) {
				document.getElementById("one").style.backgroundColor = "red";
				document.getElementById("one").style.color = "red";
				col1[0] = true;
			}
			else if (col1[0] && !(col1[1])) {
				document.getElementById("eight").style.backgroundColor = "red";
				document.getElementById("eight").style.color = "red";
				col1[1] = true;
			} 
			else if (col1[0] && col1[1] && !(col1[2])) {
				document.getElementById("fifteen").style.backgroundColor = "red";
				document.getElementById("fifteen").style.color = "red";
				col1[2] = true;
			}
			else if (col1[0] && col1[1] && col1[2] && !(col1[3])) {
				document.getElementById("twentyTwo").style.backgroundColor = "red";
				document.getElementById("twentyTwo").style.color = "red";
				col1[3] = true;
			}
			else if (col1[0] && col1[1] && col1[2] && col1[3] && !(col1[4])) {
				document.getElementById("twentyNine").style.backgroundColor = "red";
				document.getElementById("twentyNine").style.color = "red";
				col1[4] = true;
			}
			else if (col1[0] && col1[1] && col1[2] && col1[3] && col1[4] && !(col1[5])) {
				document.getElementById("thirtySix").style.backgroundColor = "red";
				document.getElementById("thirtySix").style.color = "red";
				col1[5] = true;
			}  
		}
		else if(this.innerHTML === "2") {
			if(col2[0] === false) {
				document.getElementById("two").style.backgroundColor = "red";
				document.getElementById("two").style.color = "red";
				col2[0] = true;
			}
			else if (col2[0] && !(col2[1])) {
				document.getElementById("nine").style.backgroundColor = "red";
				document.getElementById("nine").style.color = "red";
				col2[1] = true;
			} 
			else if (col2[0] && col2[1] && !(col2[2])) {
				document.getElementById("sixteen").style.backgroundColor = "red";
				document.getElementById("sixteen").style.color = "red";
				col2[2] = true;
			}
			else if (col2[0] && col2[1] && col2[2] && !(col2[3])) {
				document.getElementById("twentyThree").style.backgroundColor = "red";
				document.getElementById("twentyThree").style.color = "red";
				col2[3] = true;
			}
			else if (col2[0] && col2[1] && col2[2] && col2[3] && !(col2[4])) {
				document.getElementById("thirty").style.backgroundColor = "red";
				document.getElementById("thirty").style.color = "red";
				col2[4] = true;
			}
			else if (col2[0] && col2[1] && col2[2] && col2[3] && col2[4] && !(col2[5])) {
				document.getElementById("thirtySeven").style.backgroundColor = "red";
				document.getElementById("thirtySeven").style.color = "red";
				col2[5] = true;
			}
		}
		else if(this.innerHTML === "3") {
			if(col3[0] === false) {
				document.getElementById("three").style.backgroundColor = "red";
				document.getElementById("three").style.color = "red";
				col3[0] = true;
			}
			else if (col3[0] && !(col3[1])) {
				document.getElementById("ten").style.backgroundColor = "red";
				document.getElementById("ten").style.color = "red";
				col3[1] = true;
			} 
			else if (col3[0] && col3[1] && !(col3[2])) {
				document.getElementById("seventeen").style.backgroundColor = "red";
				document.getElementById("seventeen").style.color = "red";
				col3[2] = true;
			}
			else if (col3[0] && col3[1] && col3[2] && !(col3[3])) {
				document.getElementById("twentyFour").style.backgroundColor = "red";
				document.getElementById("twentyFour").style.color = "red";
				col3[3] = true;
			}
			else if (col3[0] && col3[1] && col3[2] && col3[3] && !(col3[4])) {
				document.getElementById("thirtyOne").style.backgroundColor = "red";
				document.getElementById("thirtyOne").style.color = "red";
				col3[4] = true;
			}
			else if (col3[0] && col3[1] && col3[2] && col3[3] && col3[4] && !(col3[5])) {
				document.getElementById("thirtyEight").style.backgroundColor = "red";
				document.getElementById("thirtyEight").style.color = "red";
				col3[5] = true;
			}
		}
		else if(this.innerHTML === "4") {
			if(col4[0] === false) {
				document.getElementById("four").style.backgroundColor = "red";
				document.getElementById("four").style.color = "red";
				col4[0] = true;
			}
			else if (col4[0] && !(col4[1])) {
				document.getElementById("eleven").style.backgroundColor = "red";
				document.getElementById("eleven").style.color = "red";
				col4[1] = true;
			} 
			else if (col4[0] && col4[1] && !(col4[2])) {
				document.getElementById("eighteen").style.backgroundColor = "red";
				document.getElementById("eighteen").style.color = "red";
				col4[2] = true;
			}
			else if (col4[0] && col4[1] && col4[2] && !(col4[3])) {
				document.getElementById("twentyFive").style.backgroundColor = "red";
				document.getElementById("twentyFive").style.color = "red";
				col4[3] = true;
			}
			else if (col4[0] && col4[1] && col4[2] && col4[3] && !(col4[4])) {
				document.getElementById("thirtyTwo").style.backgroundColor = "red";
				document.getElementById("thirtyTwo").style.color = "red";
				col4[4] = true;
			}
			else if (col4[0] && col4[1] && col4[2] && col4[3] && col4[4] && !(col4[5])) {
				document.getElementById("thirtyNine").style.backgroundColor = "red";
				document.getElementById("thirtyNine").style.color = "red";
				col4[5] = true;
			}
		}
		else if(this.innerHTML === "5") {
			if(col5[0] === false) {
				document.getElementById("five").style.backgroundColor = "red";
				document.getElementById("five").style.color = "red";
				col5[0] = true;
			}
			else if (col5[0] && !(col5[1])) {
				document.getElementById("twelve").style.backgroundColor = "red";
				document.getElementById("twelve").style.color = "red";
				col5[1] = true;
			} 
			else if (col5[0] && col5[1] && !(col5[2])) {
				document.getElementById("nineteen").style.backgroundColor = "red";
				document.getElementById("nineteen").style.color = "red";
				col5[2] = true;
			}
			else if (col5[0] && col5[1] && col5[2] && !(col5[3])) {
				document.getElementById("twentySix").style.backgroundColor = "red";
				document.getElementById("twentySix").style.color = "red";
				col5[3] = true;
			}
			else if (col5[0] && col5[1] && col5[2] && col5[3] && !(col5[4])) {
				document.getElementById("thirtyThree").style.backgroundColor = "red";
				document.getElementById("thirtyThree").style.color = "red";
				col5[4] = true;
			}
			else if (col5[0] && col5[1] && col5[2] && col5[3] && col5[4] && !(col5[5])) {
				document.getElementById("fourty").style.backgroundColor = "red";
				document.getElementById("fourty").style.color = "red";
				col5[5] = true;
			}
		}
		else if(this.innerHTML === "6") {
			if(col6[0] === false) {
				document.getElementById("six").style.backgroundColor = "red";
				document.getElementById("six").style.color = "red";
				col6[0] = true;
			}
			else if (col6[0] && !(col6[1])) {
				document.getElementById("thirteen").style.backgroundColor = "red";
				document.getElementById("thirteen").style.color = "red";
				col6[1] = true;
			} 
			else if (col6[0] && col6[1] && !(col6[2])) {
				document.getElementById("twenty").style.backgroundColor = "red";
				document.getElementById("twenty").style.color = "red";
				col6[2] = true;
			}
			else if (col6[0] && col6[1] && col6[2] && !(col6[3])) {
				document.getElementById("twentySeven").style.backgroundColor = "red";
				document.getElementById("twentySeven").style.color = "red";
				col6[3] = true;
			}
			else if (col6[0] && col6[1] && col6[2] && col6[3] && !(col6[4])) {
				document.getElementById("thirtyFour").style.backgroundColor = "red";
				document.getElementById("thirtyFour").style.color = "red";
				col6[4] = true;
			}
			else if (col6[0] && col6[1] && col6[2] && col6[3] && col6[4] && !(col6[5])) {
				document.getElementById("fourtyOne").style.backgroundColor = "red";
				document.getElementById("fourtyOne").style.color = "red";
				col6[5] = true;
			}
		}
		else if(this.innerHTML === "7") {
			if(col7[0] === false) {
				document.getElementById("seven").style.backgroundColor = "red";
				document.getElementById("seven").style.color = "red";
				col7[0] = true;
			}
			else if (col7[0] && !(col7[1])) {
				document.getElementById("fourteen").style.backgroundColor = "red";
				document.getElementById("fourteen").style.color = "red";
				col7[1] = true;
			} 
			else if (col7[0] && col7[1] && !(col7[2])) {
				document.getElementById("twentyOne").style.backgroundColor = "red";
				document.getElementById("twentyOne").style.color = "red";
				col7[2] = true;
			}
			else if (col7[0] && col7[1] && col7[2] && !(col7[3])) {
				document.getElementById("twentyEight").style.backgroundColor = "red";
				document.getElementById("twentyEight").style.color = "red";
				col7[3] = true;
			}
			else if (col7[0] && col7[1] && col7[2] && col7[3] && !(col7[4])) {
				document.getElementById("thirtyFive").style.backgroundColor = "red";
				document.getElementById("thirtyFive").style.color = "red";
				col7[4] = true;
			}
			else if (col7[0] && col7[1] && col7[2] && col7[3] && col7[4] && !(col7[5])) {
				document.getElementById("fourtyTwo").style.backgroundColor = "red";
				document.getElementById("fourtyTwo").style.color = "red";
				col7[5] = true;
			}
		}
	}
	count = !count; // this ends the turn of the last player to place a tile and starts the turn of the next player
}

