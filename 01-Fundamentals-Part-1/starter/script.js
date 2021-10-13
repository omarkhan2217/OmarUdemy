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

// An Operator Allows us to transform multiple values or combine
// multiple values and do all kind of work with values

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
