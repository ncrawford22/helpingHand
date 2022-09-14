// Initial message when starting the game
setTimeout(() => {
    let welcomeMessage = window.confirm("Need a Helping Hand? Let's do this together!");
    if (welcomeMessage) {
        startGame();
    }
}, '1000');

// Globablized value of Player One input
let player1Input;
// Class that creates Player One
class playerOne {
    constructor(name, happiness, issue) {
        this.name = name;
        this.happiness = happiness;
        this.issue = issue;
    }
    playerOneChoice() { // Method used take in Player One's input and determine if the option is viable.
        player1Input = prompt("What's your issue mannnn? School, Work, Relationship, Family, Stress. Maybe you are ready for some Sleep or Medication?")
        player1Input = player1Input.toLowerCase();
    
        if (player1Input === 'school' || player1Input === 'work' || player1Input === 'relationship' || player1Input === 'family' || player1Input === 'stress' || player1Input === 'sleep' || player1Input === 'medication') {
            this.issue = player1Input;
            return player1Input;
        } else {
            console.log('Please choose a Cause from this list: School, Work, Relationship, Family, or Stress.. Or lets heal up with some Sleep or Medication!');
        }
    }
}

// Create an instance for Player One
let player1 = new playerOne('Nathan', 0, 'Work');

// Globablized value of Player Two input
let player2Input;

// Class that creates Player Two
class playerTwo {
    constructor(name, friendship, help) {
        this.name = name;
        this.friendship = friendship;
        this.help = help;
    }
    playerTwoChoice() { // Method used take in Player Two's input and determine if the option is viable.
        player2Input = prompt(`C'mon ${player2.name} let's help!? But keep in mind this is real life. Choose an option: Food, Exercise, Therapy, Friendship, Trigger, Discourage.`)
            player2Input = player2Input.toLowerCase();
        if (player2Input === 'food' || player2Input === 'exercise' || player2Input === 'therapy' || player2Input === 'friendship' || player2Input === 'trigger' || player2Input === 'discourage') {
            this.help = player2Input;
            console.log(player2Input)
            return player2Input;
        } else {
            console.log('Please choose an option from this list! Choose wisely...: Food, Exercise, Therapy, Friendship, Trigger, Discourage');
        }
    }
}

// Creates an instance for Player Two
let player2 = new playerTwo('Wayne', 10, 'Exercise');

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

// Set a variable that stored the value of the playerOneNoChoice function
let noSelfChoice = playerOneNoChoice();

