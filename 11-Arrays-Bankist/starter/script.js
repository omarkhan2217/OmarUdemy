'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = ``;

  movements.forEach(function (mov, i, arr) {
    const type = mov > 0 ? `deposit` : `withdrawal`;

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 3
    } ${type}</div>
      <div class="movements__value">₹${mov}</div>
    </div>`;
    containerMovements.insertAdjacentHTML(`afterbegin`, html);
  });
};

const updateUi = function (acc) {
  displayMovements(acc.movements);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `₹${incomes}`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `₹${out}`;

  const intrest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit = acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `₹${intrest}`;
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `₹${acc.balance}`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(` `)
      .map(name => name[0])
      .join(``);
  });
};

createUsernames(accounts);

// Event handler

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();
  console.log('LOGIn');

  currentAccount = accounts.find(
    acc => acc?.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // display ui adn welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = '100';

    // clear fields
    inputLoginUsername.value = inputLoginPin.value = '';

    updateUi(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recieverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    recieverAcc &&
    currentAccount.balance >= amount &&
    recieverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    recieverAcc.movements.push(amount);
    updateUi(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUi(currentAccount);
  }

  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    accounts.splice(index, 1);
    containerApp.style.opacity = '0';
  }
  inputCloseUsername.blur();
  inputCloseUsername.value = inputClosePin.value = '';
});

// add a and b

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// ////////////////////////////////////////
// // LESSON 141 = SIMPLE ARRAY METHODS:-//
// ////////////////////////////////////////

// let arr = [`a`, `b`, `c`, `d`, `e`];

// // SLICE dosent mutate arr
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log(...arr);

// // SPLICE does mutate arr
// // console.log(...arr.splice(2));
// arr.splice(-1);
// console.log(...arr);
// arr.splice(1, 2);
// console.log(...arr);

// // REVERSE mutates arry
// arr = [`a`, `b`, `c`, `d`, `e`];
// let arr2 = [`j`, `i`, `h`, `g`, `f`];
// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT dosent mutate arr
// const letters = arr.concat(arr2);
// console.log(letters);

// // JOIN
// console.log(letters.join(`-`));

// //////////////////////////////////////////
// // LESSON 142 = LOOPING ARRAYS:forEach:-//
// //////////////////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: you depoisted $${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: you withdrew $${Math.abs(movement)}`);
//   }
// }

// console.log(`---------------------------`);

// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: you depoisted $${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: you withdrew $${Math.abs(mov)}`);
//   }
// });

// //////////////////////////////////////////////
// // LESSON 143 = forEach WITH MAPS AND SETS:-//
// //////////////////////////////////////////////

// // MAP
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // SET
// const currenciesUnique = new Set([`USD`, `GBP`, `USD`, `EUR`, `EUR`]);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

// /////////////////////////////////////////
// // LESSON 145 = CREATING DOM ELEMENTS:-//
// /////////////////////////////////////////

// const displayMovements = function (movements) {
//   containerMovements.innerHTML = ``;

//   movements.forEach(function (mov, i, arr) {
//     const type = mov > 0 ? `deposit` : `withdrawal`;

//     const html = `
//     <div class="movements__row">
//       <div class="movements__type movements__type--${type}">${
//       i + 3
//     } ${type}</div>
//       <div class="movements__value">${mov}€</div>
//     </div>`;
//     containerMovements.insertAdjacentHTML(`afterbegin`, html);
//   });
// };
// displayMovements(account1.movements);

// //////////////////////////////////
// // LESSON 148 = THE MAP METHOD:-//
// //////////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// const movementsUSD = movements.map(mov => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);

// console.log(movementsUSDfor);

// /////////////////////////////////////
// // LESSON 150 = THE FILTER METHOD:-//
// /////////////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposits = movements.filter(mov => mov > 0);

// console.log(movements);
// console.log(deposits);

// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);

// const withdrawals = movements.filter(mov => mov < 0);

// console.log(withdrawals);

// /////////////////////////////////////
// // LESSON 151 = THE REDUCE METHOD:-//
// /////////////////////////////////////

// console.log(movements);

// // accumulator is like a snowball
// const balance = movements.reduce((acc, cur) => cur + acc, 0);

// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) {
//   balance2 += mov;
// }
// console.log(balance2);

// /////////////////////////////////////////////////
// // LESSON 153 = THE MAGIC OF CHAINING METHODS:-//
// /////////////////////////////////////////////////

// const eurToUsd = 1.1;

// // PIPELINE
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map((mov, i, arr) => {
//     console.log(arr);
//     return mov * eurToUsd;
//   })
//   // .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositsUSD);

// /////////////////////////////////
// // LESSON NEW = THE AT METHOD:-//
// /////////////////////////////////

// const arr = [23, 11, 64];

// console.log(arr[0]);
// console.log(arr.at(0));

// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1));
// console.log(arr.at(-1));

// console.log('jonas'.at(-1));

// ///////////////////////////////////
// // LESSON 157 = THE FIND METHOD:-//
// ///////////////////////////////////

// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');

// console.log(account);

/////////////////////////////////////////////
// LESSON 161 = THE SOME AND EVERY METHOD:-//
/////////////////////////////////////////////

// SOME
console.log(movements);
console.log(movements.includes(-130));

const anyDeposits = movements.some(mov => mov > 12);
console.log(anyDeposits);

// EVERY
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));
