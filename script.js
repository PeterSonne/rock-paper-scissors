// variables
const choiceValues = {
  rock: 1,
  paper: 2,
  scissors: 3
};

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

  document.querySelector("#opponent #" + compChoice).classList.remove("hidden");

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
  document.querySelector("#outcome").innerHTML = responseToPlayer;
  setTimeout(() => {
    reset();
    document.activeElement.blur();
  }, 1500);
};

const play = playerChoice => {
  reset();
  setTimeout(playGame, 500, playerChoice);
};
