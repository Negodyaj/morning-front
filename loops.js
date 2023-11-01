// for (let index = 0; index < 5; index++) {
//   console.log('day #' + (index + 1));
// }

// console.log('job is done!');

let a = 10;
a = a - 5;

const rnd1 = Math.random(); //  0 .. 0.9999999
let cardLimit = Math.round(rnd1 * 10000)  // 0 .. 10000
console.log(cardLimit);

// let moneySpent = 0;
// for (let index = 0; index < 10; index++) {
//   if (cardLimit >= 1000) {
//     moneySpent = moneySpent + 1000;
//     cardLimit -= 1000;
//   } else {
//     break;
//   }
// }

let moneySpent = 0;
//let iterationsCount = 0;
while (cardLimit >= 1000) {
  moneySpent = moneySpent + 1000;
  cardLimit -= 1000;
  //iterationsCount++;
}

console.log('moneySpent = ' + moneySpent);
console.log('cardLimit = ' + cardLimit);
//console.log('iterationsCount = ' + iterationsCount);

// index = 0
// index + 1 = 1
// day #1
// next iteration
// index = 1
// index + 1 = 2
// day #2
// next iteration
// index = 2
// index + 1 = 3
// day #3