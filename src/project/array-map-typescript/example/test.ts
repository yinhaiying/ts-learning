import arrMap = require('../dist/array-map');

arrMap([1,2],(item) => {
  return item += 2;
}).forEach((item) => {
  console.log(item.toFixed());
})
