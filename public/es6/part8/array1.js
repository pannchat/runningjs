const arr1 = [1,2,3];
const arr2 = ["one", 2, "three"];
const arr3 = [[1,2,3], ["one", 2, "three"]];
const arr4 = [
    {name:"Fred", type:"object", luckyNumbers:[5,7,13]},
    [
        {name : "Susan", type: "object"},
        {name : "Anthony", type: "object"}
    ],
    1,
    function() { return "arrays can contain functions too";},
    "three",
];

// 배열 요소에 접근하기
arr1[0];
arr1[2];
arr3[1];
arr4[1][0];

console.log(arr1.length); //3
console.log(arr4.length); //5
console.log(arr4[1].length); //2

//배열 길이 늘리기
arr1[4] = 5;
console.log(arr1);
console.log(arr1.length); //5

//배열의 현재 길이보다 큰 인덱스에 접근하는 것만으로 배열의 길이가 늘어나지는 않는다.
console.log(arr2[10]); //undefined
console.log(arr1.length); //3

//Array생성자 (거의 사용 안함)
const arr5 = new Array(); 
console.log(arr5); // 빈 배열
const arr6 = new Array(1,2,3); 
console.log(arr6); // [1,2,3]
const arr7 = new Array(2); 
console.log(arr7); // 길이가 2인 배열. 요소는 모두  undefined
const arr8 = new Array("2");
console.log(arr8); // ["2"]