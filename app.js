// Initial message when starting the game
setTimeout(() => {
    let welcomeMessage = window.confirm("Need a Helping Hand? Let's do this together!");
    if (welcomeMessage) {
        startGame();
    }
}, '5000');

// Globablized value of Player One input
let player1Input;
// Created an array for Player options
const playerOneOptions = ['school', 'work', 'relationship', 'family', 'stress'];

// Declares variable for selecting the Message board
let messageBoard = document.querySelector('.dialogueBox');
// Declares variable for selecting and displaying text on info board
let infoBoard = document.getElementById("infoBoard");

let playerOneTurn = true;



// Class that creates Player One
class playerOne {
    constructor(happiness) {
        this.name = prompt("Player 1, what's your name?");
        this.happiness = happiness;
        this.issue = noSelfChoice;
    }
}

// Set Variable to store value returned from function
let noSelfChoice = playerOneNoChoice();

// Create an instance for Player One
let player1 = new playerOne(0, `${noSelfChoice}`); 
let currentPlayer = player1;

// Function to choose a random option for Player One
function playerOneNoChoice() {
    const randomNum = Math.floor(Math.random() * 5);
    if (randomNum === 0) {
        return playerOneOptions[0];
    } else if (randomNum === 1) {
        return playerOneOptions[1];
     } else if (randomNum === 2) {
        return playerOneOptions[2];
    } else if (randomNum === 3) {
        return playerOneOptions[3];
    } else if (randomNum === 4) {
        return playerOneOptions[4];
    } else {
        playerOneNoChoice();
    }
}

// Function created to determine how the Player One's happiness level is affected while they cannot make their own choices. 
function playerOneActionNoChoice() {

    infoBoard.innerText = `${player1.name} is suffering from ${player1.issue} related issues!`
    playerOneNoChoice();
    checkWin();
 if (noSelfChoice === 'school') {
        player1.happiness = player1.happiness - 3
       messageBoard.innerHTML = "Ahhh man! School can be tough sometimes.";
       updatePlayerStatsNoPlayerOne();
        currentPlayer = player2;
          
        } else if (noSelfChoice === 'work') {
            player1.happiness = player1.happiness - 5;
            messageBoard.innerHTML = "Works sucks! Why work for the man when we can work for ourself? Money..";
            updatePlayerStatsNoPlayerOne();
            currentPlayer = player2;
        } else if (noSelfChoice === 'relationship') {
            player1.happiness = player1.happiness - 7;
            messageBoard.innerHTML = "I cannot keep a relationship! They just are not for me!!";
            updatePlayerStatsNoPlayerOne();
            currentPlayer = player2;
        } else if (noSelfChoice === 'family') {
            player1.happiness = player1.happiness - 8;
            messageBoard.innerHTML = "Love my family.. But they are stressing me out!!";
            updatePlayerStatsNoPlayerOne();
            currentPlayer = player2;
        } else if (noSelfChoice === 'stress') {
            player1.happiness = player1.happiness - 9;
            messageBoard.innerHTML = "Hello darkness my old friend.. Why the heck am I depressed again??..";
            updatePlayerStatsNoPlayerOne();
            currentPlayer = player2;
        } else {
            alert('90 - Not Working...')
        }
    }

function playerOneActionChoice() {

    if (player1Input === 'school') {
            player1.happiness = player1.happiness - 2;
            messageBoard.innerHTML = "Ahhh man! School can be tough sometimes.";
           
    } else if (player1Input === 'work') {
            player1.happiness = player1.happiness - 4;
            messageBoard.innerHTML = "Works sucks! Why work for the man when we can work for ourself? Money..";
            
    } else if (player1Input === 'relationship') {
            player1.happiness = player1.happiness - 6;
            messageBoard.innerHTML = "I cannot keep a relationship! They just are not for me!!";
        
    } else if (player1Input === 'family') {
            player1.happiness = player1.happiness - 8;
            messageBoard.innerHTML = "Love my family.. But they are stressing me out!!";
    
    } else if (player1Input === 'stress') {
            player1.happiness = player1.happiness - 9;
            messageBoard.innerHTML = "Hello darkness my old friend.. Why the heck am I depressed again??..";
            
        } else if (player1Input === 'sleep') {
            player1.happiness = player1.happiness + 5;
            messageBoard.innerHTML = "Maybe a little sleep will help clear my mind.";
            
        } else if (player1Input === 'exercise') {
            player1.happiness = player1.happiness + 7;
            messageBoard.innerHTML = "I love to execise. It is great for the body and mind!";
            
        } else if (player1Input === 'medication') {
            player1.happiness = player1.happiness + 10;
            messageBoard.innerHTML = "I cannot do this alone.. This medication will help ease my mind!";
            
        } else {
            alert("129 - Not working!")
        }
            
}


