// While it may not seem imperative for smaller programs, you should get in the habit
// linking to a separate js file and also wrapping your js code in either a 
// $(document).ready(function(){
//  // code goes here
// })
// or an IIFE (immediately invoked function expression)
// ;(function(){
//  // code goes here
// })()
var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;
var number = 30;
var intervalId;
$(".questions").hide();
$(".endButton").hide();
$(".endTitle").hide();



// when the user clicks on start 
$(".startButton").on("click",function () {
	// it's nice to have the timer be present at the moment the
	// questions appear instead of showing up a second later.
	$(".timer").html("Time remaining: " + number);
	timer();

	


	
	$(".startButton").hide();
	$(".questions").show();
	$(".endButton").show();


}); // you should try to keep your indentation consistent.

// passing in a reference to a function as opposed to writing out the logic
// inline as you did above is a great practice. I'd suggest sticking to one
// style though; preferably this one.
$(".endButton").on("click",showResults);




// timer
function timer(){

    function run() {
      intervalId = setInterval(decrement, 1000);
    }
    function decrement() {
      number--;
      $(".timer").html("Time remaining: " + number);
      if (number === 0) {
      	showResults();
        
      }
    }
    run();
}

function showResults () {
		calculateScore();
		clearInterval(intervalId);
    $(".questions").hide();
		$(".endButton").hide();
		$(".endTitle").show();
		// show the number of correct asnwers
		$(".correctAnswers").html("Correct Answers: "+ correctAnswers);
		// show the number of incorrect answers
		$(".wrongAnswers").html("Wrong Answers: "+ wrongAnswers);
		// show the number of unansered questions
		$(".unAnswered").html("unanswered: "+ unAnswered);
		//hide the questions 
		// $(".questions").hide(); // line 64 makes this redundant 😬
	}

function calculateScore () {
	if ($('.goodAnswer0').is(":checked")) {
		correctAnswers++;
	}else if($('.wrongAnswer0').is(":checked")){
		wrongAnswers++
	}else{
		unAnswered++
	}		

	if ($('.goodAnswer1').is(":checked")) {
		correctAnswers++;
	}else if($('.wrongAnswer1').is(":checked")){
		wrongAnswers++
	}else{
		unAnswered++
	}	

	if ($('.goodAnswer2').is(":checked")) {
		correctAnswers++;
	}else if($('.wrongAnswer2').is(":checked")){
		wrongAnswers++
	}else{
		unAnswered++
	}	

	if ($('.goodAnswer3').is(":checked")) {
		correctAnswers++;
	}else if($('.wrongAnswer3').is(":checked")){
		wrongAnswers++
	}else{
		unAnswered++
	}
}
