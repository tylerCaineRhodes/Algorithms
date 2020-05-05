var firstUniqChar = function (s) {
  //collect all of the objects where the keys are the letter and value is the amount of time it appears.
  let storage = {};

  for (let letter of s) {
    !storage[letter] ? (storage[letter] = 1) : storage[letter]++;
  };

  for (let key in storage) {
    if (storage[key] === 1) {
      return s.indexOf(key);
    };
  };
  return -1;
};


module.exports = { firstUniqChar };