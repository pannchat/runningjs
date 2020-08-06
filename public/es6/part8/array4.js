const o = { name : "jiwon"};

const arr = [ 1, 5, "a", o, true, 5, [1,2], "9"];

//arr' is assigned a value but never used.eslintno-unused-vars
/* 여기 까지 스크립트를 작성했을 때 위와같은 경고메세지가 뜨는것을 볼 수 있는데
이는 ESLint가 JSX에서 arr을 선언하고 사용하지 않았다고 경고메세지를 띄우는 것이므로 그냥 넘어가거나
주석으로 해당 라인 윗줄에 // eslint-disable-next-line no-unused-vars 처리를 해줘도 된다.
*/

console.log(arr.indexOf(5));    //1
console.log(arr.lastIndexOf(5));    //5
console.log(arr.indexOf("a"));  //2
console.log(arr.lastIndexOf("a"));  //2
console.log(arr.indexOf({name:"Jerry"}));   //-1
console.log(arr.indexOf(o));    //3
console.log(arr.indexOf([1,2]));      //  -1
console.log(arr.indexOf(1)); 
console.log(arr.indexOf("9"));  //7
console.log(arr.indexOf(9));    //-1

console.log(arr.indexOf("9",5));    //7
console.log(arr.indexOf(5,5));  //5
console.log(arr.lastIndexOf(5,4));  //1
console.log(arr.lastIndexOf(true,3));   //-1