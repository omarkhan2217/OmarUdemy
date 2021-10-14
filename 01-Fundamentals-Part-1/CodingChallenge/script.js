// CODING CHALLENGE #1:-

// DATA 1:-
// const markWeight = 78
// const markHeight = 1.69

// const johnWeight = 92
// const johnHeight = 1.95

// const markBMI = markWeight / markHeight ** 2
// const johnBMI = johnWeight / johnHeight ** 2

// console.log("Mark's BMI = ",markBMI)
// console.log("John's BMI = ",johnBMI)

// const markHigherBMI = markBMI > johnBMI

// console.log("is Mark's BMI greater than John's? ", markHigherBMI)

// DATA 2:-
// const markWeight = 95
// const markHeight = 1.88

// const johnWeight = 85
// const johnHeight = 1.76

// const markBMI = markWeight / markHeight ** 2
// const johnBMI = johnWeight / johnHeight ** 2

// console.log("Mark's BMI = ",markBMI)
// console.log("John's BMI = ",johnBMI)

// const markHigherBMI = markBMI > johnBMI

// console.log("is Mark's BMI greater than John's? ", markHigherBMI)



// CODING CHALLENGE #2:-

// const markWeight = 78
// const markHeight = 1.69

// const johnWeight = 92
// const johnHeight = 1.95

// const markBMI = markWeight / markHeight ** 2
// const johnBMI = johnWeight / johnHeight ** 2

// console.log(`Mark's BMI = ${markBMI}`)
// console.log(`John's BMI = ${johnBMI}`)

// const markHigherBMI = markBMI > johnBMI

// if (markHigherBMI) {
//     console.log(`Mark's BMI (${markBMI}) is higher than John's by ${markBMI - johnBMI}`)
// } else {
//     console.log(`John's BMI(${johnBMI}) is higher than Mark's by ${johnBMI - markBMI}`)
// }



// CODING CHALLENGE #3:-

// dolphinRound1 = 91
// dolphinRound2 = 88
// dolphinRound3 = 119

// koalasRound1 = 88
// koalasRound2 = 91
// koalasRound3 = 110

// numberOfRounds = 3

// dolphinAverageMatch1 = (dolphinRound1 + dolphinRound2 + dolphinRound3) / numberOfRounds
// koalasAverageMatch1 = (koalasRound1 + koalasRound2 + koalasRound3) / numberOfRounds

// console.log(dolphinAverageMatch1, koalasAverageMatch1)

// if (dolphinAverageMatch1 > koalasAverageMatch1 && dolphinRound1 || dolphinRound2 || dolphinRound3 > 100) {
//     console.log(`Dolphins Have Higher Average`)
// } else if (dolphinAverageMatch1 < koalasAverageMatch1 && koalasRound1 || koalasRound2 || koalasRound3 > 100) {
//     console.log(`Koalas Have Higher Average`)
// } else if (dolphinAverageMatch1 == koalasAverageMatch1 && dolphinRound1 || dolphinRound2 || dolphinRound3 > 100 && koalasRound1 || koalasRound2 || koalasRound3 > 100) {
//     console.log(`Its a Tie!`)
// }



// CODING CHALLENGE #4:-

// const bill = 275
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2

// console.log(`the bill was $${bill} and the tip was $${tip} and total value $${bill + tip}`)