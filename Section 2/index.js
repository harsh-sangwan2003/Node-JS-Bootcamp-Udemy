const fs = require('fs');

// Blocking, synchronous way
// const buffer = fs.readFileSync('output.txt');
// const output = "Adding some extra content. " + buffer;
// fs.writeFileSync('output.txt', output);

// Non-Blokcing, asynchronous way
fs.readFile('output.txt', 'utf-8', (err, data) => {

    if (err)
        console.log(err);

    else
        console.log(data);
})

console.log("Will read file");