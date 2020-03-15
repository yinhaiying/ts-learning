
// never类型是其他数据类型的子类型，可以赋值为其他数据类型。
let num:number = 32;
let never = (() => {while(true){}})();
num = never;


// never类型不能赋值为其他类型
// let n1:never;
// n1 = 123;



// 类型断言
// function getLength(str:(string | number)):number{
//     if (str.length) {
//         return str.length;
//     } else {
//         return str.toString().length;
//     }
// }

function getLength(str:(string | number)):number{
    if ((<string>str).length) {
        return (<string>str).length;
    } else {
        return str.toString().length;
    }
};

function getLength2(str:(string | number)):number{
    if ((str as string).length) {
        return (str as string).length;
    } else {
        return str.toString().length;
    }
};

getLength(11);
