// LESSON 10 = VALUES AND VARIABLES LECTURE:-

// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("jonas");
// console.log(23);

// let firstName = "new";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// //Variable Name Conventions
// let jonas_matilda = "jm";
// let $function = 27;

// let person = "jonas";
// let PI = 3.1415;

// let myFirstJob = "Coder";
// let myCurrentJob = "Teacher";

// let job1 = "programmer";
// let job2 = "teacher";

// console.log(myFirstJob);

// LESSON 12 = DATA TYPES LECTURE:-

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// // console.log(typeof true)
// console.log(typeof javascriptIsFun);
// // console.log(typeof 23);
// // console.log(typeof "jonas");

// javascriptIsFun = "YES!";
// console.log(javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);

// LESSON 13 = LET, CONST AND VAR LECTURE:-

// let age = 30;
// age = 31;

// const brithYear = 1991;
// // brithYear= 1990;
// // const job;

// var job = "programmer";
// job = "teacher"

// lastName = "no"
// console.log(lastName);

// LESSON 14 = BASIC OPERATORS LECTURE:-

// Mathemetical/Arethmatic Operators:-

// const now = 2037
// const ageJonas = now - 1991
// const ageSarah = now - 2018
// console.log(ageJonas, ageSarah) // add "," in console.log to add multiple values

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
// // 2 ** 3 = 2 to the power 3 = 2 x 2 x 2
// const firstName = "Omar"
// const lastName = "Khan"
// console.log(firstName + ' ' + lastName)

// // Assignment Operators:-

// let x = 10 + 5 // x = 15
// x += 10 // x = x + 10 = x = 25 we are reassiging "x" variable
// x *= 4 // x = x * 4 = 100
// x /= 2 // x = x / 2 = 7.5
// x++; // x = x + 1
// x-- // x = x - 1
// x--
// console.log(x)

// // Comparison Operators:-

// console.log(ageJonas > ageSarah)
// console.log(ageSarah >= 18)
// const isFullAge = ageSarah >= 18
// console.log(now - 1991 > now - 2018)

// LESSON 15 = OPERATOR PRECENDENCE:-

// const now = 2037
// const ageJonas = now - 1991
// const ageSarah = now - 2018

// console.log(now - 1991 > now - 2018)

// // console.log(25-10-5)

// let x, y // we can define two variables in a single line with using ","
// x = y = 25 - 10 - 5 // x = y = 10, x = 10
// console.log(x,y)

// const averageAge = (ageJonas + ageSarah) / 2// add "()" to exectue any code first
// console.log(averageAge)

// LESSON 17 = STRINGS AND TEMLEPATE LITERALS:-

// const firstName = 'Omar'
// const job = "Programmer"
// const birthYear = 2006
// const year = 2037

// // Using Normal way of typing (Hard to write)
// const omar = "I'm " + firstName + ', a ' + (year - birthYear)
//  + " year old " + job
// console.log(omar)

// // Using Tempelate Literals (Easy to write)
// const omarNew = `I'm ${firstName}, a ${year - birthYear}
// year old ${job}`
// console.log(omarNew)

// console.log(`Just a regular string...`)

// console.log(`String with
// multiple
// lines`)

// LESSON 18 = IF/ELSE STATEMENTS:-

// const age = 15

// if (age >= 18) {
//     console.log("Sarah can have a driving license 😁")
//     // window key + . for emoji selection
// } else {
//     const yearsLeft = 18 - age
//     console.log(`Sarah is too young. wait for ${yearsLeft} more years 😥 `)
// }

// const birthYear = 1991
// let century
// if(birthYear <= 2000) {
//     century = 20;
// }else {
//     century = 21;
// }
// console.log(century)

// LESSON 20 = TYPE CONVERSION AND COERCION:-

// // Type Conversion
// const inputYear = `1991`
// console.log(Number(inputYear), inputYear)
// console.log(Number(inputYear) + 18)

// console.log(Number(`Jonas`))

// console.log(String(23), 23)

// // Type Coercion
// console.log(`I am ` + 23 + ' years old')// turns 23 into "23"(string)
// console.log(`I am ` + `23` + ` years old`)// same as above

