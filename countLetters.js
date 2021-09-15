
const countLetters = function(letter) {
  let count = {};
  for (let i = 0; i < letter.length; i++) {
    let key = letter[i];
    if (letter[key] === letter[key]) {
      increaseCount(count, letter[i]);
    }
  }
  return count;
};

const increaseCount = function(array, key) {
  if (array[key] === undefined) {
    array[key] = 1;
  } else {
    array[key]++;
  }
};
console.log(countLetters('LHLLL'));