/*• Zero is even.
• One is odd.
• For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description. The
function should accept a single parameter (a positive, whole number) and return
a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a
way to fix this?*/

function checkEven(num) {

  //base case
  if (num === 0) return true
  if (num === 1) return false

  //recursive case
  if (num < 0) return true
  return checkEven(num -2)
 }
console.log(checkEven(50))
console.log(checkEven(75))
console.log(checkEven(-1))

//2) power function
function power (base, exponent) {
  if (exponent === 0) {
    return 1
  }
  else {
    return base * power(base, exponent - 1)
  }
}
console.log(power(2, 4))
