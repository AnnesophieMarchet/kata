/**
 * 1 - Écris une fonction sumOfEvenNumbers(numbers) qui prend en entrée un tableau d'entiers numbers et retourne la somme de tous les nombres pairs présents dans le tableau.
 */

const numbers = [1, 2, 3, 4, 5, 6];

// your code here
function sumOfEvenNumbers(numbers) {
  let som = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      som += numbers[i];
    }
  }
  return som;
}
console.log(sumOfEvenNumbers(numbers));

/**
 * 2 - Écris une fonction maxNumber(numbers) qui prend en entrée un tableau d'entiers numbers et retourne le plus grand nombre présent dans le tableau.
 */

const numbers2 = [12, 21, 67, 36, 49, 51];

// your code here

function maxNumber(numbers) {
  let som = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > som) {
      som = numbers[i];
    }
  }
  return som;
}

console.log(maxNumber(numbers));
