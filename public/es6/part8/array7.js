const arr = [5,7,12,15,17];
//some 조건에맞는 요소를 찾으면 즉시 true를 반환
console.log(arr.some(x=> x%2 === 0)); //true 12는 짝수이므로
console.log(arr.some(x=>Number.isInteger(Math.sqrt(x)))); //false 제곱수가 없다.  

//every 모든 요소가 조건에 맞아야 true
const arr2 = [4,6,16,36]
console.log(arr2.every(x => x%2 === 0)); //true 홀수가 없으므로
console.log(arr2.every(x => Number.isInteger(Math.sqrt(x)))); //false 6은 제곱수가 아니므로 
console.log()
/*
Number.isInteger(value)
매개변수
value
정수인지 확인하려는 값.
반환 값
주어진 값의 정수 여부를 나타내는 Boolean.
*/