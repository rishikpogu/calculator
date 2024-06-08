function add (num1, num2) {
    return num1 + num2;
}

function subtract (num1, num2) {
    return num1 - num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    if (num2 === 0) return "ERROR";
    return num1 / num2;
}

let num1 = ''
let num2 = ''
let operator = null
let result = null

function operate (operator, num1, num2) {
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)

    if (operator == '+') {
        return add(num1, num2)
    }
    else if (operator == '-') {
        return subtract(num1, num2)
    }
    else if (operator == '*') {
        return multiply(num1, num2)
    }
    else if (operator == '/') {
        return divide(num1, num2)
    }
    else return null
}

const lowerDisplay = document.querySelector('#lower');
const upperDisplay = document.querySelector('#upper')
const numbers = document.querySelectorAll('.digit')
const operators = document.querySelectorAll('.operator');
const clearButton = document.querySelector('#ac');
const signButton = document.querySelector('#sign');
const percentButton = document.querySelector('#percent');
const equalsButton = document.querySelector('#equals');

clearButton.addEventListener('click', () => {
    lowerDisplay.textContent = ''
    upperDisplay.textContent = ''
    num1 = ''
    num2 = ''
    operator  = null
})

// function updateDisplay() {
//     upperDisplay.textContent = `${num1} ${operator}`
//     lowerDisplay.textContent = num2
// }

numbers.forEach(button => {
    button.addEventListener('click', () => {
        if (result !== null) {
            lowerDisplay.textContent = ''
            result = null
        }
        if (lowerDisplay.textContent.includes('.') && button.textContent === '.') return
        lowerDisplay.textContent += button.textContent
    })
})

operators.forEach(button => {
    button.addEventListener('click', () => {
        if (num1 !== '') {
            num2 = lowerDisplay.textContent
            if (num2 == '') {
                return
            }
            result = operate(operator, num1, num2)
            num1 = result
        }
        // else if (num1 !== '' && num2 == '') return
        else {
            num1 = lowerDisplay.textContent
        }
        operator = button.textContent
        lowerDisplay.textContent = ''
        if (num1 == '') return
        else upperDisplay.textContent = `${num1} ${operator}`
    })
})

equalsButton.addEventListener('click', () => {
    num2 = lowerDisplay.textContent
    result = operate(operator, num1, num2)
    if (result == null) return
    else {
        lowerDisplay.textContent = result
        upperDisplay.textContent = ''
        num1 = ''
        num2 = ''
        operator = null
        result = null
    }
})

signButton.addEventListener('click', () => {
    if (lowerDisplay.textContent) {
        lowerDisplay.textContent = String(-parseFloat(lowerDisplay.textContent))
    }
})

percentButton.addEventListener('click', () => {
    if (lowerDisplay.textContent) {
        lowerDisplay.textContent = String(parseFloat(lowerDisplay.textContent) / 100)
    }
})