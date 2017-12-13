//set global variables
var wins = 0;
var losses = 0;
var currentSessionTalliedValue = 0; //stores value generated from user's crytstal clicks
var currentGameTargetValue = 0;
////////
var randomTargetValue = [0,1,2,3]; //need 4 (one for each crystal)

//declare reset function that runs after game is either won or lost: function resetGame(){}
function resetNewGame(){
  for (i=0; i <4; i++){randomTargetValue[i] = Math.floor(Math.random()*(12-1) + 1)}

  console.log ("red value: " + randomTargetValue[0]);
  console.log ("blue value: " + randomTargetValue[1]);
  console.log ("yellow value: " + randomTargetValue[2]);
  console.log ("green value: " + randomTargetValue[3]);
  /////
  currentGameTargetValue = Math.floor(Math.random()*(120-19) + 19); //returns a random number in between 19 and 120 per this source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for_each...in
  console.log ("currentGameTargetValue: " + currentGameTargetValue);
  $("#targetValueDisplay").html("TARGET VALUE: " + currentGameTargetValue);

  currentSessionTalliedValue = 0;
}
resetNewGame();
//make it so that when each button/crystal is clicked (onClick/eventListener), the associated value is added to the user's value for that particular game session (e.g. currentSessionTalliedValue);
//then said value is shown on screen in the "userValueDisplay" div. function defined (but not called yet) here:
function displayUpdatedValue (){$("#userValueDisplay").html("Your total value is: " + currentSessionTalliedValue);}
//source for click jQuery found here: https://www.w3schools.com/jquery/event_click.asp
// Note: can I simplify/condense this? maybe turn it into a single function and loop the target array
//Question: is "N O T E" a predefined JS term?
$("#red").click(function(){
   currentSessionTalliedValue +=randomTargetValue[0];
 console.log("TalliedValue: " + currentSessionTalliedValue);
 displayUpdatedValue ();
 lossOrWin ();
});
$("#blue").click(function(){
   currentSessionTalliedValue +=randomTargetValue[1];
 console.log("TalliedValue: " + currentSessionTalliedValue);
 displayUpdatedValue ();
 lossOrWin ();
});
$("#yellow").click(function(){
   currentSessionTalliedValue +=randomTargetValue[2];
 console.log("TalliedValue: " + currentSessionTalliedValue);
 displayUpdatedValue ();
 lossOrWin ();
});
$("#green").click(function(){
   currentSessionTalliedValue +=randomTargetValue[3];
 console.log("TalliedValue: " + currentSessionTalliedValue);
 displayUpdatedValue ();
 lossOrWin ();
});
//game begins when user clicks one of the buttons/crystals

function lossOrWin () {
  //describe the conditon  of losing and consequences i.e if user valueTotal > currentGameTargetValue, then reset game and increase losses count by 1 (losses++; resetNewGame())
  if (currentSessionTalliedValue > currentGameTargetValue){
    losses++;
    $("#losses").html("Losses: " + losses);
    resetNewGame();
    alert ("You lost. Sorry, number is too big :( \n Click another crystal to start over again w/ new values");
  }
  //describes the conditions of winning else if (userValueTotal === currentGameTargetValue) {wins++; resetGame()}
  else if (currentSessionTalliedValue === currentGameTargetValue) {
    wins++;
    $("#wins").html("wins: " + wins);
    resetNewGame();
    //maybe add in event to play Sonic's theme song when u win!
    alert ("you won!");
    }
}
//call lossOrWin () function whenever buttons are clicked