// console.log(`23` - `10` - 3)// turns strings into numbers
// console.log(`23` + `10` + 3)// turns numbers into strings
// console.log(`23` * `2`)
// console.log(`23` / `2`)
// console.log(`23` > `18`)

// let n = `1` + 1;
// n = n - 1
// console.log(n)

// LESSON 21 = TRUTHY AND FALSY VALUES:-

// // 5 Falsy values: 0, ``, undefined, null, NaN
// console.log(Boolean(0))
// console.log(Boolean(undefined))
// console.log(Boolean(`Jonas`))
// console.log(Boolean({}))
// console.log(Boolean(``))

// const money = 0;
// if(money) {
//     console.log(`Dont't Spend it all ;)`)
// }else {
//     console.log(`You should get a job!`)
// }

// let height = 0;
// if (height) {
//     console.log(`yay HE`)
// } else {
//     console.log(`no height 😥`)
// }

// LESSON 22 = EQUALITY OPERATORS:-
// const age = 18
// if (age === 18) console.log(`you just became an adult (strict)`)
// if (age == 18) console.log(`you just became an adult (loose)`)

// const favorite = Number(prompt(`whats ur faviore number?`))

// console.log(favorite)
// console.log(typeof favorite)

// if (favorite === 23) {
//   console.log(`Cool 23 1!`)
// } else if (favorite === 7) {
//   console.log(`7 is aNOT ACOLL HAHA`)
// } else if (favorite === 9) {
//   console.log(`No`)
// } else console.log(`ur number aint coll noob`)

// if (favorite !== 23) {
//   console.log(`rar`)
// }

// LESSON 24 LOGICAL OPERATORS:-

// const hasDriversLicense = true // A
// const hasGoodVision = true // B

// console.log(hasDriversLicense && hasGoodVision)
// console.log(hasDriversLicense || hasGoodVision)
// console.log(!hasDriversLicense)

// // if (hasDriversLicense && hasGoodVision) {
// //     console.log(`Sarah is able to drive`)
// // }else {
// //     console.log(`Someone else should drive...`)
// // }

// const isTired = false // C
// console.log(hasDriversLicense && hasGoodVision && isTired)

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log(`Sarah is able to drive`)
// }else {
//     console.log(`Someone else should drive...`)
// }

// LESSON 26 = THE SWITCH STATEMENT:-

// const day = `monday`

// switch(day) {
//     case `monday`: // day === `monday`
//         console.log(`Plan course structure`)
//         console.log(`Go to coding meetup`)
//         break
//     case `tuesday`:
//         console.log(`Prepare theory videos`)
//         break;
//     case `wednesday`:
//     case `thursday`:
//         console.log(`Write code examples`)
//         break;
//     case `friday`:
//         console.log(`Record videos`)
//         break;
//     case `saturday`:
//     case `sunday`:
//         console.log(`Enjoy the weekend`)
//         break;
//     default:
//         console.log(`not a valid day`)
// }

// if (day === `monday`) {
//     console.log(`Plan course structure`)
//     console.log(`Go to coding meetup`)
// } else if (day === `tuesday`) {
//     console.log(`Prepare theory videos`)
// } else if (day === `wednesday` || day === `thursday`) {
//     console.log(`Write code examples`)
// } else if (day === `friday`) {
//     console.log(`Record videos`)
// } else if (day === `saturday` || day === `sunday`){
//     console.log(`Enojy the weekend`)
// } else {
//     console.log(`not a valid day`)
// }

// LESSON 27 = STATEMETS AND EXPRESSIONS

// if (23 > 10) {
//     const str = `23 awheuahw`
// }

// console.log(`im a ${2300 - 1294} years old`)
// cant have an statements in a tempelate literal

// LESSON 28 = TERNARY OPERATORS:-

// const age = 23;
// age >= 18 ? console.log(`i like to drink wine ;)`)
// : console.log(`I WANNA DRINK WINE PLES`)

// const drink = age >= 18 ? `wine` : `waater`

// console.log(drink)

// let drink2
// if (age >= 18) {
//     drink2 = `wine`
// } else{
//     drink2 = `waater`
// }

// console.log(drink2)

// console.log(`i like to drink ${age >= 18 ? `wine` : `waater`}`)
