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
      btnAC = document.getElementById('ac');

/**********************************************************************/
/*                          Global variables                          */
/**********************************************************************/
const MULTIPLE_ERROR = "Only eval one set",
      ERROR = "Error";

let memory = [0, '', 0],
    operator = '',
    previousResult = 0,
    firstEMPTY = true,
    secondEMPTY = true,
    operEMPTY = true;

/**********************************************************************/
/*                            Main progrma                            */
/**********************************************************************/

btnNumbers.forEach(function(numBtn) {
   numBtn.addEventListener('click', () => {
      if(firstEMPTY) {
         updateDisplay(numBtn.textContent);
         memory[0] += numBtn.textContent;
      }
      else if(secondEMPTY){
         updateDisplay(numBtn.textContent);
         memory[2] += numBtn.textContent;
      }
      else {
         display.textContent = ERROR;
         clearMem();
      }
   })
})

btnOperators.forEach(function(oper) {
   oper.addEventListener('click', function() {
      if(operEMPTY) {
         firstEMPTY = false;
         updateDisplay(oper.textContent);
         memory[1] = oper.textContent;
         operEMPTY = false;
      }
      else {
         display.textContent = MULTIPLE_ERROR;
         clearMem();
      }
   });
});

btnAC.addEventListener('click', () => {
   display.textContent = '0';
   clearMem();
});

btnEquals.addEventListener('click', equal);

function equal(btnEquals) {
   secondEMPTY = false;
   display.textContent = '';
   previousResult = operate(memory[0], memory[1], memory[2]);
   memory = [previousResult, '', 0];
   secondEMPTY = true;
   operEMPTY = true;
   updateDisplay(previousResult);
}

function clearMem() {
   memory = [0, '', 0];
   firstEMPTY = true;
   secondEMPTY = true;
   operEMPTY = true;
   operFINISHED = true;
}

function updateDisplay(value) {
   if (display.textContent === "0" || display.textContent === MULTIPLE_ERROR || display.textContent === ERROR)
      display.textContent = "";
   display.textContent += value;
}

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