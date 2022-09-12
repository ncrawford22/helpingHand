const playerOneOptions = ['school', 'work', 'relationship', 'family', 'stress', 'sleep', 'medication'];

const playerOneChoice = (pOneInput) => {
    pOneInput = pOneInput.toLowerCase();

    if (pOneInput === 'school' || pOneInput === 'work' || pOneInput === 'relationship' || pOneInput === 'family' || pOneInput === 'stress' || pOneInput === 'sleep' || pOneInput === 'medication') {
        return pOneInput;
    } else {
        console.log('Please choose a Cause from this list: School, Work, Relationship, Family, or Stress..');
    }
}

const playerTwoChoice = (pTwoInput) => {
    pTwoInput = pTwoInput.toLowerCase();

    if (pTwoInput === 'food' || pTwoInput === 'exercise' || pTwoInput === 'therapy' || pTwoInput === 'friendship' || pTwoInput === 'trigger' || pTwoInput === 'discourage') {
        return pTwoInput;
    } else {
        console.log('Please choose an option from this list: Food, Exercise, Therapy, Friendship, Trigger, Discourage');
    }
}

class playerOne {
    constructor(name, dpLevel, issue) {
        this.name = name;
        this.dpLevel = dpLevel;
        this.issue = issue;
    }
}

class playerTwo {
    constructor(name, fLevel, help) {
        this.name = name;
        this.fLevel = fLevel;
        this.help = help;
    }
}
