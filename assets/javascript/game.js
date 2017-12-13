//set global variables
var wins = 0;
var losses = 0;
var currentSessionTalliedValue = 0;
////////
var randomTargetScore = [0,1,2,3]; //need 4 (one for each crystal)

for (i=0; i <4; i++){randomTargetScore[i] = Math.floor(Math.random()*12)}

console.log ("red value: " + randomTargetScore[0]);
console.log ("blue value: " + randomTargetScore[1]);
console.log ("yellow value: " + randomTargetScore[2]);
console.log ("green value: " + randomTargetScore[3]);
/////
var currentGameTargetScore = Math.floor(Math.random()*(120-19) + 19); //returns a random number in between 19 and 120 per this source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for_each...in
console.log ("currentGameTargetScore: " + currentGameTargetScore);

//make it so that when each button/crystal is clicked (onClick/eventListener), the associated value is added to the user's value for that particualr game session (e.g. currentSessionTalliedValue);
//then said value is shown on screen in the "userValueDisplay" div. function defined (but not called yet) here:
function displayUpdatedScore (){$("#userValueDisplay").html("Your total value is: " + currentSessionTalliedValue);}
//source for click jQuery found here: https://www.w3schools.com/jquery/event_click.asp
// Note: can I simplify/condense this? maybe turn it into a single function and loop the target array
//Question: is "N O T E" a predefined JS term?
$("#red").click(function(){
   currentSessionTalliedValue +=randomTargetScore[0];
 console.log("TalliedValue: " + currentSessionTalliedValue);
 displayUpdatedScore ();
});
$("#blue").click(function(){
   currentSessionTalliedValue +=randomTargetScore[1];
 console.log("TalliedValue: " + currentSessionTalliedValue);
 displayUpdatedScore ();
});
$("#yellow").click(function(){
   currentSessionTalliedValue +=randomTargetScore[2];
 console.log("TalliedValue: " + currentSessionTalliedValue);
 displayUpdatedScore ();
});
$("#green").click(function(){
   currentSessionTalliedValue +=randomTargetScore[3];
 console.log("TalliedValue: " + currentSessionTalliedValue);
 displayUpdatedScore ();
});
//game begins when user clicks one of the buttons/crystals

//declare reset function that runs after game is either won or lost: function resetGame(){}

//describe the conditon  of losing and consequences i.e if user valueTotal > currentGameTargetValue, then reset game and increase losses count by 1 (losses++; resetGame())

//describes the conditions of winning else if (userValueTotal === currentGameTargetValue) {wins++; resetGame()}
