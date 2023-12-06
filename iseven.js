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