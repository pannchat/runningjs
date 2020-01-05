# 제어문
크라운 앤 앵커 시뮬레이
![](4778FB58-7FA3-4201-8215-7B1FEEB0E4D1.png)


순서도에서 마름모는 Y/N 결정을 나타내고 사각형은 행동이다.
시작과 끝은 원으로 나타냄.

- 변수 할당 : funds = 50, bets = {}, hand = []
- m 이상 n 이하의 무작위 정수 : rand(1, 6)
- 하트, 크라운 등을 결정할 무작위 문자열 randFace()
- 객체 ㅡㅍ로퍼티 할당 : bets[“heart”]=5, bets[randFace()] = 5
- 배열에 요소 추가 : hand.push(randFace())
- 간단한 사칙연산 funds - totalBet, fund + winnings
- 증가 : roll ++ 

순소도의 결정 부분(마름모)은 다음과 같이 제한
- 숫자비교 : funds > 0, fund < 100
- 일치비교 : totalBet === 7
- 논리연산자 : funds > 0 && funds < 100

# while 루프
While 은 조건을 만족하는 동안 계속 반복된다.
```javascript
let funds = 50;
while (funds > 1 && funds < 100){
// 돈을 건다
// 주사위를 굴린다
// 그림을 맞추면 돈을 가져온다.
}
```

# 블록문
N 줄의 실행 문을 중괄호로 묶은것

# 공백 
대부분의 경우 자바스크립트는 줄바꿈 문자를 포함해 추가 공백을 신경쓰지 않음.

**블록문과 블록생략문을 섞어 쓰지 말자.**

나머지는 기초적인 내용이라 생략함

# 메타문법
while문
```
while(condition)
	statement
```

If..else문
if(condition)
	statement1
[else
	statement2]

do..while 문
```
do
	statement
while(condition);
````

for문 
```
for[initialization];[condition]; [final-expresstion])
	statement
```

이후 내용도 개노잼이니 건너 뛰기로 했다

# 연산자
연산자도 대부분 생략하고
비교연산자부터 시작함 이전 내용은 C언어와 동일했음.

비교 연산자는 두 개의 값을 비교함.
일치함( === ) 과 동등함 ( == ) , 대소 관계의 세가지 타입으로 나뉨

일치와 동등의 차이
	1. 두 값이 같은 객체를 가리키거나, 같은 타입이고 값도 같다면 (원시 타입) -> 일치
	2. 두 값이 같은 객체를 가리키거나 같은 값을 갖도록 변환할 수 있다면 -> 동등

문자열 “33”은 숫자 33으로 변환할 수 있으므로 이 둘은 동등하지만 타입이 다르므로 일치 하지는 않음. 문자열은 미리 숫자로 변환해서 일치하는지 비교하기를 권장함.
```javascript
const n = 5;
const s = “5”;
n === s; *// false 타입이 다름*
n !== s; *//true*
n === Number(s); *//true 문자열 “5”를 숫자 5로 변환했음*
n !== Number(s); *//false*
n == s; *// true 권장 하지 않음*
n != s; *//false 권장하지 않음*

const a = {name : “an object”};
const b = {name : “an object”};

a === b; *//false 객체는 항상 다름*
a !== b; *//true*
a == b; *//false; 권장하지 않음*
a != b; *//true 권장하지 않음.*
```

# 숫자 비교
숫자를 비교할때 염두 해야 할 것.
특별한 숫자형 값 NaN은 자신포함 그 무엇과도 같지 않다.(==, !=, ===, !==)
NaN의 판별은 Number.isNaN() 또는 isNaN()을 사용.

```javascript
console.log(NaN === NaN);       *// false*
console.log(Number.NaN === NaN); *// false*
console.log(isNaN(NaN));         *// true*
console.log(isNaN(Number.NaN));  *// true*

function valueIsNaN(*v*) { return v !== v; }
console.log(valueIsNaN(1));          *// false*
console.log(valueIsNaN(NaN));        *// true*
console.log(valueIsNaN(Number.NaN)); *// true*
```

[결과]
![](A4AC937B-10F0-4493-AED1-C8ED7196CA9B.png)

isNaN()과 Number.isNaN()의 차이
isNaN은 현재값이 NaN이거나, 숫자로 변환했을 때 NaN이 되면 참을 반환,
Number.isNaN은 현재값이 NaN이어만 참을 반환함.
```javascript
console.log(Number(‘test’));// 문자열 test를 숫자로 변환한 값 -> NaN

console.log(isNaN(‘test’)); // true
console.log(Number.isNaN(‘test’)); //false
```

자바스크립트의 숫자는 모두 더블 형임.
그 정수가 안전한 범위라면 (Number.MIN_SAFE_INTEGER이상 Number.MAX_SAFE_INTEGER이하) 안심하고 일치 연산자를 사용할 수 있다. 하지만 소수점이 있는 숫자를 비교할 때는 관계 연산자를 써서 테스트하는 숫자가 대상 숫자에 충분히 가까운지 확인하는 편이 좋음.
충분히 가깝다는 말은 때에 따라 다르다. 자바스크립트의 표준내장객체중 숫자형 상수 Number.EPSILON이 있다. 이것은 매우 작은 값(대략 # 2.22e-16)임.
일반적으로 숫자 두개를 구별하는 기준으로 사용함.

```javascript
let n = 0;
while(true){
    n += 0.1;
    if(n === 0.3) break;
}
console.log(`Stopped at ${n}`);
```
위의 예제는 생각과 다르게 0.3에서 멈추지 않고 무한루프에 빠진다.
이유는 0.1이 더블 형식으로 정확히 나타낼 수 없는 값이기 때문임. 0.1은 이진 표현으로 나타낼 수 있는 숫자들 사이에 결쳐저 있기 때문. 
```javascript
let n = 0;
let s = 0;
while(true){
    
    s += 1;
    n += 0.1;
    if(n === 0.3 || s === 3) break;
}
console.log(`Stopped at ${n}`);
```
로 확인해봤을때
Stopped at 0.30000000000000004가 결과로 출력됨
반복할 때 n의 값은 0.30000000000000004이므로 테스트는 false이고 유일한 종료조건이 실패하게 됨.

Number.EPSILON과 관계 연산자를 사용해서 ‘느슨하게’ 비교하고 성공적으로 루프를 빠져나갈 수 있다.
```javascript
let n = 0;
while(true){
    n += 0.1;
    if(Math.abs(n-0.3) < Number.EPSILON) break;
}
console.log(`ex2) Stopped at ${n}`)
```

결과
```
ex2) Stopped at 0.30000000000000004
```

테스트하는 숫자 ( n )에서 비교대상 (0.3)을 뺀 후 절댓값을 취하는 방식을 씀. 
두 개의 더블 형식이 같다고 할 수 있을 만큼 가까운 숫자인지 판단할 때 일반적으로 사용하는 방법임.

# 문자열 병합