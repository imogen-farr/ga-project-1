function init() {
  // GENERATE RANDOM COLOURS:

  const startGame = document.querySelector(".start");
  const correct = document.querySelector(".correct span");
  const almost = document.querySelector(".almost span");
  const colourOptions = ["red", "blue", "orange", "green", "purple", "black"];

  function makeChoice() {
    return colourOptions[Math.floor(Math.random() * colourOptions.length)];
  }

  let computerChoices = [
    makeChoice(),
    makeChoice(),
    makeChoice(),
    makeChoice(),
  ];

  function makeComputerChoices() {
    console.log("computer choices: ", computerChoices);
  }

  console.log("computer choices: ", makeComputerChoices);

  startGame.addEventListener("click", makeComputerChoices);

  //

  //START GAME CLICK
  function changeStartColour() {
    startGame.classList.add("grey");
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
      playerAnswers.push(first);
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

  let playerAnswers = [];

  //CHECK GAME CLICK
  const check = document.querySelector(".check");

  function changeCheckColour() {
    check.classList.add("grey");
  }

  check.addEventListener("click", changeCheckColour);


  // SUBMIT MY SEQUENCE AND COMPARE
  const peg1 = document.querySelector("#peg1");
  const peg2 = document.querySelector("#peg2.background");
  const peg3 = document.querySelector("#peg3.background");
  const peg4 = document.querySelector("#peg4.background");

  function compareAnswers() {
    console.log("before loops: ", playerAnswers, computerChoices);
    const fullMatches = playerAnswers
      .map((choice, index) => {
        if (choice === computerChoices[index]) {
          return { colour: choice, index, match: "full" };
        }
      })
      .filter((i) => !!i);

    const indexesToRemove = fullMatches.map((i) => i.index);
    playerAnswers = playerAnswers.filter(
      (_colour, index) => !indexesToRemove.includes(index)
    );
    computerChoices = computerChoices.filter(
      (_colour, index) => !indexesToRemove.includes(index)
    );

    console.log("after filter: ", playerAnswers, computerChoices);
    const partialMatches = playerAnswers
      .map((choice) => {
        if (computerChoices.indexOf(choice) !== -1) {
          return { colour: choice, match: "partial" };
        } else {
          return { colour: choice, match: "none" };
        }
      })
      .filter((i) => !!i);

    console.log([...fullMatches, ...partialMatches]);
    correct.innerHTML = fullMatches.length;
    almost.innerHTML = partialMatches.filter(
      (i) => i.match === "partial"
    ).length;
  }

  check.addEventListener("click", compareAnswers);

  // YOU WIN POP UP

  // const result = document.getElementById("result");

  // function winGame() {
  //   if (computerChoices === playerAnswers) { //CHECK THIS LINE!
  //     result.innerHTML = "YOU WIN!";
  //     result.style.backgroundColor = rgb(211, 175, 54);
  //   }
  // }
  // check.addEventListener("click", winGame);

  //

  // RESET THE GAME
  const resetButton = document.querySelector(".reset");

  function resetGame(e) {
    e.preventDefault();
    startGame.className = "start";
    check.className = "check";
    firstChoice.className = "peg";
    secondChoice.className = "peg";
    thirdChoice.className = "peg";
    fourthChoice.className = "peg";
  }

  resetButton.addEventListener("click", resetGame);


  // TRY AGAIN 

  const tryAgainButton = document.querySelector(".tryAgain");

  function tryAgain(e) {
    e.preventDefault();
    check.className = "check";
    firstChoice.className = "peg";
    secondChoice.className = "peg";
    thirdChoice.className = "peg";
    fourthChoice.className = "peg";
  

    correct.innerHTML = " ";
    almost.innerHTML = " ";
    
  }

  tryAgainButton.addEventListener("click", tryAgain);



}

window.addEventListener("DOMContentLoaded", init);



















