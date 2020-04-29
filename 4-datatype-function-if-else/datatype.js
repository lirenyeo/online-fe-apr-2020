let phone = 1234
const priceBeforeTax = 99 // number
const isAdult = true
const isCheap = false

const result1 = phone != 1235 // true
const result2 = phone == 1234 // true


// DO NOT DECLARE VARIABLES LIKE THIS:
var abc = 1234
efg = 3333 // global

// you can do math operations with Numbers
console.log(phone + priceBeforeTax) // 1333

// SIZE OF ARRAY                          7
// index number  0  1     2      3      4      5                6
//                                              0   1   2
const someArr = [1, 10, 'mary', phone, false, [0.1, 12, 33.4], 'hello']

console.log(someArr[2]) // mary
someArr[2] = 'michelle'
console.log(someArr[2]) // michele

console.log(someArr[5][2]) // 33.4
console.log(someArr[someArr.length - 1]) // hello (last element in array)


const person = {
  name: 'Borat',
  age: 40,
  gender: 'male',
  hasKids: true,
  kids: [
    'alex', // string
    'sophia', // string
  ],
  children: [
    { name: 'alex', gender: 'male' }, // object
    { name: 'sophia', gender: 'female' }, // object
  ],
}

console.log(person.age) // 40
person.age = person.age + 1 // same as ==> person.age++
console.log(person.age) // 41

console.log(person.name) // Borat
console.log(person.kids) // ['alex', 'sophia]
console.log(person.kids[0]) // alex
console.log(person.children[1]) // { name: 'sophia', gender: 'female' }
console.log(person.children[1].gender) // 'female'


const a = '12'
const b = '12'
console.log(a + b)

// String
const myName = 'john' // double quote
let myImage = 'https://www.some-link.com/abc.jpg' // single quote
let price = `RM1234` // backtick

const sentence = "I don't want to go"
const sentence2 = 'This shoes is ' + price + '!!'
const sentence3 = `This shoes is ${price}!!`
console.log(sentence2)
console.log(sentence3)

/**
 * variables defined by let can be reassigned
 * priceBeforeTax cannot be reassigned
 */
phone = 999
myImage = 'https://www.some-link.com/xxx.jpg'
// priceBeforeTax = 100 // NOT ALLOWED

/** Other ways of printing output, not recommended */
// print out in document
// document.write(phone)

// print out in alert box
// alert(phone)


/**
 * Afternoon Session
 */