{
    // 외부블록
let x = 'blue'
console.log(x); // blue
{
	//내부블록
	let x = 3;
	console.log(x); // 3
}
console.log(x); // blue
}
console.log(typeof x); // undefined