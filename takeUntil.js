const takeUntil = function(array, callback) {
  const results = [];

  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    if (callback(value) === true) {
      break;
    }
    results.push(value);
  }
  return results;
}

/*
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

assertArraysEqual(results1, [1,2,5,7,2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
*/

module.exports = takeUntil;