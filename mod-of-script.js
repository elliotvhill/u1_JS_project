console.log(`working`)
/* VARIABLES */

const inventory = { } /* empty to start */
const weapons = ['pistol', 'bow and arrow', 'machete'] /* -> 3 options */
const supplies = ['flint stone', 'canvas tent', 'blankets'] /* -> 3 options */
let gamePromptText; /* -> will need to change */
const routeChoice = [1, 2, 3]

let button1 = document.querySelector('#btn1');
let button2 = document.querySelector('#btn2');
let button3 = document.querySelector('#btn3');

// set each buttons' initial value (label) -> characters 1/2/3

    // user clicks a button -> log and store ID of clicked button
    // clicked button ID then informs next question options

// function to update the buttons' text after each prompt
function updateBtns(btnNum) {}

// function & variable to store the button ID that was clicked
// use that variable 


// 1. Press start button

// 2. Run start game function

// 3. First game text blurb appears

// 4. Three character choice buttons appear
    
    // 5. Listen for a click and identify which button was clicked
    let playersChoice;
    button1.addEventListener('click', choice1 => {
        console.log(`button 1 clicked`)
        button1.innerText = (`Character 1`)
        playersChoice = 1
        return playersChoice;
    })
    button2.addEventListener('click', choice2 => {
        console.log(`button 2 clicked`)
        button2.innerText = (`Character 2`)
        playersChoice = 2
        return playersChoice;
    })
    button3.addEventListener('click', choice3 => {
        console.log(`button 3 clicked`)
        button3.innerText = (`Character 3`)
        playersChoice = 3
        return playersChoice;
    })

// 6. Text blurb states 'you chose character [X]'

// 7. Third text blurb appears: what weapon do you bring

// 8. create an 'inventory' object
    // const inventory = { } /* <-- empty at start of game */

// 9. Three more buttons for diff weapons
    // const weapons = ['pistol', 'bow and arrow', 'machete']
    
// 10. Listen for click and identify which weapon
    // store in 'inventory'

// 11. 4th text blurb: which supplies do you bring

// 12. Three more buttons for supplies
    // const supplies = ['flint stone', 'canvas tent', 'blankets']

// 13. Listen for click and identify which supplies chosen
    // store in 'inventory'

// 14. present options for route to take