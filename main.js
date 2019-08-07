//For the calculator we need to (1)listen for keypresses and
//(2) determine the type of key that is pressed
//we use an event delegation pattern to listen, since keys are all children of ".calculator__keys"
const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')

keys.addEventListener('click', e => {
	if (e.target.matches('button')) {
		//Do something
	}
})

//next, use "data-action" attribute to figure out type of key that is clicked
const key = e.target
const action = key.dataset.action 

//if key doesn't have "data-action" attribute, it must be a number key
//outputs number key to console
if (!action) {
	console.log('number key!')
}

//if key has a "data-action" attribute that's one of the math operations below
//then we know the key is an operator and we will output that to console
if (
	action === 'add' ||
	action === 'subtract' ||
	action === 'multiply' ||
	action === 'divide'
) {
	console.log('operator key!')
}

//these if statements follow the 
if (action === 'decimal') {
	console.log('decimal key!')
}

if (action === 'clear') {
	console.log('clear key!')
}

if (action === 'calculate') {
	console.log('equal key!')
}

//At this point there will be an output to console everytime a calc key is pressed
//thanks to the above

const display = document.querySelector('.calculator__display')

keys.addEventListener('click' e => {
	if (e.target.matches('button')) {
		const key = e.target
		const action = key.dataset.action
		const keyContent = key.textContent
		const displayedNum = display.textContent
	}
})

if (!action) {
	if (displayedNum === '0') {
		display.textContent = keyContent
	}
}

if (!action) {
  if (displayedNum === '0') {
    display.textContent = keyContent
  } else {
    display.textContent = displayedNum + keyContent
  }
}

if (action === 'decimal') {
  display.textContent = displayedNum + '.'
}

if (
  action === 'add' ||
  action === 'subtract' ||
  action === 'multiply' ||
  action === 'divide'
) {
  key.classList.add('is-depressed')
}

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    // ...
    
    // Remove .is-depressed class from all keys
    Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-depressed'))
  }
})

const calculator = document.querySelector('.calculator')
// ...

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    // ...
    
    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      key.classList.add('is-depressed')
      // Add custom attribute
      calculator.dataset.previousKeyType = 'operator'
    }
  }
})

const previousKeyType = calculator.dataset.previousKeyType

if (!action) {
  if (displayedNum === '0' || previousKeyType === 'operator') {
    display.textContent = keyContent
  } else {
    display.textContent = displayedNum + keyContent
  }
}

if (action === 'calculate') {
  const secondValue = displayedNum
  // ...
}

if (
  action === 'add' ||
  action === 'subtract' ||
  action === 'multiply' ||
  action === 'divide'
) {
  // ...
  calculator.dataset.firstValue = displayedNum
  calculator.dataset.operator = action
}

if (action === 'calculate') {
  const firstValue = calculator.dataset.firstValue
  const operator = calculator.dataset.operator
  const secondValue = displayedNum
  
  display.textContent = calculate(firstValue, operator, secondValue)
}

const calculate = (n1, operator, n2) => {
  // Perform calculation and return calculated value
}

const calculate = (n1, operator, n2) => {
  let result = ''
  
  if (operator === 'add') {
    result = n1 + n2
  } else if (operator === 'subtract') {
    result = n1 - n2
  } else if (operator === 'multiply') {
    result = n1 * n2
  } else if (operator === 'divide') {
    result = n1 / n2
  }
  
  return result
}

const calculate = (n1, operator, n2) => {
  let result = ''
  
  if (operator === 'add') {
    result = parseFloat(n1) + parseFloat(n2)
  } else if (operator === 'subtract') {
    result = parseFloat(n1) - parseFloat(n2)
  } else if (operator === 'multiply') {
    result = parseFloat(n1) * parseFloat(n2)
  } else if (operator === 'divide') {
    result = parseFloat(n1) / parseFloat(n2)
  }
  
  return result
}
