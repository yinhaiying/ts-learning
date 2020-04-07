const arrMap = require('./dist/array-map.js');
let result = arrMap([1,2],(item,index,arr) => {
  return item += 1;
});
console.log(result)
