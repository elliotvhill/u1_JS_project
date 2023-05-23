const playStart = document.querySelector('#startGame')
let playerAction;
const character1 = document.querySelector('#char1')
const character2 = document.querySelector('#char2')
const character3 = document.querySelector('#char3')
let gameText = document.querySelector('#game-prompt');

// playStart.addEventListener('click', runGame => {
    // console.log(`button clicked`)
    // let chooseCharacter = prompt(`Welcome. Please choose a character (1, 2, or 3)`)
    //     if (chooseCharacter === '1') {
    //         alert(`You have chosen character 1.`)
    //     }
    //     else if (chooseCharacter === '2') {
    //         alert(`You have chosen character 2.`)
    //     }
    //     else {
    //         alert(`You have chosen character 3.`)
    //     }




// })




character1.addEventListener('click', choseOne => {
    gameText.innerHTML = `<h3>You have chosen character 1.</h3>`
})
character2.addEventListener('click', choseTwo => {
    gameText.innerHTML = `<h3>You have chosen character 2.</h3>`
})
character3.addEventListener('click', choseThree => {
    gameText.innerHTML = `<h3>You have chosen character 3.</h3>`
})

