const { encode, decode, alphabet, mod } = require('./constants');

function transform(str, shift, type) {
  return str
    .split('')
    .reduce((arr, letter) => {
      arr.push(getLetter(letter, shift, type));
      return arr;
    }, [])
    .join('');
}

function getLetter(letter, shift, type) {
  const index = alphabet.indexOf(letter.toLowerCase());
  if (index === -1) {
    return letter;
  }
  let newIndex = 0;
  switch (type) {
    case encode:
      newIndex = (index + shift) % mod;
      break;
    case decode:
      newIndex = (index - shift) % mod;
      break;
    default:
      return '';
  }
  const value = alphabet.substr(newIndex, 1);
  return letter >= 'A' && letter <= 'Z' ? value.toUpperCase() : value;
}

module.exports = {
  transform: (str, shift, type) => transform(str, shift, type)
};
