

const findKeyByValue = function(object, findValue) {
  let keys = Object.keys(object);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let value = object[key];
    if (value === findValue) {
      return key;
    }
    //console.log("key=" + key + ", value=" + value);
  }
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);