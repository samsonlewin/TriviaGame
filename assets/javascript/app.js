
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
	timer();

	$(".endButton").on("click",function () {
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
		$(".questions").hide();
	});


	
	$(".startButton").hide();
	$(".questions").show();
	$(".endButton").show();


			
	if ($('.goodAnswer0:checked')) {
		correctAnswers++;
	}else if($('.wrongAnswer0:checked')){
		wrongAnswers++
	}else{
		unAnswered++
	}		

	if ($('.goodAnswer1:checked')) {
		correctAnswers++;
	}else if($('.wrongAnswer1:checked')){
		wrongAnswers++
	}else{
		unAnswered++
	}	

	if ($('.goodAnswer2 :checked')) {
		correctAnswers++;
	}else if($('.wrongAnswer2:checked')){
		wrongAnswers++
	}else{
		unAnswered++
	}	

	if ($('.goodAnswer3:checked')) {
		correctAnswers++;
	}else if($('.wrongAnswer3:checked')){
		wrongAnswers++
	}else{
		unAnswered++
	}	

		});






// timer
function timer(){

    function run() {
      intervalId = setInterval(decrement, 1000);
    }
    function decrement() {
      number--;
      $(".timer").html("Time remaining: " + number);
      if (number === 0) {
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
		$(".questions").hide();
        
      }
    }
    run();
}

