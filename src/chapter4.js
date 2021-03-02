// Exercise 1:
let scores = {
        John : 0,
        Stas : 0,
        Trisha : 0
    };

scores.John += 1;
scores.Stas += 2;
scores.Trisha += 3;

console.log("John's result: " + scores.John)
console.log(scores)

// Exercise 2:
let myCrazyObject = {
    "name": "Strange object",
    "some array" : [7, 9, { purpose: "putanitsa", number: 123}, 3.3],
    "random animal" : "Bananas shark"
};

console.log(myCrazyObject["some array"][2].number);


