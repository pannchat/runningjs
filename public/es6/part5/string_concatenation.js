console.log(3 + 5 + "8"); // 88
console.log("3" + 5 + 8); //358
console.log("5"+"3"); //53
/*
var sentence = "a";
sentence += " b";
sentence += " ";
sentence += " c";
console.log( sentence );
*/
// 배열의 join을 이용하면 위 과정보다 연산이 더 빠르다.??
var sentence = [ 'a', 'b', 'c', 'd' ];
console.log( sentence.join(' ') );

