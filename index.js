// const myModule  = require('./local-1')
const {add,  a}  = require('./local-1')

const {a : a2,add : add2} = require('./local-2')
 
console.log(add(5,5));
console.log(a);
console.log(add2(5,5,5));
console.log(a2);