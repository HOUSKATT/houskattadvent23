// function minChargeTime(eventTime, recordDistance) {
//   return Math.ceil(recordDistance / eventTime)
// } WTF

function minChargeTime(eventTime, recordDistance) {
  let chargeTime = 1
  while (getDistance(chargeTime, eventTime) <= recordDistance) {
    chargeTime++
  }
  return chargeTime
}

function maxChargeTime(eventTime, recordDistance) {
  let chargeTime = eventTime - 1
  while (getDistance(chargeTime, eventTime) <= recordDistance) {
    chargeTime--
  }
  return chargeTime
}

function getDistance(chargeTime, eventTime) {
  return eventTime * chargeTime - Math.pow(chargeTime, 2)
}

function numWinning(eventTime, recordDistance) {
  let min = minChargeTime(eventTime, recordDistance)
  console.log(`min: ${min}`)
  let max = maxChargeTime(eventTime, recordDistance)
  console.log(`max: ${max}`)
  return max - min + 1
}

// Test example
// var numWinning1 = numWinning(7, 9)
// var numWinning2 = numWinning(15, 40)
// var numWinning3 = numWinning(30, 200)
// var answer = numWinning1 * numWinning2 * numWinning3

// console.log(numWinning1)
// console.log(numWinning2)
// console.log(numWinning3)
// console.log(answer)

// Answer 1
// var numWinning1 = numWinning(54, 302)
// var numWinning2 = numWinning(94, 1476)
// var numWinning3 = numWinning(65, 1029)
// var numWinning4 = numWinning(92, 1404)
// var answer = numWinning1 * numWinning2 * numWinning3 * numWinning4

// console.log(numWinning1)
// console.log(numWinning2)
// console.log(numWinning3)
// console.log(numWinning4)
// console.log(answer)

// Answer 2
var numWinning1 = numWinning(54946592, 302147610291404)
console.log(numWinning1)
