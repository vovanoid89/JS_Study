//Generate teasers
let partsOfBody = ["mouth", "fingers", "eyes", "face", "foot"]
let uglyWords = ["big", "ugly", "small", "dirty", "fat"]
let partsOfBodyAnimals = ["ears", "ass", "muzzle", "tail"]
let uglyAnimals = ["snake", "rat", "pussycat", "monkey"]

let partOfBodyWord = partsOfBody[Math.floor(Math.random() * 5)]
let uglyWord = uglyWords[Math.floor(Math.random() * 5)]

let partAnimalWord = partsOfBodyAnimals[Math.floor(Math.random() * 4)]
let animalWord = uglyAnimals[Math.floor(Math.random() * 4)]
let teaser = "Your" + partOfBodyWord + "so" + uglyWord + "as" + partAnimalWord + "of" + animalWord
console.log(teaser)

// Generate teasers with "Join"
let teaserJoin = ["Your", partOfBodyWord, "so", uglyWord, "as", partAnimalWord, "of", animalWord]
console.log(teaserJoin.join(" "))

// Concat with "Join"
let num = [3, 2, 1, 0]
console.log(num.join(" more, than "))