

// 很多时候，我们会使用回调函数，我们可能需要对回调函数进行限制。比如对回调函数的
// 参数类型，返回值类型等进行限制。
let add : (x:number,y:number) => number;
add = (arg1:number,arg2:number):number => arg1 + arg2;
// add = (arg1:string,agr2:number):number => arg1 + arg2;  //报错

type Add = (x:number,y:number) => number;

let func1:Add = (arg1:number,agr2:number):number => arg1 + agr2;
func1(1,2);
