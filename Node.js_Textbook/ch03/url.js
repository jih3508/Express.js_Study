const url = require('url');

const {URL} = url;
const myURL = new URL('http://www.gilbut.co.kr/book/bookList.axpx?sercate1=001001000#anchor');
console.log('new URL():', myURL);
console.log('url.format():', url.format(myURL));
console.log('---------------------------------------------');
const parseURL = url.parse('http:/www.gilbut.co.kr/book/bokkList.aspx?sercate1-001001000#anchor');
console.log('url.parse():', parseURL);
console.log('url.format():', url.format(parseURL));