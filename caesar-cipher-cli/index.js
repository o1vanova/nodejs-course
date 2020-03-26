const { program } = require('commander');
const { worker } = require('./worker');
const helper = require('./helpers');

program
  .option('-s, --shift <value>', 'a shift', helper.validShift)
  .option('-i, --input <value>', 'an input file')
  .option('-o, --output <value>', 'an output file')
  .option('-a, --action <value>', 'an action encode/decode', helper.validAction)
  .parse(process.argv);

console.log(program.opts());

if (program.shift && program.action) {
  worker(program.input, program.output);
}
