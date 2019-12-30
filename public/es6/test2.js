const obj = {}; // 빈 객체

obj.color = "yellow"; 

obj["not an identifier"] = 3;
obj["not an identifier"]; // 3
obj["color"]; // yellow

const SIZE = Symbol();
obj[SIZE] = 9;
obj[SIZE]; //9

console.log(obj);
console.log(obj[SIZE]);
// 위의 예제까지 출력해보면 SIZE가 obj의 프로퍼티인 것을 확인할 수 있지만 
// 심볼프로퍼티는 다르게 처리되며 기본적으로 표시되지않음

obj.SIZE = 0;
console.log("obj.SIZE = 0;");

console.log(obj[SIZE]);
console.log(obj.SIZE);
console.log(obj["SIZE"]);
// 이 프로퍼티의 키는 SIZE 심볼이고 문자열형태인 "SIZE"가 아니다
// ( . ) 연산자는 문자열 프로퍼티에 대해 항상동작한다