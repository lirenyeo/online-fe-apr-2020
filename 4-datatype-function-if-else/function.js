let PI_VALUE = 3.147

// defining a function
function welcomeUser(userName, password) {
  PI_VALUE++
  console.log(PI_VALUE)

  if (userName == undefined) {
    console.log('Please login first...')
  } else {
    console.log(`Hello, Mr/Mrs ${userName}...`)
    if (password) {
      console.log('Your password is ' + password)
    }
    console.log('Welcome to my app!')
    console.log('You can press Q to exit')
  }
}


// invoke / call a function
welcomeUser('Johnny', '12345') // 'hello'
welcomeUser('Jane') // 'hello world'
welcomeUser('Peter', 'qweqwe123123') // 'hello world'




/**
 * Understanding Return
 * uncomment the code to run them
 */

// function sum(a, b) {
//   return 'hello world'
//   console.log('this will run')
//   return a + b
//   console.log('will this run?')
//   console.log('will this run????')
// }

// console.log(sum(1, 4))

// const result = sum(10, 99)
// console.log(result)
