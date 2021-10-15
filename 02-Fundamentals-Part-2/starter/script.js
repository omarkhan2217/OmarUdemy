'use strict'



// LESSON 32 = ACTIVATING STRICT MODE:-

// let hasDriversLicense = false
// const passTest = true

// if (passTest) hasDriversLicense = true
// if (hasDriversLicense) console.log(`HAUEHUAWEH`)

// // const interface = 'Audio'
// // const private = 21



// LESSON 33 = FUNCTIONS:-

// function logger() {
//     console.log(`my name is aaaa`)
// }

// logger()


// function foodProcessor(apples, oranges) {
//     console.log(apples, oranges)
//     const juice = `Juice with ${apples} fresh apples and ${oranges} fresh oranges`
//     return juice
// }

// const appleJuice = foodProcessor(5, 0)
// console.log(appleJuice)

// const appleOrangeJuice = foodProcessor(2, 4)
// console.log(appleOrangeJuice)



// LESSON 34 = FUNCTION DECLARATIONS vs EXPRESSIONS:-

// // Function declaration
// function calcAge1 (birthYear) {
//     return 2037 - birthYear
// }

// const age1 = calcAge1(2006)

// //Function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear
// }

// const age2 = calcAge2(2006)

// console.log(age1, age2)



// LESSON 35 = ARROW FUNCTIONS:- too episode 10

// // // Function expression
// // const calcAge2 = function (birthYear) {
// //     return 2037 - birthYear
// // }

// // Arrow function 
// const calcAge3 = birthYear => 2037 - birthYear
// const age3 = calcAge3(2006)
// console.log(age3)

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear
//     const retirement = 65 - age
//     // return retirement
//     return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetirement(2006, `omar`))
// console.log(yearsUntilRetirement(1992, `notOmar`))



// LESSON 36 = FUNCTIONS CALLING OTHER FUNCTIONS:- 

// function cutFruitPieces(fruit) {
//     return fruit * 4
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples)
//     const orangePieces = cutFruitPieces(oranges)

//         const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of fresh orange`
//         return juice
// }

// console.log(fruitProcessor(2, 3))



// LESSON 37 = REVIEWING FUNCTIONS:- 

// const calcAge = function (birthYear) {
//     return 2037 - birthYear
// }


// const yearsUntilRetirement =  function (birthYear, firstName) {
//     const age = calcAge(birthYear)
//     const retirement = 65 - age
    
//     if (retirement > 0) {
//         console.log( `${firstName} retires in ${retirement} years`)
//         return retirement
//     } else {
//         console.log( `already retired`)
//         return -1
//     }

// }

// console.log(yearsUntilRetirement(2006, `omar`))
// console.log(yearsUntilRetirement(1970, `mike`))



// LESSON 38 = INTRODUCTION TO ARRAYS:- 

// const friend1 = `Michael`
// const friend2 = `Steven`
// const friend3 = `Peter`

// const friends = [`Michael`, `Steven`, `Peter`]
// console.log(friends)

// console.log(friends[0])
// console.log(friends[2])

// console.log(friends.length)
// console.log(friends[friends.length - 1])

// friends[2] = `Jay`
// console.log(friends)
// // friends = [`bob`, `alice`]

// const firstName = 'Jonas';
// const jonas = [firstName, `saea`, 2003 - 1229, `teacher`, friends]
// console.log(jonas)
// console.log(jonas.length)

// // Exercise 
// const calcAge = function (birthYear) {
//     return 2037 - birthYear
// }

// const years = [1990, 1935, 2020, 2001, 2002]

// const age1 = (calcAge(years[0]))
// const age2 = (calcAge(years[1]))
// const age3 = (calcAge(years[years.length - 1]))

// console.log(age1, age2, age3)

// const ages = [calcAge(years[0]), calcAge(years[1]), 
// calcAge(years[years.length - 1])]

// console.log(ages)



// LESSON 40 ARRAY METHODS:-

// const friends = [`Michael`, `Steven`, `Peter`]

// // Add elements
// const newLenght = friends.push(`Jake`)

// console.log(friends)
// console.log(newLenght)

// friends.unshift(`EREN JAEGER`)

// console.log(friends)

// // Remove Elements

// friends.pop() // removes LAST item from array
//  const popped = friends.pop() 

// console.log(friends)
// console.log(popped)

// friends.shift() // removes FIRST item from array
// console.log(friends)

// console.log(friends.indexOf(`Steven`))

// console.log(friends.indexOf(`ada`))

// friends.push(23)
// console.log(friends.includes(`EREN JAEGER`))
// console.log(friends.includes(23))

// if(friends.includes(`Steven`)) {
//     console.log(`U HAVE FIEDS?!?!?`)
// }



// LESSON 42 = INTRODUCTION TO OBJECTS:- 

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// }

// console.log(jonas)



// LESSON 43 = Dot vs BRACKET NOTATION:- 

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// }

// console.log(jonas)

// console.log(jonas.lastName)
// console.log(jonas[`lastName`])

// const nameKey = `Name`;

// console.log(jonas[`first${nameKey}`])
// console.log(jonas[`last${nameKey}`])

// // console.log(jonas.`last` + nameKey)

// const interestedIn = prompt(`What u want know about jonas SAY FRIST NAME OR LAST NAME, AGE OR JOB OR FRIENDS`)

// console.log(jonas[interestedIn])

// if(jonas[interestedIn]) {
//     console.log(jonas[interestedIn])
// } else {
//     console.log(`booba......`)
// }

// jonas.location = `Portugal`
// jonas[`twitter`] = `@jonasschmedtman`

// console.log(jonas)

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)



// LESSON 44 = OBJECT METHODS

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,

//     // calcAge: function(birthYear) {
//         // return 2037 - birthYear
//     // }

//     // calcAge: function() {
//     //     console.log(this)
//     //     return 2037 - this.birthYear
//     // }

//     calcAge: function() {
//         this.age = 2037 - this.birthYear
//         return this.age
//     },

//     getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, 
//     and he has ${this.hasDriversLicense ? `a` : `no`} driver's license`
//     }
// }

// console.log(jonas.calcAge())

// console.log(jonas.calcAge())
// console.log(jonas.calcAge())
// console.log(jonas.calcAge())
// // console.log(jonas['calcAge'](jonas.birthYear))

// console.log(jonas.getSummary())
































