const rnd1 = Math.random(); //  0 .. 0.9999999
const value1 = Math.round(rnd1 * 10)  // 0 .. 9.99999
console.log(value1);

const rnd2 = Math.random(); //  0 .. 0.9999999
const value2 = Math.round(rnd2 * 10)  // 0 .. 9.99999
console.log(value2);

if (value1 > value2) {
  console.log('value 1 is bigger!');
} else if (value1 === value2) {
  console.log('value 1 is equal to value 2!');
} else {
  console.log('value 1 is less!');
}

