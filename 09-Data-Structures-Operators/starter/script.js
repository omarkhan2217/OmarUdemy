'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = [`Mon`, `Tue`, `Wed`, `thu`, `fri`, `sat`, `sun`];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = `20:00`, address }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delecious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

// //////////////////////////
// // CODING CHALLENGE #3:-//
// //////////////////////////

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector(`button`).addEventListener(`click`, function () {
//   const text = document.querySelector(`textarea`).value;
//   console.log(text);
//   const rows = text.split(`\n`);
//   console.log(rows);

//   for (const row of rows) {
//     const [first, second] = row.toLocaleLowerCase().trim().split(`_`);

//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(output);
//   }
// });

// ///////////////////////////////////////////////
// // LESSON 122 = WORKING WITH STRINGS PART-3:-//
// ///////////////////////////////////////////////

// // Split and join
// console.log(`a+very+nice+string`.split(`+`));
// console.log(`Jonas Schemtnast`.split(` `));

// const [firstName, lastName] = `Jonas Schemtnast`.split(` `);

// const newName = [`Mr.`, firstName, lastName.toUpperCase()].join(` `);
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(` `);
//   const namesUpper = [];

//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }

//   console.log(namesUpper.join(` `));
// };

// capitalizeName(`jessica ann smith davis`);
// capitalizeName(`omar ahwuha`);

// // Padding
// const message = `Go to gate 23!`;
// console.log(message.padStart(25, `+`).padEnd(36, `+`));
// console.log(`WWWWWWWWWWWWWWW`.padStart(25, `+`));

// const maskCreditCard = function (number) {
//   const str = number + ``;
//   const last = str.slice(-4);
//   return last.padStart(str.length, `*`);
// };

// console.log(maskCreditCard(2414512551255125));
// console.log(maskCreditCard(`51255125515`));

// // Repeat
// const message2 = `Bad Weather... all depatrures delayed...
// `;
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${`✈ `.repeat(n)}`);
// };

// planesInLine(5);
// planesInLine(3);
// planesInLine(12);

// ///////////////////////////////////////////////
// // LESSON 121 = WORKING WITH STRINGS PART-2:-//
// ///////////////////////////////////////////////

// const airline = 'TAP Air Portugal';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// // Fix capitalization in name
// const passenger = `jOnAS`; // Jonas
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);

// console.log(passengerCorrect);

// // check email
// const email = `hello@jonas.io`;
// const loginEmail = '   Hello@Jonas.Io \n';

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();
// // console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// // replacing
// const priceGB = `2882,97₹`;
// const priceUS = priceGB.replace(`₹`, `$`).replace(`,`, `.`);
// console.log(priceUS);

// const announcement = `All passenger come to boarding door 23, boarding door 23`;

// console.log(announcement.replace(`door`, `gate`));

// // REGULAR EXPRESSION
// console.log(announcement.replace(/door/g, `gate`));

// // BOOLEANS
// const plane = `Airbus A320neo`;
// console.log(plane.includes(`A320`));
// console.log(plane.includes(`Boeing`));
// console.log(plane.startsWith(`Air`));

// if (plane.startsWith(`Airbus`) && plane.endsWith(`neo`)) {
//   console.log(`${plane} is part of new airbus family`);
// }

// // example
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes(`knife`) || baggage.includes(`gun`)) {
//     console.log(`you are not allowed on board`);
//   } else {
//     console.log(`welcome aboard`);
//   }
// };
// checkBaggage(`I have a laptop, some Food and a Pocket Knife`);
// checkBaggage(`sock and camera`);
// checkBaggage(`Got some snacks and a gun for protection`);

// ///////////////////////////////////////////////
// // LESSON 120 = WORKING WITH STRINGS PART-1:-//
// ///////////////////////////////////////////////
// const airline = `TAP air portugal`;
// const plane = `A320`;

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log(`B737`[0]);

// console.log(airline.length);
// console.log(`B737`.length);

// console.log(airline.indexOf(`r`));
// console.log(airline.lastIndexOf(`r`));
// console.log(airline.indexOf(`portugal`));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 15));

// console.log(airline.slice(0, airline.indexOf(` `)));
// console.log(airline.slice(airline.lastIndexOf(` `) + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seat
//   const s = seat.slice(-1);
//   if (s === `B` || s === `E`) {
//     console.log(`Middle seat noob`);
//   } else {
//     console.log(`you got lucky`);
//   }
// };

// checkMiddleSeat(`11B`);
// checkMiddleSeat(`23C`);
// checkMiddleSeat(`3E`);

// console.log(new String('jonas'));
// console.log(typeof new String('jonas'));
// console.log(typeof new String('jonas').slice[1]);

// //////////////////////////////////
// // LESSON 117 = MAPS ITERATION:-//
// //////////////////////////////////

// const question = new Map([
//   [`question`, `what is the best programming launguage in the world?`],
//   [1, `C`],
//   [2, `Java`],
//   [3, `JavaScript`],
//   [`correct`, 3],
//   [true, `Correct :D`],
//   [false, `noob`],
// ]);

// console.log(question);

// // convert object to map
// console.log(Object.entries(openingHours));
// const hourMap = new Map(Object.entries(openingHours));
// console.log(hourMap);

// // Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === `number`) console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt(`your anser`));
// console.log(answer);

// console.log(question.get(question.get(`correct`) === answer));

// // convert map to array
// console.log([...question]);
// console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);

// /////////////////////////////////////
// // LESSON 116 = MAPS FUNDAMENTALS:-//
// /////////////////////////////////////

// const rest = new Map();
// rest.set(`name`, `Classico Italiano`);
// rest.set(1, `Firenze, Italy`);
// console.log(rest.set(2, `Lisbon, Portugal`));

// rest
//   .set(`categories`, ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set(`open`, 11)
//   .set(`close`, 23)
//   .set(true, `We are open :D`)
//   .set(false, `We are closed D:`);

// console.log(rest.get(`name`));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get(`open`) && time < rest.get(`close`)));

// console.log(rest.has(`categories`));
// rest.delete(2);
// // rest.clear();

// const arr = [1, 2];
// rest.set(arr, `Test`);
// rest.set(document.querySelector(`h1`), `Heading`);
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

// ////////////////////////
// // LESSON 115 = SETS:-//
// ////////////////////////

// const ordersSet = new Set([
//   `pasta`,
//   `pizza`,
//   `pizza`,
//   `rissota`,
//   `pasta`,
//   `pizza`,
// ]);

// console.log(ordersSet);

// console.log(new Set(`jaeger`));

// ordersSet.delete(`rissota`);
// // ordersSet.clear();
// console.log(ordersSet.size);
// console.log(ordersSet.has(`pizza`));
// console.log(ordersSet.has(`bread`));
// console.log(ordersSet.add(`Garlic Bread`));
// console.log(ordersSet.add(`Garlic Bread`));
// console.log(ordersSet);

// for (const order of ordersSet) {
//   console.log(order);
// }

// // Example

// const staff = [`waiter`, `chef`, `waiter`, `manager`, `chef`, `waiter`];

// const staffUnique = [...new Set(staff)];

// console.log(staffUnique);
// console.log(
//   new Set([`waiter`, `chef`, `waiter`, `manager`, `chef`, `waiter`]).size
// );

// console.log(new Set(`jonas`).size);

// /////////////////////////////////
// LESSON 113 = LOOPING OBJECTS:-//
// /////////////////////////////////

// // Property names
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `we are open on ${properties.length} days: `;

// for (const day of Object.keys(openingHours)) {
//   openStr += `${day}, `;
// }

// console.log(openStr);

// // Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// // Entrie object
// const entries = Object.entries(openingHours);
// // console.log(entries);

// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }

// //////////////////////////
// // CODING CHALLENGE #2:-//
// // ///////////////////////

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // // task 1:-
// // let goal = 1;
// // for (const players of game.scored) {
// //   // console.log(game.scored.length);
// //   console.log(`Goal ${goal++} ${players}`);
// // }

// // // task 2:-
// // const odds = Object.values(game.odds);
// // let average = 0;

// // for (const odd of odds) {
// //   average += odd;
// //   average /= odds.length;
// // }
// // console.log(average);

// // // task 3:-
// // console.log(`odd of victory ${game.team1}: ${game.odds.team1}`);
// // console.log(`odd of victory draw: ${game.odds.x}`);
// // console.log(`odd of victory ${game.team2}: ${game.odds.team2}`);

// ///////////////////////////////////
// LESSON 112 = OPTIONAL CHAINING:-//
// ///////////////////////////////////

// if (restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }

// // WITHOUT OPTIONAL CHAINING
// // console.log(restaurant.openingHours.mon.open);

// // WITH OPTIONAL CHAINING
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// // EXAMPLE
// const days = [`Mon`, `Tue`, `Wed`, `thu`, `fri`, `sat`, `sun`];
// for (const day of days) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? `closed`;
//   console.log(`on ${day} we open at ${open}`);
// }

// // METHODS
// console.log(restaurant.order?.(0, 1) ?? `METHOD DOSENT EXIST`);

// // ARRAYS
// // const users = [{ name: `jonas`, email: `heahe` }];
// const users = [];

// console.log(users[0]?.name ?? `user array empty`);

// if (users.length > 0) console.log(users[0].name);
// else console.log(`user array empty`);

// //////////////////////////////////////////////////////
// // LESSON 110 = LOOPING ARRAYS: THE FOR OF LOOP #1:-//
// /////////////////////////////////////////////////////

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// ///////////////////////////////////////////////////
// // LESSON 108 = THE NULLISH COALESCING OPERATOR:-//
// ///////////////////////////////////////////////////

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // nullish values = null and undefined
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

// ////////////////////////////////////////////////
// // LESSON 107 = SHORT CIRCUITING (&& AND ||):-//
// ///////////////////////////////////////////////

// console.log(`----------OR---------`);
// // use ANY date type and return any data type and short circuit evaluation
// console.log(2 || `Jonas`);
// console.log(`` || `Jonas`);
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || `` || `Hello` || 23 || null);

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log(`-------------AND-----------`);
// console.log(0 && `jonas`);
// console.log(7 && `Jonas`);

// console.log(`Hello` && 23 && null && `jonas`);

// if (restaurant.orderPizza) {
//   restaurant.orderPizza(`Mushroo`, `SPinah`);
// }

// restaurant.orderPizza && restaurant.orderPizza(`Mushroo`, `SPin`);

// /////////////////////////////////////////////
// // LESSON 106 = REST PATTERNS AND PARRAMS:-//
// /////////////////////////////////////////////

// // 1) destructuring
// const arr = [1, 2, ...[3, 4]];

// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// // objects
// const { sat, ...weekdats } = restaurant.openingHours;
// console.log(weekdats);

// // 2) functions

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(5, 5, 2, 1, 2, 1, 5, 1);

// const x = [23, 5, 7];
// add(...x);

//////////////////////////////////////////
// // LESSON 105 = THE SPREAD OPERATOR:-//
//////////////////////////////////////////

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, `Gnocci`];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // join 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// // Iterables: arrays, strings, maps, sets, Not objects
// const str = `jonas`;
// const letters = [...str, ``, `S.`];
// console.log(letters);
// console.log(...str);
// // console.log(`${...str} Schmedtmann`);

// // real world exaples
// const ingredients = [
//   prompt(`Let's make pasta!, Ingredient 1?`),
//   prompt(`Ingredient 2?`),
//   prompt(`Ingredient 3?`),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// // objects

// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: `Guiseppe` };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = `reisttoroa`;
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

////////////////////////////////////////////
// // LESSON 104 = DESTRUCTURING OBJECTS:-//
////////////////////////////////////////////

// restaurant.orderDelivery({
//   time: `22:30`,
//   address: `via del sole, 21`,
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: `via del`,
//   starterIndex: 1,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Default Values
// const { menu = [], starterMenu: starters = [] } = restaurant;

// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// // nested objects

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// // LESSON 104 = DESTRUCTURING ARRAYS
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // switching variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // recieve 2 values from function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Nested destructuring
// const nested = [2, 4, [5, 6]];

// // const [i, , j] = nested;
// // console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9]; // anythign that doesnt have a value set changes to "1"
// console.log(p, q, r);
