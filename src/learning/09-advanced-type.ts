

// 交叉类型
// let mergeFunc = <T,U>(arg1:T,arg2:U):T & U => {
//   let result = {} as T & U;
//   result = Object.assign(arg1,arg2);
//   return result;
// }

// 联合类型

// let func = (arg:number | string):number => {
//   let result = 0;
//   if(typeof arg === 'string'){
//     result = arg.length;
//   }else if(typeof arg === 'number'){
//     result = arg.toString().length;
//   }
//   return result;
// }

// console.log(func('1234'));
// console.log(func(123));

// 类型保护

// const arr = ['1234',44456]
// const func2 = ():number | string => {
//   const nums = Math.random();
//   if(nums < 0.5){
//     return arr[0];
//   }else{
//     return arr[1]
//   }
// }

// let result = func2();



// 定义类型保护
// function isString(value:number | string):value is string{
//   return typeof value === 'string';
// }
// if(isString(result)){
//   console.log(result.length);
// }else{
//   console.log(result.toFixed());
// }

// typeof 类型保护
// if(typeof result === 'string'){
//   console.log(result.length);
// }else if(typeof result === 'number'){
//   console.log(result.toFixed());
// }

// instanceof 类型保护

// class Class1{};
// class Class2{};
// const func2 = ():Class1 | Class2 => {
//   const nums = Math.random();
//   if(nums < 0.5){
//     return new Class1();
//   }else{
//     return new Class2();
//   }
// }
// let result = func2();
// if(result instanceof Class1){
//   console.log('result是class1的实例')
// }else{
//   console.log('result是class2的实例')
// }

// null和undefined
// let a = 1;
// a = undefined;


// 类型别名

// type str = string;
// type num = number;
// const func = (name:str,age:num):str|num => {
//     return 111;
// }

// type Name<T> = {name:T}

// let n:Name<string> = {name:'hello'};
// console.log(n)

//

// 字面量类型

// 字符串字面量类型
// type Name = "hahaha";
// let n1:Name = "hahaha";
// let n2:Name = 'hello';  // error Type '"hello"' is not assignable to type '"hahaha"'.

// type Direction = "left" | "right";
// const getDirection = (direction:Direction):string => {
//     let result = ""
//     if(direction === 'left'){
//         result = 'Go to Left';
//     }else if(direction === 'right'){
//         result = 'Go to right'
//     }else{
//         result = 'no'
//     }
//     return result;
// }

// 数字字面量类型

// type Num = 18;
// let num1:Num = 18;
// let num2:Num = 19; // Type '19' is not assignable to type '18'.
