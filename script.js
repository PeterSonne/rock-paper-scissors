// variables
const choiceValues = {
  rock: 1,
  paper: 2,
  scissors: 3
};
let resetTimeout = null;

//routines
const reset = () => {
  document.querySelector("#outcome").innerHTML = "";
  document
    .querySelectorAll("#opponent>div")
    .forEach(e => e.classList.add("hidden"));
};
const playGame = playerChoice => {
  const rand = Math.floor(Math.random() * 3) + 1;
  const compChoice = Object.keys(choiceValues).find(
    e => choiceValues[e] == rand
  );
  //show computer players choice
  document.querySelector("#opponent #" + compChoice).classList.remove("hidden");

  // you always lose - but...
  let responseToPlayer = "You lose :(";
  // decision?
  if (compChoice == playerChoice) {
    responseToPlayer = "Tie game :/";
  }
  if (
    choiceValues[playerChoice] - 1 == choiceValues[compChoice] ||
    choiceValues[playerChoice] + 2 == choiceValues[compChoice]
  ) {
    responseToPlayer = "You WIN! :)";
  }
  // show result
  document.querySelector("#outcome").innerHTML = responseToPlayer;
  // after 1.5 reset the whole page
  resetTimeout = setTimeout(() => {
    reset();
    document.activeElement.blur();
  }, 1500);
};

const play = playerChoice => {
  // first clear Timeout for resets - otherwise might be triggered after new game started
  clearTimeout(resetTimeout);
  // reset in case not yet happened
  reset();
  // wait for animation and then play
  setTimeout(playGame, 500, playerChoice);
};
