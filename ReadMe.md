list : https://github.com/pannchat/runningjs/tree/master/public/es6
# 변수선언
let 변수명
const 상수변수명

상수선언은 언더바(_)와 대문자만 사용함
이런 규칙을 통해 상수를 찾기 쉽고 바꾸려하지 않아도 됨

# 식별자
변수와 상수, 함수 이름을 식별자 라고 부름.

### 식별자 규칙
	- 식별자는 반드시 글자나 달러 기호($), 밑줄(_)로 시작해야함
	- 식별자에는 글자와 숫자, 달러 기호, 밑줄만 쓸 수 있음
	- 𝝿와 Ö같은 유니코드 문자도 쓸 수있음
	- 예약어는 식별자로 쓸 수 없음

식별자는 대문자로 시작하면 안된다
밑줄 하나 또는 두개로 시작하는 식별자는 아주 특별한 상황, 또는 ‘내부’ 변수에서만 사용

# 리터럴
리터럴이란 변수에 값을 할당할 때 사용 한 값 

```javascript
let test = "park" // park 는 리터럴 test는 식별자
```

# 원시 타입과 객체
원시 값 primitive 
객체 object

문자열과 숫자 같은 원시 타입은 불변함

Primitive type 6가지
	- 숫자
	- 문자열
	- 불리언
	- NULL
	- undefined
	- Symbol

원시 값과 달리 객체는 여러가지 형태와 값을 가질 수 있다
객체의 유연한 성질 때문에 커스텀 데이터 타입을 만들 때 객체를 많이 사용함

자바스크립트의 몇가지 내장된 객체 타입
	- Array
	- Date
	- RegExp
	- Map , WeakMap
	- Set, WeakSet


# 숫자 
다른 프로그래밍 언어와 마찬가지로 실제 숫자의 근사치를 저장할 때 IEEE-764배 정도 
Double-precision 부동소수점 숫자 형식을 사용
```javascript
let count = 10; // 숫자 리터럴
const blue = 0x0000ff; // 16진수
const umask = 0o0022; // 8진수
const roomTemp = 21.5; // 10진수
const c = 3.0e6; // 지수 (3.0 x 10^6 = 3,000,000)
const e = -1.6e-19; // 지수 (-1.6 x 10^-19)
const inf = Infinity; 
const ninf = -Infinity;
const nan = NaN; // 숫자가아님
```

NaN은 일종의 place holder

# 특수문자 
\n - 줄바꿈  (엄밀히 말해 ASCII / Unicode 10인 라인피드 문자)
\r - 캐리지 리턴
\t - 탭
\uXXXX - 임의의 유니코드 코드 포인트 XXXX는 16진수 코드 포인트임
\xXX 라틴-1 문자, XX 는 16진수 라틴-1 코드 포인트

### \n 과 \r 의차이는?
> 라인 피드(LF : Line Feed, 0x0a)  -> 캐럿을 다음 줄 ( 현재 위치에서 바로 아래) 로 이동  
> 캐리지 리턴(CR : Carriage Return)  -> 캐럿을 줄의 맨 앞으로 이동 시킨다.  
>   
> 줄바꿈에 대한 정의는 OS 마다 다름  
> - Unix/Linux : LF 만으로 줄 바꿈을 정의  
> - Window/Dos : CRLF 조합으로 줄 바꿈 정의   
> - C언어 : Unix와 동일  

\0 - NUL문자 (ASCII/Unicode 0)
\v - 세로 탭 (ASCII/Unicode 11)
\b - 백스페이스(ASCII/Unicode 8)
\f - 폼 피드 (ASCII/Unicode 12)
↳ 자주 안 쓰임

# 템플릿 문자열
값을 문자열 안에 써야 할 때 문자열 병합 concatenation 을 통해 변수나 상수값을 문자열 안에 쓸 수 있다.

```javascript
let currentTemp = 19.5;
//00b0은 온도를 나타내는 유티코드 코드 포인트
const message = "The current temperature is " + currentTemp + "\u00b0c";
```

ES6 이전에는 변수나 상수를 문자열 안에 쓰는 방법은 (외부 라이브러리를 사용하지 않으면) 문자열 병합 뿐이었다. ES6 에서는 **문자열 템플릿** 이라는 기능을 도입(문자열 채우기 라고도 부름)

이는 문자열의 정해진 위치에 값을 채워 넣는 간편한 방법. 문자열 템플릿에는 큰 따옴표나 작은 따옴표를 쓰지 않고 백틱을 사용

```javascript
let currentTemp = 19.5;
const message = `The current temperature is ${currentTemp}\n00b0c`;
```
문자열 템플릿 내에서는 달러기호가 특수문자가 됨
${}에 식별자를 쓰면 그 값이 문자에 삽입
$를 써야하면 이스케이프 하면됨

