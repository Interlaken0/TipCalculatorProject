// using var (old way, avoid in real projects but showing here)
var mealInput = document.getElementById("meal"); // meal cost box
var tipInput = document.getElementById("tip"); // tip % box

// using let (modern, block scope)
let resultDisplay = document.getElementById("result");

// using const (fixed value once set)
const message = "Your total bill with tip is £";

// function runs when button clicked
function calculateTotal() {
  // get meal price and tip % from inputs
  let mealPrice = parseFloat(mealInput.value); // turn text into number
  let tipPercent = parseFloat(tipInput.value); // tip %

  // calculate tip amount
  let tipAmount = (mealPrice * tipPercent) / 100;

  // add tip to meal
  let total = mealPrice + tipAmount;

  // round to 2 decimals
  total = total.toFixed(2);

  // show result
  resultDisplay.innerText = `${message}${total}`; // template literal
}
