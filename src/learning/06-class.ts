
// ts中类的简单定义
// class Person {
//     // 指定参数类型
//     name:string;
//     age:number;
//     constructor(name:string,age:number){
//       this.name = name;
//       this.age = age;
//     }
//     getName():string{
//       return this.name;
//     }
// }
// let p1 = new Person('小红',24)
// console.log(p1.getName())

// 如果不提前指定类的属性类型就会报错：

// class Person {
//     // 不指定参数类型
//     // name:string;
//     // age:number;
//     constructor(name:string,age:number){
//       this.name = name;
//       this.age = age;
//     }
//     getName():string{
//       return this.name;
//     }
// }


// 类的继承

// class Person {
//     name:string;
//     age:number;
//     constructor(name:string,age:number){
//       this.name = name;
//       this.age = age;
//     }
//     getName():string{
//       return this.name;
//     }
// }

// class Student extends Person{
//     sex:string;
//     constructor(name:string,age:number,sex:string){
//       super(name,age);
//       this.sex = sex;
//     };
//     getSex(){
//       return this.sex;
//     }
// };
// let s = new Student('小李',25,'男')
// console.log(s.getName())
// console.log(s.getSex())

// 参数属性
// class Person {
//     constructor(public name:string,public age:number){}
//     getName():string{
//       return this.name;
//     }
// }
// let s = new Person('小李',25);
// console.log(s.getName());


// 实例属性
// class Person {
//     constructor(public name:string,public age:number){}
//     getName():string{
//       return this.name;
//     }
// }
// let s:Person = new Person('小李',25);  // s的属性就是创建它的类Person
// console.log(s.getName());

// 类实现接口

interface PersonInterfaces{
    name:string;
    getName():string;
};
class Person implements PersonInterfaces{
    constructor(public name:string){};
    getName(){
        return this.name;
    }
}
let p = new Person('刘亦菲');
console.log( p.getName());
// let p1 = new Person(111);  error

