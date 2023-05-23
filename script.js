/* BUTTONS */

const startButton = document.querySelector('#start')
const replayButton = document.querySelector('#replay')

// testing button functionality
// const btnStart = () => console.log('start button clicked')
// const btnStart = () => typeWriter();
// startButton.addEventListener(('click'), typeWriter)

/* VARIABLES */


// let gamePrompt;

function gamePrompt(playerAction) {
    gamePlayPrompts.forEach(element => {
        
    })
}

const gamePlayPrompts = {
    welcome: `Welcome to Oregon Fail. Select your character below:`,
    prompt2: `This is your second prompt.`,
    prompt3: `This is your third prompt.`
}
const speed = 50;
let i = 0;




/* FUNCTIONS */
initialize();
function initialize() {
    // renderStart();
    startButton.addEventListener(('click'), typeWriter)
}


function renderStart() {
    const char1blurb = document.createTextNode(`Character 1`);
    const character1 = document.createElement('button').appendChild(char1blurb);
}

function typeWriter(text) {
    let text = gamePrompt;
    if (i < gamePrompt.length) {
    document.querySelector('#prompts').innerHTML += gamePrompt.charAt(i);
    i++
    setTimeout(typeWriter, speed)
    }
}



/* --------- PSEUDOCODE & WHITEBOARDING ----------- */

// EventListener for Start button click √

// Render game board -> start 

    // start with choice of 3 characters 
        // button one
        // button two
        // button three

    // gameplay with text prompts 

// Two text boxes: one at top for prompts, second at bottom as user input 

// Typewriter prompt text √

// Build out user input field and functionality 
    // enter key to submit 

// Need a 'lives' counter to track attempts 
    // If Lives reaches 0, game is over 

// Button to reset & replay 


