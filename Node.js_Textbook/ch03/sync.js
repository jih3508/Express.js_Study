const fs = require('fs');

const data = fs.readFileSync('./readme.txt');
console.log('1번', data.toString());