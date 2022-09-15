// Globablized value of Player One input
let player1Input;
// Class that creates Player One
class playerOne {
    constructor(name, happiness) {
        this.name = name;
        this.happiness = happiness;
        this.issue = noSelfChoice;
    }
    playerOneChoice() { // Method used take in Player One's input and determine if the option is viable.
        player1Input = prompt("What's your issue mannnn? School, Work, Relationship, Family, Stress. Maybe you are ready for some Sleep or Medication?")
        player1Input = player1Input.toLowerCase();
    
        if (player1Input === 'school' || player1Input === 'work' || player1Input === 'relationship' || player1Input === 'family' || player1Input === 'stress' || player1Input === 'sleep' || player1Input === 'medication') {
            this.issue = player1Input;
            return player1Input;
        } else {
           setTimeout(confirm('Please choose a Cause from this list: School, Work, Relationship, Family, or Stress.. Or lets heal up with some Sleep or Medication!'), 3000);
        }
    }
}

// Created an array for Player options 
const playerOneOptions = ['school', 'work', 'relationship', 'family', 'stress', 'sleep', 'medication'];

// Function to choose a random option for Player One
const playerOneNoChoice = () => {
    const randomNum = Math.floor(Math.random() * 7);

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
    } else if (randomNum === 5) {
        return playerOneOptions[5];
    } else if (randomNum === 6) {
        return playerOneOptions[6];
    }
}

let noSelfChoice = playerOneNoChoice();

// Create an instance for Player One
let player1 = new playerOne('Nathan', 0, `${noSelfChoice}`);

// Globablized value of Player Two input
let player2Input;

// Class that creates Player Two
class playerTwo {
    constructor(name, friendship) {
        this.name = name;
        this.friendship = friendship;
        this.help = player2Input;
    }
    playerTwoChoice() { // Method used take in Player Two's input and determine if the option is viable.
        player2Input = prompt(`C'mon ${player2.name} let's help!? But keep in mind this is real life. Choose an option: Food, Exercise, Therapy, Friendship, Trigger, Discourage.`);
            player2Input = player2Input.toLowerCase();
        if (player2Input === 'food' || player2Input === 'exercise' || player2Input === 'therapy' || player2Input === 'friendship' || player2Input === 'trigger' || player2Input === 'discourage') {
            this.help = player2Input;
            console.log(player2Input)
            return player2Input;
        } else {
           setTimeout(confirm('Please choose an option from this list! Choose wisely...: Food, Exercise, Therapy, Friendship, Trigger, Discourage'), 3000);
        }
    }
}

// Creates an instance for Player Two
let player2 = new playerTwo('Wayne', 10, 'Exercise');

//Show current stats for Players
updatePlayerStats();

// Initial message when starting the game
setTimeout(() => {
    let welcomeMessage = window.confirm("Need a Helping Hand? Let's do this together!");
    if (welcomeMessage) {
        startGame();
    }
}, '3000');

// Select Player One Image HTML element
let playerOneFace = document.querySelector('#playerOneImg');
let btnHappy = document.querySelector('button');

// Image values
const sadFaceUrul = 'images/sadFace.png';
const neutralFaceUrl = 'images/neutralFace.png';
const happyFaceUrl = 'images/sadFace.png';

// btnHappy.addEventListener("click", changePlayerOneFace);

function changePlayerOneFace() {
    if (player1.happiness >= 50 && player1.happiness < 100 && player1.happiness != 100) {
        playerOneFace.setAttribute('src', neutralFaceUrl);
            if (player1.happiness >= 100) {
            playerOneFace.setAttribute('src', happyFaceUrl);
        } else {
            playerOneFace.setAttribute('src', sadFaceUrul);
        }
    }
}

function updatePlayerStats() {
    let playerOneStats = document.querySelector('.pOneStats');
    let playerTwoStats = document.querySelector('.pTwoStats');

    playerOneStats.innerHTML = `Name: ${player1.name} <br>
                                Happiness: ${player1.happiness} <br>
                                Issue: ${player1.issue} <br>`
    
    playerTwoStats.innerHTML = `Name: ${player2.name} <br>
                                Friendship Level: ${player2.friendship} <br>
                                Help: ${player2.help} <br>`
}

