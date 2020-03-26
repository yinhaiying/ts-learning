
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