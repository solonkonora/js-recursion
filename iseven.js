function checkEven(num) {

  //base case
  if (num === 0) return true
  if (num === 1) return false

  //recursive case
  if (num < 0) return true
  return checkEven(num -2)
 }
console.log(checkEven(0))
console.log(checkEven(1))
console.log(checkEven(-3))

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
