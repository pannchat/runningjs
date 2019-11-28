'use strict';
//es6 기능 : 블록 스코프 변수 선언
const sentences = [
    {subject : 'Javascript', verb: 'is', object: 'great'},
    {subject : 'Elephants', verb: 'are', object: 'large'},
];

//es6기능: 객체분해
function say({subject, verb, object}){
    //es6 기능: template 문자열
    //아래에 사용한 것은 따옴표가아니라 백틱(`) 한글로 되어있으면 ₩로 나옴
    console.log(`${subject} ${verb} ${object}`);
}

//es6 기능 : for..of
for(let s of sentences){
    say(s);
}