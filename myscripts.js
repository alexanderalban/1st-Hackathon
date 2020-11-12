class HWord {
    constructor(word, hint, encouragement) {
        this.word = word;
        this.hint = hint;
        this.encouragement = encouragement;
    }
};

const elephant = new HWord("elephant", "long nose and big ears", "You can do it!");
const parrot = new HWord("parrot", "flies and can talk", "You've got this!");
const octopus = new HWord("octopus", "has eight legs and swims", "You can do the thing!");

// let wordArray = [elephant, parrot, octopus];
let regularWordArray = ["elephant", "octopus", "parrot"];
let wordArray = [];
let blanksArray = [];

let chooseWord = () => {
    return regularWordArray[Math.floor(Math.random() * regularWordArray.length)];
};

const createAnswerBlanks = () => {
    let answer = chooseWord();
    wordArray = answer.split('');
    console.log("wordArray is " + wordArray);
    console.log(blanksArray);
    for (let i = 0; i < answer.length; i++) {
        blanksArray[i] = "_";
    }
    document.getElementById("word-blank").innerHTML = blanksArray.join(' ');
    return blanksArray;
};
createAnswerBlanks();


const checkForWin = () => {
    let guess = document.getElementById("guess").value.toLowerCase();
    console.log(guess);
    for (i = 0; i < blanksArray.length; i++) {
        console.log(guess);
        if (wordArray[i] === guess) {
            blanksArray[i] = guess;
            document.getElementById("word-blank").innerHTML = blanksArray.join(' ');
        }
    }
}



// let alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Come back to this! Input method for h-man
// const alphaButtons = () => {
//     myButtons = document.getElementById('alphabet-section');
//     letters = document.createElement('ul');

//     for (let i = 0; i < alphabetArray.length; i++) {
//         letters.id = 'alphabet';
//         list = document.createElement('li');
//         list.id = 'letter';
//         list.innerHTML = alphabetArray[i];
//         //check letter against word
//         myButtons.appendChild(letters);
//         letters.appendChild(list);
//     }
// };

// alphaButtons();

