function init() {
  // GENERATE RANDOM COLOURS:

  const startGame = document.querySelector(".start");
  const colourOptions = ["red", "blue", "orange", "green", "purple", "black"];

  function makeChoice() {
    return colourOptions[Math.floor(Math.random() * colourOptions.length)];
  }

  function makeComputerChoices() {
    const computerChoices = {
      firstChoice: makeChoice(),
      secondChoice: makeChoice(),
      thirdChoice: makeChoice(),
      fourthChoice: makeChoice(),
    };
    const computerChoicesArray = Object.values(computerChoices);
    console.log(computerChoicesArray, "object into array");
  }



  startGame.addEventListener("click", makeComputerChoices);
  //

  //START GAME CLICK
  function changeStartColour() {
    startGame.style.background = "grey";
  }

  startGame.addEventListener("click", changeStartColour);

  // SELECT COLOUR OPTION:

  const colourButtons = document.querySelectorAll(".colour");
  const background = document.querySelector(".selectedColour");

  let userChoice;
  function fillBackground(event) {
    console.log(event.target.id);
    background.classList.add(event.target.id);
    userChoice = event.target.id;
  }

  colourButtons.forEach((button) => {
    button.addEventListener("click", fillBackground);
  });

  //

  // SUBMIT COLOUR INTO PEGS

  const submit = document.querySelector(".submit");
  const firstChoice = document.querySelector("#peg1");
  const secondChoice = document.querySelector("#peg2");
  const thirdChoice = document.querySelector("#peg3");
  const fourthChoice = document.querySelector("#peg4");

  function resetBackground() {
    background.className = "selectedColour";
  }

  let currentPeg = 1;
  function fillPeg() {
    if (currentPeg === 1) {
      firstChoice.classList.add(userChoice);
      const first = userChoice;
      console.log(first);
      playerAnswers.push(first)
      resetBackground();
      currentPeg++;
    } else if (currentPeg === 2) {
      secondChoice.classList.add(userChoice);
      const second = userChoice;
      console.log(second);
      playerAnswers.push(second);
      resetBackground();
      currentPeg++;
    } else if (currentPeg === 3) {
      thirdChoice.classList.add(userChoice);
      const third = userChoice;
      console.log(third);
      playerAnswers.push(third);
      resetBackground();
      currentPeg++;
    } else if (currentPeg === 4) {
      fourthChoice.classList.add(userChoice);
      const fourth = userChoice;
      console.log(fourth);
      playerAnswers.push(fourth);
      resetBackground();
      currentPeg++;
    }
  }

  submit.addEventListener("click", fillPeg);


  const playerAnswers = []

  //CHECK GAME CLICK
  const check = document.querySelector(".check");

  function changeCheckColour() {
    check.style.background = "grey";
  }

  check.addEventListener("click", changeCheckColour);

  // SUBMIT MY SEQUENCE AND COMPARE
  const peg1 = document.querySelector("#peg1");
  const peg2 = document.querySelector("#peg2.background");
  const peg3 = document.querySelector("#peg3.background");
  const peg4 = document.querySelector("#peg4.background");

  function compareAnswers() {
    console.log("Player answers: ", playerAnswers);

    
    
    const isSubset = (playerAnswers, computerChoicesArray) =>
      computerChoicesArray.every((element) => playerAnswers.includes(element));

    console.log("comparing 2 arrays", isSubset);






  }

  check.addEventListener("click", compareAnswers);

  
  //

  
}

window.addEventListener("DOMContentLoaded", init);
