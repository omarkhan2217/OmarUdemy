// //////////////////////////
// // CODING CHALLENGE #1:-//
// //////////////////////////

// function checkDogs(dogsJulia, dogsKate) {
//   const removeCatsJulia = dogsJulia.slice(1, -2);
//   const joinedArr = dogsKate.concat(removeCatsJulia);

//   joinedArr.forEach(function (age, i, arr) {
//     console.log(
//       `Dog number ${i + 1} is ${
//         age >= 3 ? `an Adult` : `a Puppy`
//       } and is ${mov} years old`
//     );
//   });
// }

// console.log(`============================================`);
// console.log(`DATA #1 `);
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// console.log(`============================================`);
// console.log(`DATA #2`);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
// console.log(`============================================`);

// //////////////////////////
// // CODING CHALLENGE #2:-//
// //////////////////////////

// function calcAverageHumanAge(ages) {
//   let humanAge = 0;
//   ages.map(age => {
//     if (age <= 2) {
//       humanAge = age * 2;
//     } else {
//       humanAge = 16 + age * 4;
//     }
//     console.log(humanAge);
//     return humanAge;
//   });
// }

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
