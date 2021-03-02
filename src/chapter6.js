// Exercise 1:
let animals = ["cat", "fish", "lemur", "Comodian varan"];

for (let i = 0; i < animals.length; i++) {
    animals[i] += " perfect animal";
}

console.log(animals);

// Exercise 2:
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let randomString = "";

while (randomString.length <6) {
    randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
}

console.log(randomString);

// Exercise 3:
let input = "JavaScript is awesome";
let output = "";

for (let i = 0; i < input.length; i++) {
    if (input[i] === 'A' || input[i] === 'a') {
        output += 4;
    }
    else if (input[i] === 'e' || input[i] === 'E') {
        output += 3;
    }
    else if (input[i] === 'o' || input[i] === 'O') {
        input[i] = 0;
    }
    else if (input[i] === 'i' || input[i] === 'I') {
        output += 1;
    }
    else {
        output += input[i];
    }
}

console.log(input);
console.log(output);





