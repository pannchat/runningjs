//배열 정렬과 역순정렬
const arr =[{name:"jiwon"}, {name:"tom"},{name:"amanda"},{name:"sam"}];
arr.sort();
console.log(arr); // 아무런 변화도 일어나지 않음.
arr.sort((a,b) => a.name > b.name);
console.log(arr);

console.log(arr.sort((a,b) => a.name[1] < b.name[1]));
console.log(arr);