// Function created to determine how the Player One's happiness level is affected while they cannot make their own choices. 
  const weighPlayerOneNoOption = () => {
    if (noSelfChoice === 'school') {
        player1.happiness = player1.happiness - 3;
        updatePlayerStats();
       setTimeout(confirm("Ahhh man! School can be tough sometimes."), 2000);
    } else if (noSelfChoice === 'work') {
        player1.happiness = player1.happiness - 5;
        updatePlayerStats();
       setTimeout(confirm("Works sucks! Why work for the man when we can work for ourself? Money.."), 2000);
    } else if (noSelfChoice === 'relationship') {
        player1.happiness = player1.happiness - 7;
        updatePlayerStats();
        setTimeout(confirm("I cannot keep a relationship! They just are not for me!!"), 2000);
    } else if (noSelfChoice === 'family') {
        player1.happiness = player1.happiness - 8;
        updatePlayerStats();
        setTimeout(confirm("Love my family.. But they are stressing me out!!"), 2000);
    } else if (noSelfChoice === 'stress') {
        player1.happiness = player1.happiness - 9;
        updatePlayerStats();
        setTimeout(confirm("Hello darkness my old friend.. Why the heck am I depressed again??.."), 2000);
    } else if (noSelfChoice === 'sleep') {
        player1.happiness = player1.happiness + 5;
        updatePlayerStats();
        setTimeout(confirm("Maybe a little sleep will help clear my mind."), 2000);
    } else if (noSelfChoice === 'medication') {
        player1.happiness = player1.happiness + 10;
        updatePlayerStats();
        setTimeout(confirm("I cannot do this alone.. This medication will help ease my mind!"), 2000);
    }
  }

  // Function created to determine how the Player One's happiness is affected once they are free to make their own choice.
  const weighPlayerOneChoice = () => {
    if (player1Input === 'school') {
        player1.happiness = player1.happiness - 2;
        updatePlayerStats();
        confirm("Ahhh man! School can be tough sometimes.");
    } else if (player1Input === 'work') {
        player1.happiness = player1.happiness - 4;
        updatePlayerStats();
        confirm("Works sucks! Why work for the man when we can work for ourself? Money..");
    } else if (player1Input === 'relationship') {
        player1.happiness = player1.happiness - 6;
        updatePlayerStats();
        confirm("I cannot keep a relationship! They just are not for me!!");
    } else if (player1Input === 'family') {
        player1.happiness = player1.happiness - 8;
        updatePlayerStats();
        confirm("Love my family.. But they are stressing me out!!");
    } else if (player1Input === 'stress') {
        player1.happiness = player1.happiness - 9;
        updatePlayerStats();
        confirm("Hello darkness my old friend.. Why the heck am I depressed again??..");
    } else if (player1Input === 'sleep') {
        player1.happiness = player1.happiness + 5;
        updatePlayerStats();
        confirm("Maybe a little sleep will help clear my mind.");
    } else if (player1Input === 'medication') {
        player1.happiness = player1.happiness + 10;
        updatePlayerStats();
        confirm("I cannot do this alone.. This medication will help ease my mind!");
    }
}

  // Function created to determine how the Player One's happiness is affected based on the option chosen by Player Two

  const weighPlayerTwoOption = () => {
    if (player2Input === 'food') {
        player1.happiness = player1.happiness + 3;
        updatePlayerStats();
    } else if (player2Input === 'exercise') {
        player1.happiness = player1.happiness + 5;
        updatePlayerStats();
    } else if (player2Input === 'friendship') {
        player1.happiness = player1.happiness + 7;
        updatePlayerStats();
    } else if (player2Input === 'therapy') {
        player1.happiness = player1.happiness + 10;
        updatePlayerStats();
    } else if (player2Input === 'discourage') {
        player1.happiness = player1.happiness - 5;
        updatePlayerStats();
    } else if (player2Input === 'trigger') {
        player1.happiness = player1.happiness - 10;
        updatePlayerStats();
    }
}

// Function used to control the flow of the rounds while the Player One does not have the option to make their own choices.
function noChoiceRds() {
    while (player1.happiness < 50) {

        updatePlayerStats();

        setTimeout(playerOneNoChoice(), 2000);
        setTimeout(weighPlayerOneNoOption(), 2000);
        console.log(player1.happiness);

        updatePlayerStats();

        setTimeout(player2.playerTwoChoice(), 2000);
        setTimeout(weighPlayerTwoOption(), 2000);
        console.log(player1.happiness);

        updatePlayerStats();

        while (player1.happiness >= 50) {

            changePlayerOneFace();

            setTimeout(confirm(`${player1.name} you are finally getting this under control!`), 300000);

            updatePlayerStats();

            setTimeout(() => {
                playerOneNoChoice();
                weighPlayerOneNoOption();
            console.log(player1.happiness);
            }, 3000);

            updatePlayerStats();

            setTimeout(() => {
                player2.playerTwoChoice();
                weighPlayerTwoOption();
                console.log(player1.happiness);
            }, 3000);

            updatePlayerStats();

            if (player1.happiness >= 70) {

                setTimeout(confirm(`${player1.name}, congrats! You are really taking control of this!`), 300000);

                 if (confirm(`${player1.name}, are you ready to make your own decisions? Click Ok to proceed.`)) {
                    updatePlayerStats();
                        setTimeout(makeChoiceRds(), 3000);
                } else if (player1.happiness >= 100) {

                    changePlayerOneFace();

                        alert("What's this... Wow! You seem so happy!")
                        alert("You are as happy as you have ever been! Happiness looks great on you! Glad I could lend a Helping Hand...");
                        if (confirm("Do you feel as happy as you look? If yes, click Cancel and Have a Great Day!!")) {
                    
                            // window.close();
                        } else {
                            break; // restart();
                        }
                       
                } else {
                    restart();
                }
            } 
        } 
    }
}

// Function created to control the flow of the rounds while Player 1 is able to make their own choices. 
function makeChoiceRds() {
    while (player1.happiness >= 70) {

        updatePlayerStats();

        setTimeout(() => {
            player1.playerOneChoice();
            weighPlayerOneChoice();
            console.log(player1.happiness);
        }, 3000);
        
        updatePlayerStats();

        setTimeout(() => {
            player2.playerTwoChoice();
            weighPlayerTwoOption();
        console.log(player1.happiness);
        }, 3000);

        updatePlayerStats();

        if (player1.happiness >= 100) {

            changePlayerOneFace();

            confirm("What's this... Wow! You seem so happy!");
    
            if (confirm("Do you feel as happy as you look? If no, lets keep going!")) {
                location.reload();
            } else {
                confirm("You are as happy as you have ever been! Happiness looks great on you! Glad I could lend a Helping Hand...");            
                // window.close();
            }
        }
    }
}

// Function that will start the game flow
function startGame() {

    alert("Hey man... I'm just here to help!");
    alert("Please let me know how I can help you in any way.");

    if (confirm('Are you ready to accept a Helping Hand?')) {
        noChoiceRds();
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
