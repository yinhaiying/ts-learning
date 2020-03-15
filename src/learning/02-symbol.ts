// Symbol表示独一无二的值.


const s1 = Symbol();
console.log(s1);
const s2 = Symbol();
console.log(s2);
// console.log(s1 == s2);  false

// Symbol传入参数作为标识,只是作为一个标识，哪怕传入参数相同也不会相等。

const s3 = Symbol('hello');
console.log(s3);
const s4 = Symbol('hello');
// console.log(s3 == s4);  false
