
// enum data {
//     success,
//     pending,
//     error,
// };
// console.log(data.success);
// console.log(data.pending);
// console.log(data.error);


// 通过变量或者计算属性获得枚举的数值
// let count = 100;
// function getNum():number{
//     return 200;
// }
// enum data {
//     success = count,        // 通过变量获取枚举数值
//     pending = getNum(),     // 通过计算获取枚举数值
//     error = 2,              // 这里必须设置初始值
// };
// console.log(data.success);  // 100
// console.log(data.pending);  // 200
// console.log(data.error);    // 2

// 字符串枚举

// console.log('............字符串枚举...........')
// enum progress {
//     success = 'Success',
//     pending = 'Pending',
//     error = 'Error'
// }
// console.log(progress.success);  // Success
// console.log(progress.pending);  // Pending
// console.log(progress.error);    // Error

// 反向映射
// console.log('反向映射........')
// enum data {
//     success = 1,        // 通过变量获取枚举数值
//     pending =3,     // 通过计算获取枚举数值
//     error = 5,              // 这里必须设置初始值
// };
// console.log(data);
// console.log(data.success);  // 1
// let a = data.success;   // 1
// console.log(data[a]);   // success

// 枚举成员类型

// enum Animal {
//     Dog = 1,
//     Cat = 2
// };

// interface AInterface {
//     type1:Animal.Dog,   // 接口属性定义成枚举成员类型
//     type2:Animal.Cat,   // 接口属性定义成枚举成员类型
// };

// let animal:AInterface = {
//     type1:Animal.Dog,  // 这里可以使用Animal.Dog
//     type2:2            // 也可以直接使用对应的数值
// }


// 联合枚举类型
enum Animal {
    Dog = 1,
    Cat = 2
};

interface AInterface {
    type:Animal  // 枚举对象作为类型
};

let animal:AInterface = {
    type:Animal.Dog,  // 这里只能是Animal.Dog或者Animal.cat
}