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
/*
문자열 분할예제
<script>
var jbString = 'abc,def,ghi';
var jbSplit = jbString.split( ',', 2 );
for ( var i in jbSplit ) {
  document.write( '<p>' + jbSplit[i] + '</p>' );
}
</script>
*/
let x = 0, y = 10, z;
// z = (x++, y++);
z2 = x++, y++;
console.log(z);
console.log(z2);

const obj = { b:2, c:3, d:4 }; //객체 선언
const {a,b,c} = obj;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
