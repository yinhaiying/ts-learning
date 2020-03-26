
let echo = (arg:number):number => {
    return arg;
}

console.log( echo(2));

let echo1 = (arg:any):any => {
    return arg;
};
echo1(2);
echo1('helllo');

// 类型变量
let echo2 = <T>(arg:T):T => {
    return arg;
};
console.log( echo2(111) );
console.log( echo2('222') );

function echo3 <T>(arg:T):T{
    return arg;
};

console.log('echo3:'+echo3(111));
console.log('echo3:'+echo3('111'));


// 泛型变量

// let echo4 = <T>(arg:T):T => {
//     console.log(arg.length);
//     return arg;
// }
let echo4 = <T>(arg:T[]):T[] => {
    console.log(arg.length);
    return arg;
};
console.log(echo4([1,2]));


// 使用ES6来定义泛型函数类型

let echo5 : <T>(arg:T[]) => T[];

// 定义实际的函数
console.log('泛型定义函数类型');
echo5 = (arg:any) => {
    return arg;
};
// echo5([1,2,3]).map((item) => item.length);


// 使用type类型别名来定义泛型函数类型
console.log('使用type类型别名来定义函数类型');
type Echo = <T>(arg:T) => T;
let echo6:Echo = (arg:any) => {
    return arg;
};
echo6([1,2,3]).map((item) => item.toFixed());


// 使用接口来定义泛型函数类型
console.log('使用接口来定义函数类型');
interface Echos{
    <T>(arg:T):T
};
let echo7:Echo = (arg:any) => {
    return arg;
};
console.log( echo6(['1','22','333']).map((item) => item.length));


console.log('约束');


// 类型约束
interface valueWithLength {
    length:number
};

let echo8 = <T extends valueWithLength>(arg:T) => {
    console.log(arg.length);
    return arg;
};
echo8('1');
echo8([1,2,3]);

// 类型约束中使用类型参数
console.log('在类型约束中使用类型参数')
const getProp = (obj:any,prop:any) => {
    return obj[prop];
};
const obj = {
    a:'a',
    b:'b'
};
console.log(getProp(obj,'a'));  // a
console.log(getProp(obj,'c'));  // undefined


// 类型约束中使用类型参数
const getProp2 = <T,U extends keyof T>(obj:T,prop:U) => {
    return obj[prop];
};
console.log(getProp2(obj,'a'));  // a
console.log(getProp2(obj,'c'));  // Argument of type '"c"' is not assignable to parameter of type '"a" | "b"'