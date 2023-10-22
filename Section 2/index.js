const fs = require('fs');

const buffer = fs.readFileSync('output.txt');

const output = "Adding some extra content. " + buffer;

fs.writeFileSync('output.txt',output);