# 심볼
심볼(symbol)은 유일한 토큰을 나타내기위해 ES6에서 도입한 새 데이터 타입.
**항상 유일**
다른 어떤 심볼과도 일치하지 않음. 이런면에서 심볼은 객체와 유사함.
항상 유일한 점을 제외하면 심볼은 원시 값의 특징을 모두 가지고 있으므로 확장성 있는 코드를 만들 수 있음.

```javascript
const RED = Symbol(“TEST”);
const GREEN = Symbol(“TEST”);
RED === GREEN // false 
```

# 객체
원시 타입은 단 하나의 값만 나타낼 수 있고 불변이지만, 이와달리 객체는 여러가지 값이나 복잡한 값을 나타낼 수 있으며, 변할 수 도 있다. 객체의 본질은 *컨테이너* 이다
컨테이너의 내용물이 시간이 지나면서 바뀔 수 있지만, 내용물이 바뀐다고 컨테이너가 바뀌는 건 아니다. 여전히 같은 객체임.

객체중에도 중괄호, 즉 {과 }를 사용하는 리터럴 문법이 있다. 중괄호는 한 쌍 이므로 객체가 어디서 시작하고 어디에서 끝나는지 나타낼 수 있다.
```javascript
const obj = {}; // 빈 객체
```

> 객체의 콘텐츠는 프로퍼티(property) 또는 멤버 라고 부름.  
> 프로퍼티는 이름 (키)과 값으로 구성됨. 프로퍼티 이름은 반드시 문자열 또는 심볼이어야 하며 값은 어떤 타입이든 상관없고 다른 객체여도 괜찮음  
> p.92  

```javascript
obj.color = "yellow"; // obj에 color 프로퍼티를 추가
```


프로퍼티 이름에 유효한 식별자를 써야 멤버 접근연산자 ( . ) 를 사용할 수 있다. 프로퍼티 이름에 유효한 식별자가 아닌 이름을 쓴다면 계산된 멤버 접근 연산자 ( [] ) 를 써야 한다
~프로퍼티 이름이 유효한 식별자여도 대괄호 접근이 가능함.~
```javascript
obj["not an identifier"] = 3;
obj["not an identifier"]; // 3
obj["color"]; // yellow
```

심볼 프로퍼티에 접근할 때도 대괄호를 사용
```javascript
const SIZE = Symbol();
obj[SIZE] = 9;
obj[SIZE]; //9
```

이제 obj에는 “color” (유효한 식별자 문자열),  “ not an identifier” (유효한 식별자가 아닌 문자열), SIZE( 심볼 ), 3가지 프로퍼티가 있음

![](carbon.png)

[결과]
![](54F02526-8D60-461B-A26F-3776CD7AA911.png)

```javascript
const sam1 = {
    name : ‘Sam’,
    age : 4,
};

const sam2 ={ name: ‘Sam’, age :4};

const sam3 = {
    name : ‘Sam’,
    classification : {
        kingdom : ‘Anamalia’,
        phylum: ‘Chordata’,
        class : ‘Mamalia’,
        order : ‘Carnivoria’,
        family: ‘Felidae’,
        subfamily : ‘Felinae’,
        genus: ‘Felis’,
        species : ‘catus’,
    }
}

```
위 예제에선 객체 리터럴 문법에 따라 세가지 객체를 만들었다.
sam1과 sam2의 프로퍼티는 똑같지만, 둘은 서로 다른 객체임.
원시 값과는 반대이다. 값이 숫자 4인 두 변수는 같은 원시값을 가리킴.
*sam3의 classification은 이 자체가 객체임*

```javascript
sam3.speak = function () { return "Meow!";}; 
```
객체에 함수를 추가할 수 있다
1. 호출시엔
```javascript
sam3.speak(); // Meow!
```
2. 객체에서 프로퍼티 제거
```javascript
delete sam3.classfication; // classification 트리 전체가 삭제
delete sam3.speak; //speak 함수 삭제
```

# Number, String, Boolean 객체
*Number, String, Boolean 객체* 이 객체들에는 두 가지 목적이 있다.
1. Number.INFINITY 같은 특별한 값을 지정하는것
2. 아래와 같은 함수 형태로 기능을 제공 하는 것
```javascript
const s = “hello”
s.toUpperCase(); // hello 를 대문자로 HELLO
```

위의 예제에서 s 가 마치 객체처럼, 함수 프로퍼티를 가진 것 처럼 보이지만 s 는 원시 문자열 타입이다. 자바스크립트는 일시적인 String 객체를 만든것. 이 임시객체에 toUpperCase 함수가 들어가 있다. 자바스크립트는 함수를 호출 함과 동시에 임시객체를 파괴한다

