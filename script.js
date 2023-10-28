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

/**********************************************************************/
/*                          Global variables                          */
/**********************************************************************/
let firstNumber = 0,
    secondNumber = 0,
    operator = '';

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