var button = document.getElementById("submitButton");
var dropDown = document.getElementById("DropdownMenu1");
button.addEventListener("click", doMath);
var input1 = document.getElementById('Number1');
var input2 = document.getElementById('Number2');
var num1 = 0;
var num2 = 0;
var answer = 0;

function doMath(){
	if  (dropDown.value === "+") {
	    num1 = parseInt(input1.value);
	    num2 = parseInt(input2.value);
	    answer = num1 + num2;
	    document.getElementById('Answer').innerHTML = answer;

	}
	else if (dropDown.value === "-") {
		num1 = parseInt(input1.value);
		num2 = parseInt(input2.value);
		answer = num1 - num2;
		document.getElementById('Answer').innerHTML = answer;

	}
	else if (dropDown.value === "x") {
		num1 = parseInt(input1.value);
		num2 = parseInt(input2.value);
		answer = num1 * num2;
		document.getElementById('Answer').innerHTML = answer;

	}
	else if (dropDown.value === "/") {
		num1 = parseInt(input1.value);
		num2 = parseInt(input2.value);
		answer = num1 / num2;
		document.getElementById('Answer').innerHTML = answer;

	}
	else if (dropDown.value === "EXP") {
		num1 = parseInt(input1.value);
		num2 = parseInt(input2.value);
		answer = Math.pow(num1, num2);
		document.getElementById('Answer').innerHTML = answer;

	}
	else if (dropDown.value === "sqrt") {
		num1 = parseInt(input1.value);
		num2 = parseInt(input2.value);
		answer = Math.sqrt(num2);
		document.getElementById('Answer').innerHTML = answer;

	}
};
/* activate sidebar */
$('#sidebar').affix({
  offset: {
    top: 235
  }
});

/* activate scrollspy menu */
var $body   = $(document.body);
var navHeight = $('.navbar').outerHeight(true) + 10;

$body.scrollspy({
	target: '#leftCol',
	offset: navHeight
});

/* smooth scrolling sections */
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 50
        }, 1000);
        return false;
      }
    }
}); 











  