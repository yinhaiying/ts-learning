
// // 定义一个装饰器
// function persons(target){
//   // 给装饰器修饰的类拓展方法
//   target.prototype.name = "装饰器";
//   target.prototype.showName = function(){
//     return this.name;
//   }
// }

// @persons
// class PersonClass{}
// let p1 = new PersonClass();
// console.log(p1.name);  // 装饰器
// console.log(p1.showName()); //装饰器



// 装饰器工厂

// function func(value){
//   return (target) => {
//     console.log(value);
//     console.log(target)
//   }
// };

// @func('hello')
// class PersonClass{}


// 属性装饰器

// function prop(value:string|number){
//   return (target:any,attr:any):void => {
//     target[attr] = value;
//   }
// };

// class Index{
//   @prop('hello')
//   static sex:string;
//   @prop(27)
//   public age:number;
//   constructor(){};
// }

// let index = new Index();
// console.log(Index.sex);   // hello
// console.log(index.age);   // 27


// 方法装饰器
// function get(params:any) {
//   console.log(params) // 装饰器传入的参数：http://baidu.com
//   return (target:any, methodName:any, desc:any) => {
//       console.log(target)  // { constructor:f, getData:f }
//       console.log(methodName)  // getData
//       console.log(desc)  // {value: ƒ, writable: true, enumerable: false, configurable: true} value就是方法体
//       /* 修改被装饰的方法 */
//       // 1. 保存原方法体
//       const oldMethod = desc.value;
//       // 2. 重新定义方法体
//       desc.value = function(...args:any[]) {
//           // 3. 把传入的数组元素都转为字符串
//           const newArgs = args.map((item)=>{
//               return String(item);
//           });
//           // 4. 执行原来的方法体
//           oldMethod.apply(this, newArgs);
//           // 等效于 oldMethod.call(this, ...newArgs);
//       }
//   }
// }
// class HttpClient {
//   @get('http://baidu.com')
//   getData(...args:any[]) {
//       console.log('getData: ', args);
//   }
// }
// let http = new HttpClient();
// http.getData(1, 2, true);  // getData: ["1", "2", "true"]


function get(){
  return (target:any, methodName:string, desc:any) => {
    console.log(target);
    console.log(methodName);
    console.log(desc);
    // 修改原来的方法
    desc.value = (arr) =>{
      const str = arr.join();
      return str;
    }
  }
}

class Http{
  @get()
  get(arr){
    return arr;
  }
}

const http = new Http();
console.log( http.get([1,2,3,4]) );