// Globalized Player 2 Input
let player2Input;
// Class that creates Player Two
class playerTwo {
    constructor() {
        this.name = prompt("Player 2, what's your name?");
        this.help;
    }
    playerTwoChoice() { // Method used take in Player Two's input
        let btnsPlayer2 = document.querySelectorAll(".btnsPlayer2 button");
    if(currentPlayer === player2) {
        messageBoard.innerHTML = `${player2.name}, how will you choose to help ${player1.name}?`;
        btnsPlayer2.forEach(button => {
            button.addEventListener('click', () => {
                player2Input = button.innerHTML;
                updatePlayerStatsNoPlayerOne();
                changePlayerOneFace();
                player1BtnDisplay();
                checkWin();
                currentPlayer = player1;
            })
        })
    }    
    }
}

// Creates an instance for Player Two
let player2 = new playerTwo('Wayne', 10);

//Show current stats for Players
updatePlayerStatsNoPlayerOne();

// Select Player One Image HTML element
const playerOneFace = document.querySelector('#playerOneImg');

// Image values
const sadFaceUrl = './images/sadFace.png';
const neutralFaceUrl = './images/neutralFace.png';
const happyFaceUrl = './images/happyFace.png';

function changePlayerOneFace() {

    if (player1.happiness >= 50 && player1.happiness <= 99) {
        playerOneFace.src = neutralFaceUrl;
        playerOneFace.style.boxShadow = '0px 0px 20px 10px yellow';
        playerOneFace.style.backgroundColor = '0px 0px 20px 10px yellow';
    } else if (player1.happiness >= 100) {
        playerOneFace.src = happyFaceUrl;
        playerOneFace.style.boxShadow = '0px 0px 20px 10px green';
        playerOneFace.style.backgroundColor = '0px 0px 20px 10px green';
    } else {
        playerOneFace.src = sadFaceUrl;
    }
}

// Selects buttons // When Clicked determine how the Player One's happiness is affected once they are free to make their own choice.
let player1btns = document.querySelector('.playerOneButtonContainer');

// Selects all Player 1 buttons
let btnsPlayer1 = document.querySelectorAll(".btnsPlayer1 button");
// Selects all Player 2 buttons
let btnsPlayer2 = document.querySelectorAll(".btnsPlayer2 button");
// Selects Option text for display change
let playerOneMenuTxt = document.querySelector('#playerOneOptions')

// Function that controls Player 1 buttons display
function player1BtnDisplay() {
    if (player1.happiness >= 70) {
        player1btns.style.display = "flex";
        playerOneMenuTxt.style.display = "flex";
    } else {
        player1btns.style.display = "none";
        playerOneMenuTxt.style.display = "none";
    }
}

// Updates player stats when Player One is not manual
function updatePlayerStatsNoPlayerOne() {
    let playerOneStats = document.querySelector('.pOneStats');
    let playerTwoStats = document.querySelector('.pTwoStats');
    let playerOneNameBox = document.querySelector('.nameBoxPlayer1');
    let playerTwoNameBox = document.querySelector('.nameBoxPlayer2');

    playerOneNameBox.innerHTML = `Player 1: ${player1.name}`;
    playerTwoNameBox.innerHTML = `Player 2: ${player2.name}`;


    playerOneStats.innerHTML = `Name: ${player1.name} <br>
                                Happiness: ${player1.happiness} <br>
                                Issue: ${noSelfChoice} <br>`

    playerTwoStats.innerHTML = `Name: ${player2.name} <br>
                                Help: ${player2Input} <br>`
}

