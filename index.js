const btnEl = document.getElementById("roll-button");
const diceEl = document.getElementById("dice");
const historyEl = document.getElementById("roll-history");

//create an empty array for the dice history
let historyList = [];

const rollDice = () => {
  const rollResult = Math.floor(Math.random() * 6) + 1;
  const diceFace = getDiceFace(rollResult);
  //change the dice display to the result
  diceEl.innerHTML = diceFace;
  //updating tthe history list
  historyList.push(rollResult);
  updateRollHistory();
};

const updateRollHistory = () => {
  //emtry the history element
  historyEl.innerHTML = "";
  for (let i = 0; i < historyList.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Roll`;
  }
};

const getDiceFace = (rollResult) => {
  switch (rollResult) {
    case 1:
      return "&#9856";
    case 2:
      return "&#9857";
    case 3:
      return "&#9858";
    case 4:
      return "&#9859";
    case 5:
      return "&#9860";
    case 6:
      return "&#9861";
    default:
      return "";
  }
};

btnEl.addEventListener("click", () => {
  //adding the roll-animation class to the diceEl
  diceEl.classList.add("roll-animation");
  setTimeout(() => {
    diceEl.classList.remove("roll-animation");
    rollDice();
  }, 1000);
});
