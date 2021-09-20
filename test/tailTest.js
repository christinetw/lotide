const assertEqual = require('../assertEqual');

const tail = function(array) {
  const result = [];
  for (let i = 1; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
};
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!