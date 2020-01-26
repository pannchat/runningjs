const bruce = { name : "Bruce"};
const madeline = { name : "Madeline"};

//이 함수는 어떤 객체에도 연결되지 않았지만 this를 사용
function greet(){
    return `Hello, I'm ${this.name}`;
}

console.log(greet());
console.log(greet.call(bruce));
console.log(greet.call(madeline));

function update(birthYear, occupation){
    this.birthYear = birthYear;
    this.occupation = occupation;
}

update.call(bruce, 1949, 'singer');
    //bruce는 이제 { name: "Bruce", birthYear:1949, occupation: "singer"}임