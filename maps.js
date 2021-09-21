const map = function(array, callback) {
  const results = [];

  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    results.push(callback(value));
  }
  return results;
}

/*
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual((["ground", "control", "to", "major", "tom"]) [ 'g', 'c', 't', 'm', 't' ]);
*/

module.exports = map;