//배열
const a1 = [1,2,3,4];
const a2 = [1, 'two', 3, null]; //여러타입으로 구성된 배열
const a3 = [
    "What the hammer? What the chain?",
    "In what furnace was thy brain?",
    "What the anvil? What dread grasp",
    "Dare its deadly terrors clasp?",
];
// 객체가 들어있는 배열
const a4 =[
    {name: "Ruby", hardness : 9},
    {name: "Diamond", hardness : 10},
    {name : "Topaz", hardness: 8},
];
//배열이 들어있는 배열
const a5 = [
    [1,3,5],
    [2,4,6],
];

const arr = ['a','b','c'];
console.log(arr.length);
console.log(arr[0]); //배열의 첫번째 요소
console.log(arr[arr.length -1]); // 배열의 마지막에서 두번째 요소

