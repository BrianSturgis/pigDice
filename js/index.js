//business logic
function pigDice() {
  let dice = Math.floor(Math.random() * 6) + 1;
  console.log(dice);
};

function total() {
  
  let score = 0;
  if (roll > 1) {
  score += roll;
};
console.log("greater than 1");

// user Logic
$(document).ready(function() {
  $("#btn").click(pigDice);
});