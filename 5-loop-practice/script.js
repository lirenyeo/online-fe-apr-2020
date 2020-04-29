// function multiplyByTen(num){
//   let total = num * 10

//   console.log(total) // Whatever num gets passed in * 10
// }

// let timesToRun = 20

// console.log('Loop Started')

// for(let i = 1; i <= timeToRun; i++){
//   // Inside of here is where your logic goes
//   multiplyByTen(i)
// }

// console.log('Loop Finished')


// let studentNames = ['Sally', 'Bernadette', 'Jeff', 'Josh']


// for(let i = 0; i < studentNames.length; i++){
//   // Loop through all the names in the array, if the array changes, so will the number of time the loop runs
//   console.log(`Hello ${studentNames[i]}, welcome to class!`)
// }

let count = 0 // 0, 1, 2 ,3 ,4 5 ,6

while(count < 10){ // Condition is dependent on true or false
  console.log(count)
  count++ // Increasing count by 1
}


// For loops are better for running a set number of times or for iterating through arrays
// While loops are better for runniing until a specific condition is met

// let word = 'bird'
// let guess = ''

// while(guess != word){
//   // Keep repeating until the guess == to the word
//   guess = window.prompt('Please make your guess for the word: ')
// }

// alert('Correct guess!')


// for(let i = 1; i > 0; i++){
//   console.log(i)
// }

// let myObj = {
//   first: 1,
//   second: 2,
//   third: 3,
//   fourth: 4,
//   fifth: 5
// }

// let studentGrades = {
//   tom: 'A',
//   sally: 'A*',
//   jeff: 'B'
// }

// for(name in studentGrades){
//   console.log(`${name}, has a grade of ${studentGrades[name]}`)
// }

// for(key in myObj){
//   console.log(key)
//   console.log(myObj[key])
// }

// let studentNames = ['Sally', 'Bernadette', 'Jeff', 'Josh']
// let capitalStudentNames = []

// // for(let i = 0; i < studentNames.length; i++){
// //   // 'Sally'[0] = 'S'
// //   if(studentNames[i][0] == 'B'){
// //     break;
// //   }
// //   console.log(studentNames[0])
// // }

// studentNames.forEach(function(studentName){
//   if(studentName[0] == 'J'){
//     console.log('Hey, you have the same first letter in your name as next founder')
//   } else {
//     console.log('Hello friend')
//   }
// })

// console.log(capitalStudentNames)