// Updates player stats when Player One is manual
function updatePlayerStatsPlayerOneActive() {
    
    let playerOneStats = document.querySelector('#playerStats');
    let playerOneStats2 = document.querySelector('#playerStats2')
    let playerTwoStats = document.querySelector('.pTwoStats');
    let playerOneNameBox = document.querySelector('.nameBoxPlayer1');
    let playerTwoNameBox = document.querySelector('.nameBoxPlayer2');

    playerOneStats.style.display = 'none';
    playerOneStats2.style.display = 'flex';

    playerOneNameBox.innerHTML = `Player 1: ${player1.name}`;
    playerTwoNameBox.innerHTML = `Player 2: ${player2.name}`;

    playerOneStats2.innerHTML = `Name: ${player1.name} <br>
                                Happiness: ${player1.happiness} <br>
                                Help: ${player1Input} <br>`

    playerTwoStats.innerHTML = `Name: ${player2.name} <br>
                                Help: ${player2Input} <br>`

    
}

  
function playerTurn() {

    if (player1.happiness < 50) {
        playerOneActionNoChoice();
        player2.playerTwoChoice();
    } else {
        if (player1.happiness >= 70) {
           makeChoiceRds();
        } else {
            alert('264 - Not working!');
        }
    }
}

// Function created to control the flow of the rounds while Player 1 is able to make their own choices. 
function makeChoiceRds() {
    if (player1.happiness >= 70) {
        player1.playerOneChoice();
        console.log(player1.happiness);

        player2.playerTwoChoice();
        console.log(player1.happiness);

        if (player1.happiness >= 100) {

            messageBoard.innerHTML = "What's this... Wow! You seem so happy!";
    
            if (confirm("Do you feel as happy as you look? If no, lets keep going!")) {
                location.reload();
            } else {
                confirm("You are as happy as you have ever been! Happiness looks great on you! Glad I could lend a Helping Hand...");            
                window.close();
            }
        }
    } else {
        alert("290 - This is not working!!");
    }
}

// Checks if peak happiness has been met and ends game
function checkWin() {
    changePlayerOneFace();
    if (player1.happiness >= 100) {
        infoBoard.innerHTML =`Congratulations ${player1.name} and ${player2.name}! You have successfully helped ${player1.name} reach peak Happiness!`;

        setTimeout(() => {if (confirm("C'mon guys, let's leave this in the past! Great things are ahead!")) {
            window.close();
            }
        }, 2000);
    } else if (player1.happiness <= -100) {
        infoBoard.innerHTML =`Hey.. ${player1.name} and ${player2.name}, let's try again?!`;
        setTimeout(() => {if (confirm("C'mon guys, let's leave this in the past! Great things are ahead!")) {
            restart();
            }
        }, 2000);
    }
}

// Function that will start the game flow
function startGame() {

    alert("Hey man... I'm just here to help!");
    alert("Please let me know how I can help you in any way.");

    changePlayerOneFace();

    if (confirm('Are you ready to accept a Helping Hand?')) {

        setTimeout(playerTurn(), 2000);
    } else {
        window.close();
    }
}

// Function that restarts the game
function restart() {
    if (confirm('Lets try this again.. Would you like some help?')){
        location.reload();
    } else {
        confirm('Thanks for trying. Trying is the first step to getting better..')
        window.close();
    }
}

// Buttons Selection and Operation

// Player 1 Buttons
let btnExercise = document.getElementById("exercise");
btnExercise.addEventListener("click", btnExercises);

function btnExercises() {
    player1.happiness = player1.happiness + 7;
    messageBoard.innerHTML = "I love to execise. It is great for the body and mind!";
    player1Input = btnExercise.innerHTML;
    updatePlayerStatsPlayerOneActive();
}

// let btnSchool = document.getElementById("school");
// btnSchool.addEventListener("click", btnSchools);

