const choiceButtons = document.querySelectorAll(".btn-box");
const home = document.querySelector("#home");
const board = document.querySelector("#board");

let player1 = "x";
let mode = "cpu";

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

const startGame = (modeParam) => {
  home.style.display = "none";
  board.style.display = "flex";
  mode = modeParam;
};
