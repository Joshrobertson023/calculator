/**********************************************************************/
/*                                                                    */
/* Program name: Calculator                                           */
/* Date:         October 28, 2023                                     */
/* Author:       Josh Robertson                                       */
/*                                                                    */
/* This is a calculator. It has the basic operator buttons,           */
/* a decimal button, modulus, and a positive/negative button.         */
/*                                                                    */
/**********************************************************************/

/**********************************************************************/
/*                            DOM constants                           */
/**********************************************************************/
const btnEquals = document.getElementById('='),
      display = document.getElementById('display'),
      btnOperators = Array.from(document.querySelectorAll('.operator')),
      btnNumbers = Array.from(document.querySelectorAll('.num'));

/**********************************************************************/
/*                          Global variables                          */
/**********************************************************************/
let firstNumber = 0,
    secondNumber = 0,
    operator = '',
    result = 0,
    array = '',
    currentValue = 0;

/**********************************************************************/
/*                            Main progrma                            */
/**********************************************************************/
// When any number button is pressed, add to display and array
btnNumbers.forEach(function(num) {
   num.addEventListener('click', function() {
      display.textContent += num.textContent;
   })
})
// When the operator is pressed, add to display and array
// When the next number button is pressed, add to display and array
// If array gets another operator, operate on last expression
// If equals is pressed, operate on last expression

/**********************************************************************/
/*                      Basic operation functions                     */
/**********************************************************************/
function add(a, b) {
   return a + b;
}

function subtract(a, b) {
   return a - b;
}

function multiply(a, b) {
   return a * b;
}

function divide(a, b) {
   return a / b;
}

function modulus(a, b) {
   return a % b;
}

function negate(num) { // Need to place this function somewhere still
   return num * -1;
}

/**********************************************************************/
/*                           Operate function                         */
/**********************************************************************/
function operate(firstNumber, operator, secondNumber) {
   let result = 0;
   switch(operator) {
      case '+':
         result = add(firstNumber, secondNumber);
         break;
      case '-':
         result = subtract(firstNumber, secondNumber);
         break;
      case '*':
         result = multiply(firstNumber, secondNumber);
         break;
      case '/':
         result = divide(firstNumber, secondNumber);
         break;
      case '%':
         result = modulus(firstNumber, secondNumber);
         break;
   }
   return result;
}

function populateDisplay(value) {
   display.textContent = value;
}

function addToArray(value) {
   array += value;
}