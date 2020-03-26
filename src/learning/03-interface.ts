
function getInfo(person:{name:string,age:number}):string{
  return `姓名：${person.name},年龄：${person.age}`;
};

getInfo({
  name:'hello',
  age:24
});
// getInfo({
//   name:'hello',
//   age:'24'
// });

// 如果我们不使用接口，对对象进行限制
function getInfo1({name,age}:{name:string,age:number}):string{
  return `姓名：${name},年龄：${age}`;
};




interface PersonInterface{
  name:string;
  age:number
}

function getInfo2(person:PersonInterface):string{
  return `姓名：${person.name},年龄：${person.age}`;
};

getInfo2({name:'hello',age:24});


// 多余的属性处理

// 使用类型断言
// getInfo2({
//   name:'张三',
//   age:24,
//   sex:'男'
// } as PersonInterface )

// 使用索引签名
// interface PersonInterface{
//   name:string;
//   age:number,
//   [prop:string]:any
// }

// 使用类型兼容性
let person = {
  name:'张三',
  age:24,
  sex:'男'
};
getInfo2(person);


// 接口的继承
interface Vegetables{
  color:string
};

interface Apple extends Vegetables{
  // color:string,
  type:string
};

interface Tomato {
  // color:string,
  radius:number
}


let apple:Apple = {
  color:'red',
  type:'apple'
}
