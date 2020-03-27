const fs = require('fs');
const { pipeline, Transform } = require('stream');
const { StringDecoder } = require('string_decoder');
const { transform } = require('./cipher');

class TransformCharacters extends Transform {
  constructor(options, shift, type) {
    super(options);

    this.shift = shift;
    this.type = type;

    this._decoder = new StringDecoder('utf-8');
  }

  _transform(chunk, encoding, callback) {
    if (encoding === 'buffer') {
      chunk = this._decoder.write(chunk);
    }

    // Exit on CTRL + C.
    if (chunk === '\u0003') {
      printError();
    }

    if (chunk.length > 0) {
      chunk = transform(chunk, this.shift, this.type);
    }

    callback(null, chunk);
  }
}

function worker(input, output, shift, type) {
  const read = getStream(input);
  const write = getStream(output, false);

  pipeline(read, new TransformCharacters({}, shift, type), write, err => {
    if (err) {
      console.log(`Pipeline failed: ${err}`);
    } else {
      console.log('Pipeline succeeded.');
    }
  });
}

function getStream(path, isStdin = true) {
  if (!path) {
    return isStdin ? process.stdin : process.stdout;
    // eslint-disable-next-line no-sync
  } else if (fs.existsSync(path)) {
    const options = {};
    return isStdin
      ? fs.createReadStream(path, options)
      : fs.createWriteStream(path, options);
  }
  printError();
}

function printError() {
  console.error('The system cannot open the file');
  const exit = process.exit;
  exit(4);
}

module.exports = {
  worker: (input, output, shift, type) => worker(input, output, shift, type)
};
