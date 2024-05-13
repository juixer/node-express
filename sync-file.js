const fs = require('fs');

const readFile = fs.readFileSync('./read.txt', 'utf8')

console.log(readFile);

const writeFile = fs.writeFileSync('./write.txt', readFile + 'this is xqc from kick.com')
console.log(writeFile);