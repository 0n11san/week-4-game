//set global variables
var wins = 0;
var losses = 0;
var currentSessionTalliedValue = 0;
////////
var randomTargetValue = [0,1,2,3]; //need 4 (one for each crystal)

for (i=0; i <4; i++){randomTargetValue[i] = Math.floor(Math.random()*12)}

console.log ("red value: " + randomTargetValue[0]);
console.log ("blue value: " + randomTargetValue[1]);
console.log ("yellow value: " + randomTargetValue[2]);
console.log ("green value: " + randomTargetValue[3]);
/////
var currentGameTargetValue = Math.floor(Math.random()*(120-19) + 19); //returns a random number in between 19 and 120 per this source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for_each...in
console.log ("currentGameTargetValue: " + currentGameTargetValue);
$("#targetValueDisplay").html("TARGET VALUE: " + currentGameTargetValue);
//make it so that when each button/crystal is clicked (onClick/eventListener), the associated value is added to the user's value for that particualr game session (e.g. currentSessionTalliedValue);
//then said value is shown on screen in the "userValueDisplay" div. function defined (but not called yet) here:
function displayUpdatedValue (){$("#userValueDisplay").html("Your total value is: " + currentSessionTalliedValue);}
//source for click jQuery found here: https://www.w3schools.com/jquery/event_click.asp
// Note: can I simplify/condense this? maybe turn it into a single function and loop the target array
//Question: is "N O T E" a predefined JS term?
$("#red").click(function(){
   currentSessionTalliedValue +=randomTargetValue[0];
 console.log("TalliedValue: " + currentSessionTalliedValue);
 displayUpdatedValue ();
});
$("#blue").click(function(){
   currentSessionTalliedValue +=randomTargetValue[1];
 console.log("TalliedValue: " + currentSessionTalliedValue);
 displayUpdatedValue ();
});
$("#yellow").click(function(){
   currentSessionTalliedValue +=randomTargetValue[2];
 console.log("TalliedValue: " + currentSessionTalliedValue);
 displayUpdatedValue ();
});
$("#green").click(function(){
   currentSessionTalliedValue +=randomTargetValue[3];
 console.log("TalliedValue: " + currentSessionTalliedValue);
 displayUpdatedValue ();
});
//game begins when user clicks one of the buttons/crystals

//declare reset function that runs after game is either won or lost: function resetGame(){}

//describe the conditon  of losing and consequences i.e if user valueTotal > currentGameTargetValue, then reset game and increase losses count by 1 (losses++; resetGame())

//describes the conditions of winning else if (userValueTotal === currentGameTargetValue) {wins++; resetGame()}
