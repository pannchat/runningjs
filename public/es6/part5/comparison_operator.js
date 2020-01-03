
const n = 5;
const s = "5";
n === s; // false 타입이 다름
n !== s; //true
n === Number(s); //true 문자열 "5"를 숫자 5로 변환했음
n !== Number(s); //false
n == s; // true 권장 하지 않음
n != s; //false 권장하지 않음

const a = {name : "an object"};
const b = {name : "an object"};

a === b; //false 객체는 항상 다름
a !== b; //true
a == b; //false; 권장하지 않음
a != b; //true 권장하지 않음.

///console.log()
console.log(NaN === NaN);       // false
console.log(Number.NaN === NaN); // false
console.log(isNaN(NaN));         // true
console.log(isNaN(Number.NaN));  // true

function valueIsNaN(v) { return v !== v; }
console.log(valueIsNaN(1));          // false
console.log(valueIsNaN(NaN));        // true
console.log(valueIsNaN(Number.NaN)); // true
console.log('---');
console.log(Number('test'));// 문자열 test를 숫자로 변환한 값 -> NaN

console.log(isNaN('test')); // true
console.log(Number.isNaN('test')); //false
