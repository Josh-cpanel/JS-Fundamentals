#!/usr/bin/node

const args = process.argv.slice(2); // slice to skip ['node', 'filename']

if (args.length === 0) {
  console.log("No argument");
} else if (args.length === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
