//Exercise1:
const num1 = 36325
const num2 = 9824
const num3 = 777

function add(arg1,arg2) {
    return arg1 + arg2
};

let multiply = function(arg1, arg2) {
    return arg1*arg2
};

let result = add(multiply(num1,num2),num3);

console.log(result);

//Exercise 2:
let checkArraysSame = function (arg1, arg2) {
    if (arg1.length !== arg2.length) {
        return false
    } else  {
        for (let i = 0; i < arg1.length;) {
            if (arg1[i] === arg2[i]) {
                i++
            }
            else
                {return false}
        }
        return true
    }
}

let result1 = checkArraysSame([1,2,3],[4,5,6])
let result2 = checkArraysSame([1,2,3],[1,2,3])
let result3 = checkArraysSame([1,2,3],[1,2,3,4])

console.log(result1)
console.log(result2)
console.log(result3)

//Exercise 3:
const pickWord = function () {
    const words = [
        "banan",
        "sky",
        "fire",
        "hotdog",
        "dog",
        "programming",
    ];
    return words[Math.floor(Math.random() * words.length)];
};

const setupAnswerArray = function (word) {
    const answerArray = [];
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    return answerArray;
};

const showPlayerProgress = function (answerArray) {
    alert(answerArray.join(" "));
};

const getGuess = function () {
    return prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");
};

const updateGameState = function (guess, word, answerArray) {
    let howManyTimes = 0;
    for (let k = 0; k < word.length; k++) {
        if (word[k] === guess) {
            answerArray[k] = guess;
            howManyTimes++;
        }
    }

    return howManyTimes;
};

const showAnswerAndCongratulatePlayer = function (answerArray) {
    showPlayerProgress(answerArray);
    alert("Отлично! Было загадано слово " + answerArray.join(""));
};

const word = pickWord();

const answerArray = setupAnswerArray(word);
let remainingLetters = word.length;

while (remainingLetters > 0) {
    showPlayerProgress(answerArray);
    const guess = getGuess();
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Пожалуйста, введите одиночную букву.");
    } else {
        const correctGuesses = updateGameState(guess, word, answerArray);
        remainingLetters -= correctGuesses;
    }
}
showAnswerAndCongratulatePlayer(answerArray);
