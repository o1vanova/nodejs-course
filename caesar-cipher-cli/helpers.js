const { types } = require('./constants');

function checkShift(value, radix = 10) {
  const num = parseInt(value, radix);
  if (!isNaN(num)) {
    return num;
  }
  printError();
}

function checkType(value) {
  if (types.includes(value)) {
    return value;
  }
  printError();
}

function printError() {
  console.error('The data is invalid');
  const exit = process.exit;
  exit(13);
}

module.exports = {
  validShift: r => checkShift(r),
  validAction: r => checkType(r)
};
