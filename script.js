/* BUTTONS */

const startButton = document.querySelector('#start')
const replayButton = document.querySelector('#replay')

// testing button functionality
// const btnStart = () => console.log('start button clicked')
// const btnStart = () => typeWriter();
startButton.addEventListener(('click'), typeWriter)

/* VARIABLES */
let gamePrompt = `Welcome to Oregon Fail. Select your character below:`;
const speed = 50;
let i = 0;



/* FUNCTIONS */

function typeWriter() {
    // let text = gamePrompt;
    if (i < gamePrompt.length) {
    document.querySelector('#prompts').innerHTML += gamePrompt.charAt(i);
    i++
    setTimeout(typeWriter, speed)
    }
}


/* --------- PSEUDOCODE & WHITEBOARDING ----------- */

// EventListener for Start button click √

// Render game board

// Two text boxes: one at top for prompts, second at bottom as user input

// Typewriter prompt text

// Build out user input field and functionality
    // enter key to submit

// Need a 'lives' counter to track attempts
    // If Lives reaches 0, game is over

// Button to reset & replay


