//Exercises:
let words = [
    "table",
    "laptop",
    "mouse",
    "Tea",
    "JavaScript"
];

let word = words[Math.floor(Math.random() * words.length)].toLowerCase();

let answerArray = [];
let remainingLetters = word.length;
let triesCount = 10;

for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

while (remainingLetters > 0 && triesCount > 0) {
    alert(answerArray.join(" "));
    let guess = prompt("Guess letter or close the game");
    if (guess === null && triesCount === 0) {
        break;
    } else if (guess.length !== 1) {
        alert("Please fill in one letter:");
    } else {
        triesCount--;
        guess = guess.toLowerCase();
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess && answerArray[j] === "_") {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}

if (triesCount > 0) {
    alert(answerArray.join(" "));
    alert("Good job. The world was: " + word);
} else {
    alert("Please try again!");
}
