class Calculator {
  clear() {
    this.currentOpearand = ''
    this.previousOperand = ''
    this.operation = undefined
  }
  delete() {}
}

const numberButtons = document.querySelectorAll('[data-numer]')
const operationButtons = document.querySelectorAll('[data-operations]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')

const calculator = new Calculator(previousOperandandTextElement, currentOpearandandTextElement);

numberButtons.forEach(buttons => {
 button.addEventListener('click', () =>{
calculator.appendNumber(button.innerText)
})