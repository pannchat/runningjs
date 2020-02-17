let globalFunc; //정의 되지 않는 전역 함수
{
	let blockVar = "a"; //블록 스코프에 있는 변수 
	globalFunc = function(){
		console.log(blockVar);
	}
}
globalFunc(); // “a”