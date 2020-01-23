const o = {
    name : 'jiwon',
    speak() {return `My name is ${this.name}!`;},
}
console.log(o.speak());

const speak = o.speak;
console.log(speak === o.speak); // true; 두 변수는 같은 함수를 가리킴.
console.log(speak()); // "My name is undefined"