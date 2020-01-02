// 참조형과 원시형
let a = 1 ;
let b = a;
a = 2; // 원본의 값이 바뀌지만 사본의 값은 바뀌지 않음.
console.log(a , b); // 2 1

//함수로의 값 전달
function change (c) {
    c = 5
}
c = 3;
change(c);
console.log(c); //3

let o ={a:1};
let p = o; // p는 o가 가리키고 있는 것 을 가리키는것.
o.a = 2;
console.log(p); //{ a: 2 }

let k = {a:1};
let j = k; // j는 k가 가리키고 있는 것을 가리킴
k === j; // true
k = {a:2}; // k는 이제 다른것을 가리킴. {a:1}을 수정한 것이 아님.
k === j; // false
console.log(j);

//참조 전달
function change_x( x ){
    x.a = 123;
}

let x = {a:1};
change_x(x);
console.log(x); /// { a: 123 }