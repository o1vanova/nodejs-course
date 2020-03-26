const { types } = require('./constants');

function checkShift(value, radix = 10) {
  const num = parseInt(value, radix);
  if (!isNaN(num)) {
    return num;
  } else {
    printError();
  }
}

function checkType(value) {
  if (types.includes(value)) {
    return value;
  } else {
    printError();
  }
}

function printError() {
  console.error('The data is invalid');
  process.exit(13);
}

module.exports = {
  validShift: (r) => checkShift(r);
  validAction: (r) => checkType(r);
}