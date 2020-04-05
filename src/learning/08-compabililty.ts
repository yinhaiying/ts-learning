// 类型兼容性


// 简单的类型推论

// let str = "string";
// str = 123;


// 联合类型


// let arr = ['123',456];

// let arr1:(number | string)[] = [1,'2'];

// 上下文类型
// window.onmousedown = function(mouseEvent) {
//     console.log(mouseEvent.button);  //<- Error
// };



// 类型兼容性

// interface Info {
//     name:string
// };

// let info:Info;

// let info1 = {
//     name:'hello'
// };
// let info2 = {
//     age:14
// };
// let info3 = {
//     name:'world',
//     age:15
// };

// info = info1;  // info1中包含属性name能够正常赋值
// info = info2;  // 报错,info2中缺少name属性
// info = info3; // info3中包含name属性，能够正常赋值。


// 函数的类型兼容性：

//参数个数
// let x = (a:number) => 0;
// let y = (b:number,c:string) => 0;
// // 函数赋值
// y = x; // 正确赋值
// x = y; // 无法赋值

// 参数类型
// let x = (a:number) => 0;
// let y = (a:string) => 0;
// y = x;  //参数类型不一致

// 可选参数和剩余参数

// const getSum = (arr:number[],callback:(...args:number[]) => number):number => {
//     return callback(...arr);
// };

// let res1 = getSum([1,2],(...args:number[]):number => {
//   return args.reduce((a,b) => a+b,0);
// });
// console.log(res1);
// let res2 = getSum([1,2,3],(arg1,arg2,arg3):number => {
//   return arg1 + arg2 + arg3;
// });
// console.log(res2);


// 函数参数双向协变(联合类型参数);

// let  x = (a:(number | string)) :void => {};
// let  y = (b:number):void => {};

// y = x;
// x = y;// error Type 'string' is not assignable to type 'number'.

// 返回值类型

// let x = ():string | number => 0;
// let y = ():string => 'a';
// x = y;
// y = x;


// 枚举类型兼容性
// enum Status {
//     Success,
//     Error
// };
// let s = Status.Success;
// s = 1;
// enum Progress {
//     Start,
//     End
// }
// s = Progress.Start;

// 类的类型兼容性

// class AnimalClass {
//   public static age:number;
//   constructor(public name:string){};
// }
// class PeopleClass {
//   public static age:string;
//   constructor(public name:string){};
// }
// class FoodClass {
//   public static age:number;
//   constructor(public name:number){};
// }

// // 将类作为类型使用时，实际上是将类的实例来作为类型使用。
// let animals:AnimalClass;
// let peop:PeopleClass;
// let food:FoodClass;

// animals = peop;
