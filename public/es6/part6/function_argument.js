function avg(a,b){
    return (a+b)/2;
}

console.log(avg(5,10));
//
//
//
function f(x){
    console.log(`f 내부: ${x}`);
    x=5;
    console.log(`f 내부 : ${x} (할당후)`);
}

let x= 3;
console.log(`f를 호출하기 전 : ${x}`);
f(x);
console.log(`f를 호출한 이후 : ${x}`);