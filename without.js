const without = function(source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      result.push(source[i]);
    }
  }
  return result;
};

/*
assertArraysEqual(without([10,20,30,40,50], [20, 40]), [10,30,50]);
assertArraysEqual(without([10,20,30], [10,20,30]), []);
assertArraysEqual(without([10,20,30], [11, 12, 13]), [10,20,30]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
*/

module.exports = without;