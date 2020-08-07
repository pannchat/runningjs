const arr = [5,7,2,4];
const sum = arr.reduce((a,x) => a+= x,0);

console.log(sum);

const sum2 = arr.reduce((a,x) => a += x);
console.log(sum2);