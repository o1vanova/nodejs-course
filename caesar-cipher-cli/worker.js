const fs = require('fs');
const stream = require('stream');
const options = {};

function worker(input, output) {
  console.log('Wait, please...');
  const pathRead = input || process.stdin;
  const pathWrite = output || process.stdout;

  const write = fs.createWriteStream(pathWrite, options);
  const read = fs.createReadStream(pathRead, options);

  read.pipe(write);
}

function printError() {
  console.error('The system cannot open the file');
  process.exit(4);
}

module.exports = {
  worker: (input, output) => worker(input, output)
}