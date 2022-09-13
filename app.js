const playerOneOptions = ['school', 'work', 'relationship', 'family', 'stress', 'sleep', 'medication'];

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

console.log(playerOneNoChoice())

class playerOne {
    constructor(name, dpLevel, issue) {
        this.name = name;
        this.dpLevel = dpLevel;
        this.issue = issue;
    }
}

function playerOneFree() {
    let pOneInput = prompt("What's your issue mannnn? School, Work, Relationship, Family, Stress, Sleep, or Medication.")
    pOneInput = pOneInput.toLowerCase();

    if (pOneInput === 'school' || pOneInput === 'work' || pOneInput === 'relationship' || pOneInput === 'family' || pOneInput === 'stress' || pOneInput === 'sleep' || pOneInput === 'medication') {
        return pOneInput;
    } else {
        console.log('Please choose a Cause from this list: School, Work, Relationship, Family, or Stress..');
    }
}

let player1 = new playerOne('Nathan', 100, 'Work');

class playerTwo {
    constructor(name, fLevel, help) {
        this.name = name;
        this.fLevel = fLevel;
        this.help = help;
    }
    playerTwoChoice() {
        let pTwoInput = prompt("C'mon let's help!? But keep in mind this is real life. Choose an option: Food, Exercise, Therapy, Friendship, Trigger, Discourage.")
    
        if (pTwoInput === 'food' || pTwoInput === 'exercise' || pTwoInput === 'therapy' || pTwoInput === 'friendship' || pTwoInput === 'trigger' || pTwoInput === 'discourage') {
            return pTwoInput.toLowerCase();
        } else {
            console.log('Please choose an option from this list! Choose wisely...: Food, Exercise, Therapy, Friendship, Trigger, Discourage');
        }
    }
}

let player2 = new playerTwo('Wayne', 10, 'Exercise');

setTimeout(() => {
    let startMessage = window.confirm("Need a Helping Hand? Let's do this together!");
    if (startMessage) {
      
    }
}, '1000');

  const weighPlayerOneFree = () => {
    if (playerOneFree(pOneInput) === 'school') {
        player1.dpLevel = player1.dpLevel - 3;
        alert("Ahhh man! School can be tough sometimes.");
    } else if (playerOneFree(pOneInput) === 'work') {
        player1.dpLevel = player1.dpLevel - 5;
        alert("Works sucks! Why work for the man when we can work for ourself? Money..");
    } else if (playerOneFree(pOneInput) === 'relationship') {
        player1.dpLevel = player1.dpLevel - 7;
        alert("I cannot keep a relationship! They just are not for me!!");
    } else if (playerOneFree(pOneInput) === 'family') {
        player1.dpLevel = player1.dpLevel - 9;
        alert("Love my family.. But they are stressing me out!!");
    } else if (playerOneFree(pOneInput) === 'stress') {
        player1.dpLevel = player1.dpLevel - 10;
        alert("Hello darkness my old friend.. Why the heck am I depressed again??..");
    } else if (playerOneFree(pOneInput) === 'sleep') {
        player1.dpLevel = player1.dpLevel + 5;
        alert("Maybe a little sleep will help clear my mind.");
    } else if (playerOneFree(pOneInput) === 'medication') {
        player1.dpLevel = player1.dpLevel + 10;
        alert("I cannot do this alone.. This medication will help ease my mind!")
    }
}

  const weighPlayerOneNoOption = () => {
    if (playerOneNoChoice('school')) {
        player1.dpLevel = player1.dpLevel - 3;
        alert("Ahhh man! School can be tough sometimes.");
    } else if (playerOneNoChoice('work')) {
        player1.dpLevel = player1.dpLevel - 5;
        alert("Works sucks! Why work for the man when we can work for ourself? Money..");
    } else if (playerOneNoChoice('relationship')) {
        player1.dpLevel = player1.dpLevel - 7;
        alert("I cannot keep a relationship! They just are not for me!!");
    } else if (playerOneNoChoice('family')) {
        player1.dpLevel = player1.dpLevel - 9;
        alert("Love my family.. But they are stressing me out!!");
    } else if (playerOneNoChoice('stress')) {
        player1.dpLevel = player1.dpLevel - 10;
        alert("Hello darkness my old friend.. Why the heck am I depressed again??..");
    } else if (playerOneNoChoice('sleep')) {
        player1.dpLevel = player1.dpLevel + 5;
        alert("Maybe a little sleep will help clear my mind.");
    } else if (playerOneNoChoice('medication')) {
        player1.dpLevel = player1.dpLevel + 10;
        alert("I cannot do this alone.. This medication will help ease my mind!")
    }
  }

  const weighPlayerTwoOption = () => {
    if (playerTwoChoice(pTwoInput) === 'food') {
        player1.dpLevel = player1.dpLevel + 3;
    } else if (playerTwoChoice(pTwoInput) === 'exercise') {
        player1.dpLevel = player1.dpLevel + 5;
    } else if (playerTwoChoice(pTwoInput) === 'friendship') {
        player1.dpLevel = player1.dpLevel + 7;
    } else if (playerTwoChoice(pTwoInput) === 'therapy') {
        player1.dpLevel = player1.dpLevel +10;
    } else if (playerTwoChoice(pTwoInput) === 'discourage') {
        player1.dpLevel = player1.dpLevel - 5;
    } else if (playerTwoChoice(pTwoInput) === 'trigger') {
        player1.dpLevel = player1.dpLevel - 10;
    }
}

function noChoiceRds() {
    while (player1.dpLevel >= 100) {
        playerOneNoChoice();
        weighPlayerOneNoOption();
        player2.playerTwoChoice();
        weighPlayerTwoOption();
        
        if (player1.dpLevel <= 70) {
            alert(`${player1.name} you are starting to take control of this! Keep pushing and will be able to control your choices!`);
        } else if (player1.dpLevel <= 50) {
            alert(`${player1.name}, congrats! You are really taking control of this!`);
            let makeOwnDecision = prompt(`${player1.name}, are you ready to make your own decisions? Yes or No`);
            makeOwnDecision = makeOwnDecision.toLowerCase;
             if (makeOwnDecision === 'yes') {
                makeChoiceRds();
             }
        } else {
            alert("Nothing to see here..");
        }
    }
}

function makeChoiceRds() {
    while (player1.dpLevel <= 50) {
        player1.playerTwoChoice();
        weighPlayerOneNoOption();
        player2.playerTwoChoice();
        weighPlayerTwoOption();
        
        if (player1.dpLevel <= 50) {
            alert(`${player1.name} you are finally getting this under control!`);
        } else if (player1.dpLevel <= 50) {
            alert(`${player1.name}, congrats! You are really taking control of this!`);
            let makeOwnDecision = prompt(`${player1.name}, are you ready to make your own decisions? Yes or No`);
            makeOwnDecision = makeOwnDecision.toLowerCase;
             if (makeOwnDecision === 'yes') {
                
             }
        } else {
            break;
        }
    }
}