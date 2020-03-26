const { encode, decode, alphabet, mod } = require('./constants');

function transform(str, shift, type) {
  return str.split('').reduce((arr, letter) => {
    arr.push(getLetter(letter, shift, type));
    return arr;
  }, []).join();
  
}

function getLetter(letter, shift, type) {
  const index = alphabet.indexOf(letter);
  if (index === -1) {
    return letter;
  }
  switch (type) {
    case encode:
      return (index + shift)%mod;
    case decode:
      return (index - shift)%mod;
  }
}

module.exports = {
  transform: (str, shift, type) => transform(str, shift, type)
}