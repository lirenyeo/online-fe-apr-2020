// && -- AND
// || -- OR

let age = prompt('Please key in your age:')


if (age >= 0 && age < 7) {
  console.log("FREE")
} else if (age >= 7 && age <= 12) {
  console.log("Half price")
} else if (age > 12) {
  console.log('full price')
} else {
  console.log('INVALID AGE')
}

/**
 * Using Function:
 */

// function checkIsNumber(age) {
//   return true
// }

// let age = prompt('Please key in your age:')


// function displayPricing() {
//   if (age < 0 || !checkIsNumber(age)) {
//     console.log('invalid age')
//     return
//   }

//   if (age >= 0 && age < 7) {
//     console.log("FREE")
//   } else if (age >= 7 && age <= 12) {
//     console.log("Half price")
//   } else if (age > 12) {
//     console.log('full price')
//   }
// }

// displayPricing()