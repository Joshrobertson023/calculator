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
      btnNumbers = Array.from(document.querySelectorAll('.num')),
      btnAC = document.getElementById('ac'),
      btnC = document.getElementById('c'),
      btnNegate = document.getElementById('n');

/**********************************************************************/
/*                          Global variables                          */
/**********************************************************************/
let firstNumber = 0,
    secondNumber = 0,
    result = 0,
    memory = '',
    currentValue = 0,
    operator = '';

/**********************************************************************/
/*                            Main progrma                            */
/**********************************************************************/
// When any number button is pressed, add to display and array
btnNumbers.forEach(function(num) {
   num.addEventListener('click', function() {
      display.textContent += num.textContent;
      memory += num.textContent;
   });
});
// When the operator is pressed, add to display and array
btnOperators.forEach(function(op) {
   op.addEventListener('click', function() {
      display.textContent += op.textContent;
      memory += '~' + op.textContent + '~';
   });
});

btnEquals.addEventListener('click', function() {
   let fields = memory.split('~');
   firstNumber = fields[0];
   operator = fields[1];
   secondNumber = fields[2];

   let result = operate(firstNumber, operator, secondNumber);
   display.textContent = result;
});

btnAC.addEventListener('click', function() {
   display.textContent = '0';
   memory = '';
});

btnC.addEventListener('click', function() {
   display.textContent = '0';
});

btnNegate.addEventListener('click', function() {
   // Add code to negate
});
// When the next number button is pressed, add to display and array
// If array gets another operator, operate on last expression
// If equals is pressed, operate on last expression

/**********************************************************************/
/*                           Operate function                         */
/**********************************************************************/
function operate(firstNumber, operator, secondNumber) {
   switch(operator) {
      case '+':
         return parseInt(firstNumber) + parseInt(secondNumber);
      case '-':
         return parseInt(firstNumber) - parseInt(secondNumber);
      case '*':
         return parseInt(firstNumber) * parseInt(secondNumber);
      case '/':
         return parseInt(firstNumber) / parseInt(secondNumber);
      case '%':
         return parseInt(firstNumber) % parseInt(secondNumber);
   }
}