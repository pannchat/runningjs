// call()이나 apply()의 첫 번째 매개변수로 객체를 제공하면 this가 그 객체에 묶임
var obj = {a: 'Custom'};

// 전역 객체에 속성 지정
var a = 'Global';

function whatsThis() {
  return this.a;  // 함수 호출 방식에 따라 값이 달라짐
}

console.log(whatsThis.call(a));          // 'Global'
console.log(whatsThis.call(obj));  // 'Custom'
console.log(whatsThis.apply(obj)); // 'Custom