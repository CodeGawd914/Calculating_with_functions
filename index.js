/*
There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Divison should be integer division, e.g eight(dividedBy(three()))/eight(divided_by(three)) should return 2, not 2.666666...

*/

// first we have to write functions to return that number when called on.
// also if it is passed a function it calls that function with the number.
function zero(numbers) {
  return numbers ? numbers(0):0
}
function one(numbers) {
  return numbers ? numbers(1):1
}
function two(numbers) {
  return numbers ? numbers(2):2
}
function three(numbers) {
  return numbers ? numbers(3):3
}
function four(numbers) {
  return numbers ? numbers(4):4
}
function five(numbers) {
  return numbers ? numbers(5):5
}
function six(numbers) {
  return numbers ? numbers(6):6
}
function seven(numbers) {
  return numbers ? numbers(7):7
}
function eight(numbers) {
  return numbers ? numbers(8):8
}
function nine(numbers) {
  return numbers ? numbers(9):9
}

function plus(y) { return function (x) {
  return x + y}
  }
function minus(y) { return function(x) {
  return x - y}
  }
function times(y) { return function(x) {
  return x * y}
  }
function dividedBy(y) { return function(x) {
  return y === 0 ? 'division by zero' : Math.floor(x / y)
  }
}
