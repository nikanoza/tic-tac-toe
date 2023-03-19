const choiceButtons = document.querySelectorAll(".btn-box");
const playButtons = document.querySelectorAll(".play-btn");
const home = document.querySelector("#home");
const board = document.querySelector("#board");

let player1 = "x";
let mode = "cpu";
let turn = "x";
let freeButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let xArray = [];
let oArray = [];
let winnerCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const activateChoice = (icon) => {
  if (icon === "x") {
    choiceButtons[0].classList.add("active");
    choiceButtons[1].classList.remove("active");
    player1 = "x";
  } else {
    choiceButtons[0].classList.remove("active");
    choiceButtons[1].classList.add("active");
    player1 = "o";
  }
};

const onHoverEffects = () => {
  for (let index = 0; index < freeButtons.length; index++) {
    const playButtonIndex = freeButtons[index];
    if (turn === "x") {
      playButtons[playButtonIndex].classList.add("xHover");
      playButtons[playButtonIndex].classList.remove("oHover");
    } else {
      playButtons[playButtonIndex].classList.add("oHover");
      playButtons[playButtonIndex].classList.remove("xHover");
    }
  }
};

const createClickedFunctions = () => {
  for (let index = 0; index < playButtons.length; index++) {
    playButtons[index].onclick = (event) => {
      event.target.classList.remove("xHover");
      event.target.classList.remove("oHover");

      const spliceIndex = freeButtons.indexOf(index);
      freeButtons.splice(spliceIndex, 1);

      const icon = document.createElement("img");
      icon.classList.add("play-icon");
      if (turn === "x") {
        icon.src = "./assets/icon-x.svg";
        event.target.append(icon);
        turn = "o";
      } else {
        icon.src = "./assets/icon-o.svg";
        event.target.append(icon);
        turn = "x";
      }
      onHoverEffects();

      event.target.onclick = null;
    };
  }
};

const startGame = (modeParam) => {
  home.style.display = "none";
  board.style.display = "flex";
  document.body.style.alignItems = "flex-start";
  mode = modeParam;
  onHoverEffects();
  createClickedFunctions();
};