// Function created to determine how the Player One's happiness level is affected while they cannot make their own choices. 
  const weighPlayerOneNoOption = () => {
    if (noSelfChoice === 'school') {
        player1.happiness = player1.happiness - 3;
        alert("Ahhh man! School can be tough sometimes.");
    } else if (noSelfChoice === 'work') {
        player1.happiness = player1.happiness - 5;
        alert("Works sucks! Why work for the man when we can work for ourself? Money..");
    } else if (noSelfChoice === 'relationship') {
        player1.happiness = player1.happiness - 7;
        alert("I cannot keep a relationship! They just are not for me!!");
    } else if (noSelfChoice === 'family') {
        player1.happiness = player1.happiness - 9;
        alert("Love my family.. But they are stressing me out!!");
    } else if (noSelfChoice === 'stress') {
        player1.happiness = player1.happiness - 10;
        playerOneNoChoice();
        alert("Hello darkness my old friend.. Why the heck am I depressed again??..");
        playerOneNoChoice();
    } else if (noSelfChoice === 'sleep') {
        player1.happiness = player1.happiness + 5;
        alert("Maybe a little sleep will help clear my mind.");
    } else if (noSelfChoice === 'medication') {
        player1.happiness = player1.happiness + 10;
        alert("I cannot do this alone.. This medication will help ease my mind!")
    }
  }

  // Function created to determine how the Player One's happiness is affected once they are free to make their own choice.
  const weighPlayerOneChoice = () => {
    if (player1Input === 'school') {
        player1.happiness = player1.happiness - 2;
        alert("Ahhh man! School can be tough sometimes.");
    } else if (player1Input === 'work') {
        player1.happiness = player1.happiness - 4;
        alert("Works sucks! Why work for the man when we can work for ourself? Money..");
    } else if (player1Input === 'relationship') {
        player1.happiness = player1.happiness - 6;
        alert("I cannot keep a relationship! They just are not for me!!");
    } else if (player1Input === 'family') {
        player1.happiness = player1.happiness - 8;
        alert("Love my family.. But they are stressing me out!!");
    } else if (player1Input === 'stress') {
        player1.happiness = player1.happiness - 10;
        alert("Hello darkness my old friend.. Why the heck am I depressed again??..");
    } else if (player1Input === 'sleep') {
        player1.happiness = player1.happiness + 5;
        alert("Maybe a little sleep will help clear my mind.");
    } else if (player1Input === 'medication') {
        player1.happiness = player1.happiness + 10;
        alert("I cannot do this alone.. This medication will help ease my mind!")
    }
}

  // Function created to determine how the Player One's happiness is affected based on the option chosen by Player Two

  const weighPlayerTwoOption = () => {
    if (player2Input === 'food') {
        player1.happiness = player1.happiness + 3;
    } else if (player2Input === 'exercise') {
        player1.happiness = player1.happiness + 5;
    } else if (player2Input === 'friendship') {
        player1.happiness = player1.happiness + 7;
    } else if (player2Input === 'therapy') {
        player1.happiness = player1.happiness + 10;
    } else if (player2Input === 'discourage') {
        player1.happiness = player1.happiness - 5;
    } else if (player2Input === 'trigger') {
        player1.happiness = player1.happiness - 10;
    }
}

// Function used to control the flow of the rounds while the Player One does not have the option to make their own choices.
function noChoiceRds() {
    while (player1.happiness < 50) {
        playerOneNoChoice();
        weighPlayerOneNoOption();
        console.log(player1.happiness);

        player2.playerTwoChoice();
        weighPlayerTwoOption();
        console.log(player1.happiness)

        while (player1.happiness >= 50) {
            alert(`${player1.name} you are finally getting this under control!`);

            playerOneNoChoice();
            weighPlayerOneNoOption();
            console.log(player1.happiness);

            player2.playerTwoChoice();
            weighPlayerTwoOption();
            console.log(player1.happiness);

            if (player1.happiness >= 70) {
                alert(`${player1.name}, congrats! You are really taking control of this!`);

                 if (confirm(`${player1.name}, are you ready to make your own decisions? Click Ok to proceed.`)) {
                        makeChoiceRds();
                } else if (player1.happiness >= 100) {
                        alert("What's this... Wow! You seem so happy!")
                        alert("You are as happy as you have ever been! Happiness looks great on you! Glad I could lend a Helping Hand...");
                        if (confirm("Do you feel as happy as you look? If yes, click Cancel and Have a Great Day!!")) {
                            window.close();
                        } else {
                            restart();
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
        player1.playerOneChoice();
        weighPlayerOneChoice();
        console.log(player1.happiness);
        
        player2.playerTwoChoice();
        weighPlayerTwoOption();
        console.log(player1.happiness);

        if (player1.happiness >= 100) {
            alert("What's this... Wow! You seem so happy!")
    
            if (confirm("Do you feel as happy as you look? If no, lets keep going!")) {
                location.reload();
            } else {
                alert("You are as happy as you have ever been! Happiness looks great on you! Glad I could lend a Helping Hand...");            
                window.close();
            }
        }
    }
}

// Function that will start the game flow
function startGame() {

    alert("Hey man... I'm just here to help!");
    alert("Please let me know how I can help you in any way.");

    setTimeout(() => {
        if (confirm('Are you ready to accept a Helping Hand?')) {
            noChoiceRds();
        }
    })
}

// Function that restarts the game
function restart() {
    if (confirm('Lets try this again.. Would you like some help?')){
        location.reload();
    } else {
        alert('Thanks for trying. Trying is the first step to getting better..')
        window.close();
    }
}