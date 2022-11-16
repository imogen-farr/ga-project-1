function init() {
  // GENERATE RANDOM COLOURS:

  const startGame = document.querySelector(".start");
  const colourOptions = ["red", "blue", "orange", "green", "purple", "black"];

  const choices = Object.keys(colourOptions);

  function makeChoice() {
    return choices[Math.floor(Math.random() * 4)];
  }

  startGame.addEventListener("click", makeChoice);

  // console.log(makeChoice);
  //

  // SELECT COLOUR OPTION:

  const redBtn = document.querySelector("#red");
  const blueBtn = document.querySelector("#blue");
  const orangeBtn = document.querySelector("#orange");
  const greenBtn = document.querySelector("#green");
  const purpleBtn = document.querySelector("#purple");
  const blackBtn = document.querySelector("#black");

  const background = document.querySelector(".selectedColour");

  function fillRed() {
    background.classList.add("red");
  }
  redBtn.addEventListener("click", fillRed);

  function fillBlue() {
    background.classList.add("blue");
  }
  blueBtn.addEventListener("click", fillBlue);

  function fillOrange() {
    background.classList.add("orange");
  }
  orangeBtn.addEventListener("click", fillOrange);

  function fillGreen() {
    background.classList.add("green");
  }
  greenBtn.addEventListener("click", fillGreen);

  function fillPurple() {
    background.classList.add("purple");
  }
  purpleBtn.addEventListener("click", fillPurple);

  function fillBlack() {
    background.classList.add("black");
  }
  blackBtn.addEventListener("click", fillBlack);

  //

  // SUBMIT COLOUR INTO PEGS

  const submit = document.querySelector(".submit");
  const firstChoice = document.querySelector("#peg1");
  const secondChoice = document.querySelector("#peg2");
  const thirdChoice = document.querySelector("#peg3");
  const fourthChoice = document.querySelector("#peg4");

  function fillFirstPeg() {
    if (background.classList.contains("red")) {
      firstChoice.style.backgroundColor = "red";
    } else if (background.style.backgroundColor === "blue") {
      firstChoice.style.backgroundColor = "blue";
    } else if (background.style.backgroundColor === "orange") {
      firstChoice.style.backgroundColor = "orange";
    } else if (background.style.backgroundColor === "green") {
      firstChoice.style.backgroundColor = "green";
    } else if (background.style.backgroundColor === "purple") {
      firstChoice.style.backgroundColor = "purple";
    } else if (background.style.backgroundColor === "black") {
      firstChoice.style.backgroundColor = "black";
    }
  }

  submit.addEventListener("click", fillFirstPeg);
}

window.addEventListener("DOMContentLoaded", init);
