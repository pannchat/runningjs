const numStr ="33.3";
const num = Number(numStr);
console.log(typeof num +" "+ num);

const a = parseInt("16 volts", 10) // "volts는 무시되고 10진수 16
const b = parseInt("3a",16); // 16진수 3a를 10진수로 => 58
const c = parseFloat("15.5 kph");// parseFloat는 항상 기수가 10이라고 가정
console.log(a);
console.log(b);
console.log(c);
//시간
const d = new Date();
const ts = d.valueOf();
console.log(ts);

const times = new Date('2020-01-02T06:36:40.822Z');
console.log(times.toString())

//배열 toString객체사용
const arr = [1,true,"hello"];
const arrToString = arr.toString();
console.log(arrToString);
console.log(typeof arrToString);