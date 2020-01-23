const o1 = {
    name : 'jiwon', // 원시 값 프로퍼티
    speak : function(){return 'help';}, // 함수 프로퍼티(메서드)
}
// 아래는 ES6에서 간편하게 메서드를 추가할 수 있는 문법임. 위 아래 동일함.
const o2 = {
    name : 'jiwon', // 원시 값 프로퍼티
    speak() {return 'help';}, // 함수 프로퍼티(메서드)
}

console.log(o1.speak());

