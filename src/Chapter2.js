let balloons = 100;
balloons *= 2
console.log(balloons)

let balloons2 = 100;
balloons2 /= 4
console.log(balloons2)

//string operations
let str = "эЙ, кАК деЛа?"
console.log(str[0].toUpperCase() + str.slice(1).toLowerCase())

//age validator
const age = 11;
const accompanied = true;

if (accompanied === true || age >= 12) {
    console.log("Welcome")
} else {
    console.log("Prohibited")
}