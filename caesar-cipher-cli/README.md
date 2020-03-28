# Caesar cipher CLI tool

Implement CLI tool that will encode and decode a text by [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher).

## How does it work?

Firstly, you should download NPM modules:

```
npm install
```
Now you should run next command to move the folder:

```
cd caesar-cipher-cli 
```

You are ready to run CLI tool.
CLI tool should accept 4 options (short alias and full name):

-  **-s, --shift**: a shift
-  **-a, --action**: an action encode/decode
-  **-i, --input**: an input file (*)
-  **-o, --output**: an output file (*)

(*) These parameters are optional and might be missed.
To start the tool you should run `node index.js <parameters>`. Next you can find some examples. You can write other files instead of "./resources/input.txt" and "./resources/output.txt". These files were created for testing.

## Examples

```bash
$ node index.js -a encode -s 7 -i "./resources/input.txt" -o "./resources/output.txt"
```

```bash
$ node index.js --action encode --shift 7
```

```bash
$ node index.js --action decode --shift 7 -i "./resources/output.txt"
```