```javascript
const s = "hello"
s.rating = 3; // 여기까지는 에러가 없음
console.log(s.rating);
```

결과
undefined

마치 문자열 s 에 프로퍼티를 할당하는 것 처럼 보이지만 사실은 일시적인 String객체에 프로퍼티를 할당 한것이다. 임시객체는 즉시 파괴 되므로 s.rating은 undefined

# 배열
자바스크립트 배열은 특수한 객체임. 일반적인 객체와 달리 항상 순서가 있고, 키는 순차적인 숫자이다.
자바스크립트 배열은 C언어의 효율적인 배열과 더 강력한 동적 배열, 링크드 리스트를 혼합한것.

특징
	- 배열의 크기는 고정되지 않음. 언제든 요소를 추가하거나 제거할 수 있음
	- 요소의 데이터 타입을 가리지 않음. 즉, 문자열만 쓸 수 있는 배열이라던가 숫자만 쓸 수 있는 배열 같은 개념이 아에 없음.
	- 배열 요소는 0 으로 시작

[배열 예제]
![](carbon%20(1).png)

```javascript
const arr = [‘a’,’b’,’c’];
console.log(arr.length);
console.log(arr[0]); *//배열의 첫번째 요소*
console.log(arr[arr.length -1]); *// 배열의 마지막에서 두번째 요소*
```

배열엔 요소 숫자를 반환하는 length 프로퍼티 존재
배열요소에 접근 할 땐 대괄호 안에 요소의 인덱스 숫자를 씀

배열의 요소의 값을 덮어쓸 때는 새 값을 할당 하면 됨.
길이가 다르면 배열 크기가 맞춰서 늘어남

# 날짜 
자바 스크립트의 날짜와 시간은 내장된 Date 객체에서 담당한다.

현재 날짜와 시간을 나타내는 객체를 만들 때는 new Date()를 사용
```javascript
const now = new Date();
console.log(now); // 2019-12-30T08:26:35.077Z
//특정 날짜와 시간에 해당하는 객체를 만들때

const myBirth = new Date(1996,4,21,19,0); //월은 0에서 시작해서 4는 5월

//날짜 객체를 가져오는 방법
myBirth.getFullYear();
myBirth.getMonth();
myBirth.getDate();
myBirth.getDay();
myBirth.getHours();
myBirth.getMinutes();
myBirth.getSeconds();
myBirth.getMilliseconds();


```
날짜 객체를 만들면 각 부분을 따로 가져올 수 도 있음.

# 정규표현식 regexp
문자열에서 필요한 복잡한 검색과 교체 작업을 비교적 단순하게 만든다.
정규식은 알기 때문에 패스

# 맵과 셋
ES6 에서는 새로운 데이터 타입 Map과 Set 그리고 그들의 ‘약한’ 짝인 WeakMap과 WeakSet을 도입했음. 맵은 객체와 마찬가지로 키와 값을 연결하지만, 특정 상황에서 객체보다 유리한 부분이있다. 셋은 배열과 비슷하지만 중복이 허용되지않는다. 위크맵과 위크셋은 맵과 셋과 마찬가지로 동작하지만, 특정상황에서 성능이 더 높아지도록 일부 기능을 제거한 버전임.

# 데이터타입 변환
데이터 타입을 다른 타입으로 바꾸는 일은 매우 자주 하는 작업임. 사용자 입력이나 다른 시스템에서 가져온 데이터를 그대로 쓸 수 있는 경우는 별로 없고, 대개 변환해야함. 

# 문자열을 숫자로
	1. Number 객체 생성자 사용하는 법.
```javascript
const numStr ="33.3";
const num = Number(numStr);
console.log(typeof num +" "+ num);

//number 33.3
```

	숫자로 바꿀 수 없는 문자열에서는 NaN이 반환된다.

	2. 두 번째 방법은 내장 함수인 parseInt 나 parseFloat 함수를 사용하는 방법
Number생성자와 비슷하게 동작하지만 몇가지 다른점은 parseInt를 사용할 때는 		기수를 넘길 수 있다. 기수로 변환할 문자열이 몇 진수 표현인지 지정한다. 예를들어 16진수를 변환할때는 기수로 16을 넘긴다. 기수 기본값은 10이므로 10지눗 표현을 변환할 때는 기수를 쓰지 않아도 결과는 같지만, 항상 기수를 명시하기를 권장한다. 그 뒤의 문자열은 무시한다.
```javascript
const a = parseInt("16 volts", 10) // "volts는 무시되고 10진수 16
const b = parseInt("3a",16); // 16진수 3a를 10진수로 => 58
const c = parseFloat("15.5 kph");// parseFloat는 항상 기수가 10이라고 가정 -> 15.5
```

