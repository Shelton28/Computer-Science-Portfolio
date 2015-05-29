//This is the main character (basically what the user will be moving)
var main = {
	id: "Main",
	elem: document.getElementById('Main'),
	xpos: 20,
	ypos: 20,
	radius: 7.5,
	goRight: false,
	goLeft: false,
	goUp: false,
	goDown: false,
	//This method checks to see if any of the WASD keys have been pressed it then changes keys to true allowing the function updateMainPos to run
	move: function (evt) {
		if(evt.keyCode === 87) {
			main.goUp = true;
		}
		if(evt.keyCode === 65) {
			main.goLeft = true;
		}
		if(evt.keyCode === 83) {
			main.goDown = true;
			console.log("setting to true");
		}
		if(evt.keyCode === 68) {
			main.goRight = true;
		}
	},
	//This method checks to see if the WASD keys are no longer being pressed...stoping the updateMainPos funciton
	stop: function(evt) {

		if(evt.keyCode === 87) {
			main.goUp = false;
		}
		if(evt.keyCode === 65) {
			main.goLeft = false;
		}
		if(evt.keyCode === 83) {
			main.goDown = false;
			console.log("setting to false");
			console.log(main.elem);
			console.log(main.elem.style.top);
		}
		if(evt.keyCode === 68) {
			main.goRight = false;
		}
	} 
};

//This is the coin the main character must collect to win the game
var coin = {
	id: "Coin",
	elem: document.getElementById('Coin'),
	xpos: 1148,
	ypos: 600,
	radius: 5,
};


window.addEventListener('keydown', main.move);
window.addEventListener('keyup', main.stop);


//This funciton allows the character to move 
function updateMainPos(){

	if(main.goUp && main.ypos > 0){
		main.elem.style.top = parseInt(main.elem.style.top) - 2 + "px";
		main.ypos = parseInt(main.elem.style.top);
	}
	if(main.goDown && main.ypos + 18 < window.innerHeight){
		main.elem.style.top = parseInt(main.elem.style.top) + 2 + "px";
		main.ypos = parseInt(main.elem.style.top);
	}
	if(main.goLeft && main.xpos > 0) {
		main.elem.style.left = parseInt(main.elem.style.left) - 2 + "px";
		main.xpos = parseInt(main.elem.style.left);
	}
	if(main.goRight && main.xpos + 18 < window.innerWidth) {
		main.elem.style.left = parseInt(main.elem.style.left) + 2 + "px";
		main.xpos = parseInt(main.elem.style.left);
	}
}


//This function checks to see if the character has collected the coin
function checkEnd() {
	var a;
	var x;
	var y;

	a = main.radius + coin.radius;
	x = main.xpos - coin.xpos;
    y = main.ypos - coin.ypos;

    if ( a > Math.sqrt( (x*x) + (y*y) ) ) {
        return true;
    } else {
        return false;
    }   
}

//This variable stores data for if/if not the player has collected the coin
var win = false

//This function calls all of the other functions and requests animation frames for all of them
function runGame() {
	updateMainPos();
	if(checkEnd() && !win){
		alert("You Win");
		win= true;
		location.reload()
	}
	window.requestAnimationFrame(runGame);
}
runGame();


