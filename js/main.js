let total = 0

const xInput = document.querySelector('#pumpkin')

const yInput = document.querySelector('#dominosPizza')

const result = document.querySelector('#placeToPutResult')

document.querySelector('#zebra'). addEventListener ('click', sum)

document.querySelector('#cantThinkOfAnything'). addEventListener ('click', minus)

document.querySelector('#cloud'). addEventListener ('click', quotient)

document.querySelector('#moon'). addEventListener ('click', multi)



function sum(x, y) {
  x = Number(xInput.value)
  y = Number(yInput.value)
  result.innerText = x + y  
}

function minus(x, y) {
  x = Number(xInput.value)
  y = Number(yInput.value)
  result.innerText = x - y
}

function quotient(x, y) {
  x = Number(xInput.value)
  y = Number(yInput.value)
  result.innerText = x / y 
}

function multi(x, y) {
  x = Number(xInput.value)
  y = Number(yInput.value)
  result.innerText = x * y 
}