Date 객체를 숫자로 바꿀 때는 ValueOf() 메서드를 사용한다. 이 숫자는 UTC 1970년 1월 1일 자정으로부터 몇 밀리초가 지났는지 나타내는 숫자임.

```javascript
const d = new Date();
const ts = d.valueOf();
console.log(ts);

const times = new Date(‘2020-01-02T06:36:40.822Z’);
console.log(times.toString())
```
결과

![](47A8C85C-7BF8-48A9-B2EC-0474DA899690.png)

불리언 값을 1(true)이나 0 (false)로 바꿔야 할 때도 있다. 이렇게 변환할때는 조건 연산자 사용
```javascript
const b = true;
const n = b ? 1 : 0;
```

# 문자열로 변환
**자바스크립트의 모든 객체에는 문자열 표현을 반환하는 toString() 메서드가 있음**
사실 tostring()메서드를 사용할 일은 별로 많지 않지만. 문자열 병합에서 자동으로 숫자를 문자열로 변환하므로, 숫자를 문자열로 직접 바꿀일은 별로 많지 않다. 어떤 경우든 숫자를 문자열로 바꿔야한다면, toString() 메서드는 잘 동작하고 상식적인 결과를 반환함.

```javascript 
const n = 33.5;
const s = n.toString();
```

Date 객체의 toString() 메서드는 좀 길긴 하지만 쓸만한 결과를 반환한다. 하지만 대부분의 객체는 아무 짝에도 쓸모없는 문자열 “[object Object]”를 반환함.
배열의 toString() 메서드는 각 요소를 문자열로 바꾼 다음 쉼표로 연결한 문자열을 반환함
```javascript
//배열 toString객체사용
const arr = [1,true,"hello"];
const arrToString = arr.toString();
console.log(arrToString);
console.log(typeof arrToString);
```

결과는 예상 했듯
```
1,true,hello
string
```

# 불리언으로 변환
간략히..
값에 부정연산자 ( ! ) 를 써서 값을 Bolean 값으로 변환할 수 있음.

- - - -

## 참조형과 원시형 정리
- 원시 값은 불변이고, 원시 값을 복사/전달할 때는 값 자체를 복사/전달 한다. 따라서 원본의 값이 바뀌더라도 사본의 값이 바뀌지 않는다.
```javascript
let a = 1 ;
let b = a;
a = 2; // 원본의 값이 바뀌지만 사본의 값은 바뀌지 않음.
console.log(a , b); // 2 1
```

원시 값 자체를 복사해서 a에 전달 했으므로 
```javascript
a === 2 // true
```
변수와 값은 일치함.

- 값 자체를 전달하므로 함수 안에서 변수의 값이 바뀌어도 함수 외부에서는 바뀌지 않은 상태로 남는다.
```javascript
function change (c) {
    c = 5
}
c = 3;
change(c);
console.log(c); //3
```

- 객체는 가변이고, 객체를 복사/전달할 때는 객체가 아니라 그 객체를 가리키고 있다는 사실(참조)을 복사/전달 한다. 따라서 원본이 바뀌면 사본도 따라서 바뀜. 이런 특징을 강조할 때 객체 참조 타입이라고 부르기도 함.
```javascript
let o ={a:1};
let p = o; // p는 o가 가리키고 있는 것 을 가리키는것.
o.a = 2;
console.log(p); //{ a: 2 }
```

아래 예제를 보자
```javascript
let k = {a:1};
let j = k; // j는 k가 가리키고 있는 것을 가리킴
k === j; // true
k = {a:2}; // k는 이제 다른것을 가리킴. {a:1}을 수정한 것이 아님.
k === j; // false
console.log(j); //{ a: 1 }
```
라인 2 에서 j 는 k가 가리키고 있는 것을 가리키게 되고
라인 4에서는 k가 가리키는것을 {a : 2} 로 바꾼다
이과정에서 j는 {a:1}을 가리키고 있고 k는 {a:2}를 가리키고 있기 때문에
둘은 서로 다르다.

-  객체를 가리키는 변수는 그 객첼흘 가리키고 있을 뿐 객체 자체가 아니다. 따라서 객체와 변수는 일치 하지 않음.
```javascript
let q = {a:1};
q === {a:1} // false
```

- 참조 전달
```javascript
function change_x( x ){
    x.a = 123;
}

let x = {a:1};
change_x(x);
console.log(x); /// { a: 123 }
```

참조를 전달하므로 함수 내에서 객체를 변경하면 함수 외부에서도 바뀜.