// function btnSchools() {
//     player1.happiness = player1.happiness - 3
//     messageBoard.innerHTML = "Ahhh man! School can be tough sometimes.";
//     updatePlayerStatsPlayerOneActive();
// }

// let btnWork = document.getElementById("work");
// btnWork.addEventListener("click", btnWorks);

// function btnWorks() {
//     player1.happiness = player1.happiness - 5;
//     messageBoard.innerHTML = "Works sucks! Why work for the man when we can work for ourself? Money..";
//     updatePlayerStatsPlayerOneActive();
// }

// let btnRelationship = document.getElementById("relationship");
// btnRelationship.addEventListener("click", btnRelationships);

// function btnRelationships() {
//     player1.happiness = player1.happiness - 7;
//     messageBoard.innerHTML = "I cannot keep a relationship! They just are not for me!!";
//     updatePlayerStatsPlayerOneActive();
// }

// let btnFamily = document.getElementById("family");
// btnFamily.addEventListener("click", btnFamilies);

// function btnFamilies() {
//     player1.happiness = player1.happiness - 8;
//     messageBoard.innerHTML = "Love my family.. But they are stressing me out!!";
//     updatePlayerStatsPlayerOneActive();
// }

// let btnStress = document.getElementById("stress");
// btnStress.addEventListener("click", btnStresses);

// function btnStresses() {
//     player1.happiness = player1.happiness - 9;
//     messageBoard.innerHTML = "Hello darkness my old friend.. Why the heck am I depressed again??..";
//     updatePlayerStatsPlayerOneActive();
// }

let btnSleep = document.getElementById("sleep");
btnSleep.addEventListener("click", btnSleeps);

function btnSleeps() {
    player1.happiness = player1.happiness + 5;
            messageBoard.innerHTML = "Maybe a little sleep will help clear my mind.";
            player1Input = btnSleep.innerHTML;
    updatePlayerStatsPlayerOneActive();
    setTimeout(checkWin(), 3000);
}


let btnMedication = document.getElementById("medication");
btnMedication.addEventListener("click", btnMedications);

function btnMedications() {
    player1.happiness = player1.happiness + 10;
    messageBoard.innerHTML = "I cannot do this alone.. This medication will help ease my mind!";
    player1Input = btnMedication.innerHTML;
    updatePlayerStatsPlayerOneActive();
    setTimeout(checkWin(), 3000);
}

// Player 2 Buttons
let btnFood = document.getElementById("food");
btnFood.addEventListener("click", btnFoods);
function btnFoods() {
    player1.happiness = player1.happiness + 3;
    messageBoard.innerHTML = "Let's go grab some food man! You know you will have a great time!";
    updatePlayerStatsNoPlayerOne();
}

let btnTherapy = document.getElementById("therapy");
btnTherapy.addEventListener("click", btnTherapyS);

function btnTherapyS() {
    player1.happiness = player1.happiness + 10;
    messageBoard.innerHTML = "Therapy is like going to the gym. The more you go the better you will feel!";
    updatePlayerStatsNoPlayerOne();
}

let btnFriendship = document.getElementById("friendship");
btnFriendship.addEventListener("click", btnFriendships);

function btnFriendships() {
    player1.happiness = player1.happiness + 5;
    messageBoard.innerHTML = "A great friend is hard to come by.. Thanks for being my friend!";
    updatePlayerStatsNoPlayerOne();
}

let btnTrigger = document.getElementById("trigger");
btnTrigger.addEventListener("click", btnTriggers);

function btnTriggers() {
    player1.happiness = player1.happiness - 10;
    messageBoard.innerHTML = `**Extends arms and pushes ${player1.name}** You need to do what we tell you to do! Get over it man!`;
    updatePlayerStatsNoPlayerOne();
}

let btnDiscourage = document.getElementById("discourage");
btnDiscourage.addEventListener("click", btnDiscourages);

function btnDiscourages() {
    player1.happiness = player1.happiness - 5
    messageBoard.innerHTML = "You are weaker than generic brand saltine cracker mannn. You cannot overcome this!";
    updatePlayerStatsNoPlayerOne();
}