const assertEqual = require('../assertEqual');

const head = function(array) {
  if (array === undefined || array.length === 0) {
    return undefined;
  } else {
    return array[0];
  }
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");