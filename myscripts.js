<<<<<<< HEAD
<<<<<<< HEAD
let regularWordArray = ["elephant", "octopus", "parrot"];
let wordArray = [];
let blanksArray = [];
let testArray = [];
=======
// class HWord {
//     constructor(word, hint, encouragement) {
//         this.word = word;
//         this.hint = hint;
//         this.encouragement = encouragement;
//     }
// };
=======
>>>>>>> d471b6ea1f1c6d4c7440c61857de1811822c9498

let regularWordArray = ["elephant", "octopus", "parrot"];
let wordArray = [];
let blanksArray = [];
let testArray = blanksArray;
<<<<<<< HEAD
>>>>>>> d83d666261a9cb93e5fba1637a8320439e4c9494
=======

>>>>>>> d471b6ea1f1c6d4c7440c61857de1811822c9498
let turns = 6;

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
            console.log(blanksArray.join(' '));
        }
<<<<<<< HEAD
    }
<<<<<<< HEAD
=======

>>>>>>> d471b6ea1f1c6d4c7440c61857de1811822c9498
    if (blanksArray.join(' ').includes(guess)) {
        console.log("Great Guess!")
    } else {
        turns--;
        document.getElementById("turns-remaining").innerHTML = "Turns Remaining " + turns;
        if (turns === 0) {
            alert("Out of turns! U R Ded.")
        }
    }
<<<<<<< HEAD
};
=======
    if(blanksArray.join('').includes(guess)){
        console.log('Great Guess!')
    } else {
        turns--;
        document.getElementById('turns-remaining').innerHTML = 'Turns Remaining ' + turns;
        if (turns === 0){
            alert('Out of turns! U R Ded. ')
        }
    }
}

    // if(newArray === originalArray){
    //     turns--;
    //     document.getElementById('turns-remaining').innerHTML = "Turns Remaining " + turns;
    //     if(turns === 0){
    //         alert('Out of turns! U R Ded.')
    //     }
    // }




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

>>>>>>> d83d666261a9cb93e5fba1637a8320439e4c9494
=======
};
>>>>>>> d471b6ea1f1c6d4c7440c61857de1811822c9498
