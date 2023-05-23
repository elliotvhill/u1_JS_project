// console.log(`working`)

/* VARIABLES */

const inventory = { } /* empty to start */

const weapons = {
	one: `Pistol: powerful, but only has six shots and limited ammo`,
    two: `Hunting knife: obviously helpful for hunting, but not much help should you run into raiders`,
	three: `Bow and arrow: versatile, but not very powerful`
} /* -> 3 options */


let button1 = document.querySelector('#btn1');
    button1.innerText = weapons.one
let button2 = document.querySelector('#btn2');
    button2.innerText = weapons.two
let button3 = document.querySelector('#btn3');
    button3.innerText = weapons.three


    
const supplies = {
    one: 'flint stone',
    two: 'canvas tent',
    three: 'extra blankets'
    } /* -> 3 options */
const routes = {
    one: 'shortcut through the canyon',
    two: 'long way along the canyon ridge',
    three: 'follow the smaller branch of the river'
    }

const buttons = document.querySelectorAll('.btn')
buttons.forEach(button => {
    button.addEventListener('click', () => 
        console.log(`button has been clicked`)
    )
})

let playersChoice;


let gamePromptText; /* -> will need to change */
const routeChoice = [1, 2, 3]


// set each buttons' initial value (label) -> characters 1/2/3
// const startButton = document.querySelector('#startGame')
// startButton.addEventListener('click', gameStart => {
//     button1.innerText = (` Character 1 `);
//     button2.innerText = (` Character 2 `);
//     button3.innerText = (` Character 3 `);

// })

// function gameStart() {
// }


// user clicks a button -> log and store ID of clicked button √
// let btnId;
// function passBtnId(id) {
//     let btnId = id;
//     console.log(`${btnId}`)
    // let chosenBtn = document.querySelector('input:checked')
    // chosenBtn.innerHTML = `You have chosen option 1.`
// }

// passBtnId()

    // clicked button ID then informs next question options

    // function to update the buttons' text after each prompt
    // const updateBtns = btnId.addEventListener('click', () => {
    //     button1.innerHTML = `Button 1 prompt 2`;
    //     button2.innerHTML = `Button 2 prompt 2`;
    //     button3.innerHTML = `Button 3 prompt 2`
    // })

    // secondPrompt()
    // function secondPrompt(btnId) {
    //     if (playersChoice === 1) {
    //         console.log(`You have chosen option 1.`)
    //     }
    //     else if (playersChoice === 2) {
    //         console.log(`You have chosen option 2.`)
    //     }
    //     else {
    //         console.log(`You have chosen option 3.`)
    //     }
    // }

// function & variable to store the button ID that was clicked
// use that variable 


// 1. Press start button

// 2. Run start game function

// 3. First game text blurb appears

// 4. Three character choice buttons appear
    
    // 5. Listen for a click and identify which button was clicked
    button1.addEventListener('click', choice1 => {
        // console.log(`button 1 clicked`)
        playersChoice = 1
        return playersChoice;
    })
    button2.addEventListener('click', choice2 => {
        // console.log(`button 2 clicked`)
        playersChoice = 2
        return playersChoice;
    })
    button3.addEventListener('click', choice3 => {
        // console.log(`button 3 clicked`)
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