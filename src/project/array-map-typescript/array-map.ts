
const arrMap = <T,U>(array:T[],callback:(item:T,index:number,arr:ReadonlyArray<T>) => U) :U[] => {
  let i = 0;
  const resultArr = [];
  const len = array.length;
  while(i < len){
    resultArr.push(callback(array[i],i,array));
    i++;
  };
  return resultArr;
};
export = arrMap;
