const choiceButtons = document.querySelectorAll(".btn-box");
const playButtons = document.querySelectorAll(".play-btn");
const home = document.querySelector("#home");
const board = document.querySelector("#board");

let player1 = "x";
let mode = "cpu";
let turn = "x";
let xScore = 0;
let oScore = 0;
let tieScore = 0;

let freeBoxes = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let xArray = [];
let oArray = [];

let winningCombinations = [
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

const onHovers = () => {
  for (let index = 0; index < freeBoxes.length; index++) {
    const playButtonIndex = freeBoxes[index];
    if (turn === "x") {
      playButtons[playButtonIndex].classList.add("xHover");
      playButtons[playButtonIndex].classList.remove("oHover");
    } else {
      playButtons[playButtonIndex].classList.add("oHover");
      playButtons[playButtonIndex].classList.remove("xHover");
    }
  }
};

onHovers();

const createClickedEvents = () => {
  for (let index = 0; index < playButtons.length; index++) {
    playButtons[index].onclick = (event) => {
      const spliceIndex = freeBoxes.indexOf(index);
      freeBoxes.splice(spliceIndex, 1);
      event.target.classList.remove("xHover");
      event.target.classList.remove("oHover");
      if (turn === "x") {
        const icon = document.createElement("img");
        icon.classList.add("play-icon");
        icon.src = "./assets/icon-x.svg";
        event.target.append(icon);
        xArray.push(index);
        turn = "0";
      } else {
        const icon = document.createElement("img");
        icon.classList.add("play-icon");
        icon.src = "./assets/icon-o.svg";
        event.target.append(icon);
        oArray.push(index);
        turn = "x";
      }
      onHovers();
      event.target.onclick = null;
    };
  }
};

const startGame = (modeParam) => {
  home.style.display = "none";
  board.style.display = "flex";
  document.body.style.alignItems = "flex-start";
  mode = modeParam;
  createClickedEvents();
};
