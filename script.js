const displayTop = document.getElementById('display-top')
const displayBot = document.getElementById('display-bot')
const numbers = Array.from(document.getElementsByClassName('number'))
const operators = Array.from(document.getElementsByClassName('operator'))
const clear = document.getElementById('clear')
const equals = document.getElementById('equals')
const dot = document.getElementById('dot')
let n1;
let n2;
let op;

numbers.forEach(n => {
  n.addEventListener('click', () => {
    if (op === undefined) {
      displayBot.textContent += n.textContent
      n1 = displayBot.textContent
    } else{
      displayBot.textContent += n.textContent
      n2 = displayBot.textContent
    }
  })
});

operators.forEach( o => {
  o.addEventListener('click', () => {
    if (n1 !== undefined && op === undefined) {
      displayTop.textContent = n1 +  o.textContent
      op = o.textContent
      displayBot.textContent = ''
    }
  })
})

clear.addEventListener('click', () => { 
  n1 = n2 = op = undefined
  displayTop.textContent = ''
})

equals.addEventListener('click', () => {
  let res;
  if (n1 !== undefined && n2 !== undefined && op !== undefined) {
    res = operate(Number(n1), op, Number(n2));
    if (typeof res === "number") {
      displayBot.textContent = '';
      displayTop.textContent = res;
      n1 = res;
      n2 = op = undefined;
    } else {
      displayBot.textContent = '';
      displayTop.textContent = res;
      n1 = n2 = op = undefined;
    }
  }
});

dot.addEventListener('click', () => {
  if (displayBot.textContent !== '' && !displayBot.textContent.includes('.')){
    displayBot.textContent += '.'
  }
})

const add = (a, b) => a+b
const subtract = (a, b) => a-b
const multiply = (a, b) => a*b
const divide = (a, b) => b != 0 ? a/b : 'You cant divide by 0'

const operate = (n1, operator, n2) => {
  switch (operator) {
    case "+":
      return add(n1, n2)
    case "-":
      return subtract(n1, n2)
    case "*":
      return multiply(n1, n2)
    case "/":
      return divide(n1, n2)
  }
}