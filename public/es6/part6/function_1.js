

function getGreeting(){
    return "Hello, World";
}

console.log(getGreeting());
console.log(getGreeting);
// 참조
const f = getGreeting;
console.log(f());
// 함수를 변수에 할당
const o = {};
o.f=getGreeting;
console.log(o.f());
// 객체 프로퍼티에 할당

const arr = [1,2,3];
arr[1] = getGreeting;
var i;
for(i=0;i<3;i++){
    console.log(arr[i]);
}
//arr은 이제 1,[Function: getGreeting],3
// arr[1] = [Function: getGreeting]
// arr[1]() = Hello, World