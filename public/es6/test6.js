//날짜

const now = new Date();
console.log(now);

//특정 날짜와 시간에 해당하는 객체를 만들때

const myBirth = new Date(1996,4,21,19,0); //월은 0에서 시작해서 4는 5월

//날짜 객체를 가져오는 방법
myBirth.getFullYear();
myBirth.getMonth();
myBirth.getDate();
myBirth.getDay();
myBirth.getHours();
myBirth.getMinutes();
myBirth.getSeconds();
myBirth.getMilliseconds();


