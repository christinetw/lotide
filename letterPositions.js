const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    let array = results[letter];

    if (array === undefined) {
      results[letter] = [];
      array = results[letter];
    }
    array.push(i);
  }

  return results;
};

//assertArraysEqual(letterPositions("hello").e, [1]);
//assertArraysEqual(letterPositions("hello").l, [2,3]);

module.exports = letterPositions;