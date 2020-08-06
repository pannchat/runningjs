const { nodeModuleNameResolver } = require("typescript");

const arr = [ {id:5, name : "jiwon"},{id:7, name:"tom"}];
console.log(arr.findIndex(o => o.id === 5)); //0
console.log(arr.findIndex(o => o.name === "jiwon")); //0
// console.log(arr.findLastIndex(o => o.name === "jiwon"));TypeError: arr.findLastIndex is not a function at Object.<anonymous>
console.log(arr.findIndex(o => o.name === "tom")); //1
console.log(arr.findIndex(o => o === 3)); //-1
console.log(arr.findIndex(o => o.id === 17)); //-1

/* --------------------- */

const arr2 = [{id:5, name:"jiwon"}, {id:7, name:"tom"}];
console.log(arr2.find(o=> o.id === 5)); // { id: 5, name: 'jiwon' }
console.log(arr2.find(o => o.name === "tom")); //{ id: 7, name: 'tom' }
console.log(arr2.find(o => o.id === 3)); // undefined

/* --------------------- */
const arr3 = [ 1, 17, 16,5, 4, 16, 10, 3, 49];
console.log(arr3.find((x,i) => i >2 && Number.isInteger(Math.sqrt(x)))); //4

/* --------------------- */
class Person{
    constructor(name){
        this.name = name;
        this.id = Person.nextId++;
    }
}
Person.netxId = 0;
const jamie = new Person("Jamie"),
juliet = new Person("Juliet"),
peter = new Person("Peter"),
jay = new Person("Jay");

const arr4= [jamie, juliet,peter,jay];

//옵션 1: ID를 직접 비교하는 방법
arr4.find(p =>p.id === juliet.id);

//옵션 2: "this" 매개 변수를 이용하는 방법

arr4.find(function (p) {
    return p.id === this.id
},juliet);