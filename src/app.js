// Progression 1: Create special addition
function specialAdditionTwo(numberOne, numberTwo) {
  return numberOne < 0 || numberTwo < 0
    ? 'Negative numbers are not allowed'
    : numberOne + numberTwo;
}
// function specialAddition(){}
function specialAddition(numberOne, numberTwo) {
  return numberOne < 0 || numberTwo < 0
    ? 'Negative numbers are not allowed'
    : numberOne - numberTwo;
}
// Progression 2: Create simple division
function simpleDivision(numberOne, numberTwo) {
  return numberTwo > numberOne
    ? 'Cannot divide a smaller number by a larger number'
    : numberTwo < 0 || numberOne < 0
    ? 'Negative numbers are not allowed'
    : numberTwo === 0
    ? 'Not a number'
    : numberOne / numberTwo;
}
// Progression 3: Create the special calculator
function specialCalculator(numberOne, numberTwo, operation) {
  return operation(numberOne, numberTwo);
}
