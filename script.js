const myArray = [3434, 56, 2];
let sum = 0;
for (let i = 0; i < myArray.length - 1; i++) {
  sum += myArray[i];
}
console.log(`The sum is ${sum}`);

const ingredients = [
  "eggs",
  "milk",
  "cheese",
  "garlic",
  "onion",
  "kale",
  "salt",
  "pepper",
];

ingredients.pop();

let removedElement = ingredients.pop();

ingredients.push("chili flakes");

let prices = [4.99, 3, 98, 54.99];
let total = 0;
total = prices.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue;
});

let prices = [4.99, 3, 98, 54.99];
let total = prices.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  0
);

const animalNames = [
  "aardvark",
  "alligator",
  "alpaca",
  "bear",
  "beaver",
  "cat",
  "dog",
  "elephant",
];
const animalsStartingWithA = animalNames.filter((animal) =>
  animal.startsWith("a")
);

const leaguePlayers = ["top", "jungle", "mid", "adc", "support"];
const noSkillRoles = leaguePlayers.filter((player) => player.startsWith("s"));
