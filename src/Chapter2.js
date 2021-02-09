let balloons = 100;
balloons *= 2
console.log(balloons)

let balloons2 = 100;
balloons2 /= 4
console.log(balloons2)

//string operations
let sillyString = "эЙ, кАК деЛа?"
let lowerString = sillyString.toLowerCase()
let firstCharacter = lowerString[0]
let firstCharacterUpper = firstCharacter.toUpperCase()
let restOfString = lowerString.slice(1)
let goodString = firstCharacterUpper + restOfString
console.log(goodString)

//age validator
let age = 11;
let accompanied = true;

if (accompanied === true || age >= 12) {
    console.log("Welcome")
} else {
    console.log("Prohibited")
}