// find the lowest positive number in the array;

// inp: [2, -4, 6, 9, 7, -1, 4]
// output: 2

// inp : [4, 5, 6, 7, -3, 1, 3];
// returns 1

// filter, map, find, forEach, for(),

const arr = [2, -4, 6, 9, 7, -1, 4]

// Filter out negative numbers
// const positiveNumbers = arr.filter(num => num > 0);

// positiveNumbers.filter((a, b) => a - b);

// const lowestPositiveNumber = positiveNumbers.filter((num, index) => num !== index + 1);

// console.log(lowestPositiveNumber);
const array = [-1, -2, 3, 4, 5, 6, -7, 8, 9, 10]


let smallestPositive = Math.max(...array);
for (let i = 0; i < array.length; i++) {
  if (array[i] > 0 && array[i] < smallestPositive) {
      smallestPositive = array[i]
    }
}

console.log(smallestPositive)
