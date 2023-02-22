# Project One - Mastermind

Table of Contents:

- Project Overview
- Technologies Used
- Installation and running the game
- Project brief
- Approach Taken
- Bugs
- Wins and Blockers
- Future Content and Improvements
- Key Learnings

# Project Overview

Mastermind is a classic, family favourite game. Before the surge of the internet it was played exclusively in its original form as a board game, but is now also available to play online; either against an oponent or the computer.

The goal of the game is to figure out the sequence of four colours chosen by your opponent. The player uses a method of deduction to find the sequence. On the first round, they will submit a random guessed sequence, using four of the available colours. The oponent will then reveal a) how many colours (if any) are correct, and how many (if any) are in the right position. Then the player guesses again, based on this feedback. The game continues like this until the player correctly guesses all four colours, all in the correct position.

This was my first real project with General Assembley. It was an entirely solo project and I had 7 days to complete it. This gave me my first real chance to understand and develop my javascript skills.

### Play Mastermind here: **\*\*\***

# Technologies used:

- HTML
- CSS
- JavaScript
- Git
- GitHub
- Google Fonts
- Node.js
  - this is the runtime environment
- Pexels

# Project Brief:

- Render a game in the browser
- Design logic for winning & visually display which player won
- Include seperate HTML, CSS and JavaScript files
- Use Javadcript for DOM manipulation
- Deploy your game online

# Installation and running the game:

- To run the game in the browser:

```sh
$ npm install
$ npm start
```

# Approach Taken and Timeline:

Key Dates:

- Day 1 - Planning
- Day 2-4 - Hit MVP
- Day 5-6 - styling
- Day 7 - add any additional features

### Day 1:

On the first day of the project, I set out to plan as much of the project as I could at this stage. I first used excalidraw to create a basic wireframe, so that I could visualise what I wanted to create and how the game should look. I divided my tasks so I new which features I needed to implement and in what order. I realised that there were some elements to the code which would be difficult to plan before beginning the writing process, so I made sure I just had a sense of the direction I needed to take before I started.

### Day 2-4:

The first important feature of the game was establishing the computer as the opponent. In other words, the computer needed to generate a random sequence of colours in order for the player to begin playing. I wrote a very basic, unstyled html file and added four empty boxes and a button. My goal was to create functionality that enabled the player to click the button, which would instruct the computer to generate a sequence. At this initial stage, I realised the empty boxes were not yet necessary as I was focussing on the functionality rather than anything that would be displayed in the browser. I used the console to check that the random colour generator function was working. Here is a snippet of code I wrote for this feature:

```js
const startGame = document.querySelector('.start');
const correct = document.querySelector('.correct span');
const almost = document.querySelector('.almost span');
const colourOptions = ['red', 'blue', 'orange', 'green', 'purple', 'black'];
let userChoice;
let playerAnswers = [];

function makeChoice() {
  return colourOptions[Math.floor(Math.random() * colourOptions.length)];
}

let computerChoices;

function makeComputerChoices() {
  computerChoices = [makeChoice(), makeChoice(), makeChoice(), makeChoice()];
  console.log('computer choices: ', computerChoices);
}

startGame.addEventListener('click', makeComputerChoices);
```

Once this was working, I added some simple CSS so that I could continue to build the game without rely solely on the console. My next task was to create a grid with the colour option, and functionality to allow the player to select a colour and fill a peg with it. It took me a while to figure out how to fill the player pegs with the selected colour as I wanted a 'drag-and-drop' style. However, I ended up with a simpler but functional code that instead allowed the player to select a colour and then click an another button that would fill a peg (with the selected colour). The player could select and de-select colours so I was proud that this worked out.

As my goal for this point of the project was to have an mvp, I needed to create functionality that would compare the computer-generated sequence with the players sequence. At first, I was able to successsfully compare the list of colours between the two sequences, and establish if there were any matches in the arrays. However, the next task of determining whether the colours were in the correct _position_ proved to be more challenging than I anticipated. This task carried over into day 5.

### Day 5:

Eventually, largely through trial and error, I managed to create functionality that would compare the two sequences fully. That is, it compared both the colour types as well as their position. This information was being fed back to me in the console, but was not yet displayed on the browser. I was able to determine if there were any 'full' matches, that is, correct colour in the correct position, as well as any 'partial' matches; correct colour but incorrect position. Here is a code snippet displaying the comparison functionality:

```js
function compareAnswers() {
  console.log('before loops: ', playerAnswers, computerChoices);
  const fullMatches = playerAnswers
    .map((choice, index) => {
      if (choice === computerChoices[index]) {
        return { colour: choice, index, match: 'full' };
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

  console.log('after filter: ', playerAnswers, computerChoices);
  const partialMatches = playerAnswers
    .map((choice) => {
      if (computerChoices.indexOf(choice) !== -1) {
        return { colour: choice, match: 'partial' };
      } else {
        return { colour: choice, match: 'none' };
      }
    })
    .filter((i) => !!i);

  console.log([...fullMatches, ...partialMatches]);
  correct.innerHTML = fullMatches.length;
  almost.innerHTML = partialMatches.filter((i) => i.match === 'partial').length;
}

check.addEventListener('click', compareAnswers);
```

### Day 6:

My task for day 6 was to develop the styling. I used a colour-picker chrome extension to build a colour pallette that I liked, and I used Pexels to find a background image for the game. I also wanted a fun way to display the hidden colour sequence that the computer had picked. I downloaded a gif which I imported into the code and edited the CSS so the layout matched my vision. I continued to style so that the page was coherent and I added text and display features so that all the necessary information that was being displayed in the console was also being displayed on the web-page. For example, the text that informed the player how many pegs were correct/false.

### Day 7:

This was the final day of the project, so I spent it refactoring my code so that it was clear and concise, and debugging. There was one bug that I continued to struggle with: when I selected a colour to fill my peg, while I could de-select and pick another colour, I could only do so for the colours that were _subsequent_ in the browser display. I could not de-select and select another colour that was displayed earlier in the colour grid. This was frustrating as the console was correctly displaying the selected colour, but the browser page was not. Eventually I managed to solve this. I also implemented a resest button so the player could clear all the pegs and restart the game.

# Bugs:

- I encountered several bugs as I was building the game but I learnt that the key was to go through the code carefully, slowly and to keep it concise; simpler code creates far less space for bugs and errors. I also kept testing as I was building, to keep me on top of things.
- There is still one main bug in the game: When the player presses the button to incite the comparison of the sequences, it only gives the correct feedback some of the time. There are occasions where it will accurately advise which colours are correct and where (I use the console to check), but sometimes it doesn't make this comparison correctly. As a result, it can be impossible for the player to win, even if their sequence is correct.

# Wins and Blockers

- The two biggest blockers of this build were 1) creating the comparison functionality that also included feedback about position as well as colour. And 2) The remaining bug that means the game is playable only 50% of the time.
- I was very proud of the functionality that I did manage to successfully implement. As this was not only my first project, but also my first time properly using JavaScript, the fact that a had a complete game to present was a big win.

# Future content and improvements:

- A designed pop-up feature that informs the player when they've won
- A limit on how many guesses the player can make before the game is over (i.e an option to lose as well as win)
- A grid that displays the players previous inputs: currently the player has to rememeber their previous sequence before their next guess, but it would be optimal if all their prior guesses (and their outcomes) were displayed.
- Full de-bug

# Key Learnings

- That simple is always better: tidier, clearer code is always more efficient especially when it comes to debugging and sharing the code with others.
- That the internet and other coders can always help! I learnt that referring to other sources when I encounter problems only enhances my coding skills.
