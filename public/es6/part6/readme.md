# 함수 
[함수의 선언과 반환은 간략히..]
```javascript
function getGreeting(){ // 선언
    return “Hello, World”; //반환
}

```

자바스크립트에서는 함수도 객체다.  따라서 다른 객체와 마찬가지로 넘기거나 할당할 수 있다. 함수 식별자 뒤에 괄호를 쓰면 자바스크립트는 함수를 호출하려 한다고 이해하고, 함수 바디를 실행한다. 그리고 함수를 호출한 표현식의 반환 값이 된다. 
```javascript
console.log(getGreeting()); //Hello, World

console.log(getGreeting); //[Function: getGreeting]
```

괄호를 쓰지 않으면 다른 값과 마찬가지로 함수를 참조하는 것이며, 그함수는 실행되지 않는다.
이러한 특징은 자바스크립트를 매우 유연한 언어로 만들어준다. 예를 들어 함수를 변수에 할당하면 다른 이름으로 함수를 호출할 수 있다.
```javascript
const f = getGreeting;

console.log(f()); // Hello, World
```

함수를 객체 프로퍼티에 할당할 수도 있다.

```javascript
const o = {};
o.f=getGreeting;
console.log(o.f()); // Hello, World
```

배열 요소로 할당.
```javascript
const arr = [1,2,3];
arr[1] = getGreeting;
var i;
for(i=0;i<3;i++){
    console.log(arr[i]()); 
}
//arr은 이제 1,[Function: getGreeting],3
// arr[1] = [Function: getGreeting]
// arr[1]() = Hello, World
```

위의 예제를 통해 자바스크립트에서 괄호가 붙으면 그 값을 함수로 간주하고 호출한다는 것을 알 수  있다. arr[1]은 값이 되는 표현식이지만 arr[1]()은 함수로 간주하고 호출한다.
-> 함수가 아닌 값뒤에 괄호를 붙이면 에러가남.

# 함수와 매개변수(argument, parameter)
```javascript
function avg(*a*,*b*){
    return (a+b)/2;
}
```
이 함수 선언에서 a,b를 정해진 매개변수(formal argument)라고 한다. 함수가 호출 되면 매개 변수는 값을 받아 실제 매개변수(actual argument)가 된다.

```javascript
console.log(avg(5,10)); //7.5
```
이 예제에서 정해진 매개변수 a와 b는 각각 값을 5와 10을 받아 실제 매개변수가 된다. 매개변수는 변수와 매우 비슷하지만 함수 바디 안에서만 존재한다.

```javascript
function f(*x*){
    console.log(`f 내부: ${x}`);
    x=5;
    console.log(`f 내부 : ${x} (할당후)`);
}

let x= 3;
console.log(`f를 호출하기 전 : ${x}`);
f(x);
console.log(`f를 호출한 이후 : ${x}`);
```

결과
```
f를 호출하기 전 : 3
f 내부: 3
f 내부 : 5 (할당후)
f를 호출한 이후 : 3
```

중요한 것은 함수 안에서 x에 값을 할당해도 함수 바깥의 변수 x에는 아무런 영향도 없다는 것이다. 이름만 같고 둘은 다른 개체다.

하지만

함수안에서 객체 자체를 변경하면, 그 객체는 함수 바깥에서도 바뀐 점이 반영 된다.
```javascript
function f(o){
    o.message = `f안에서 수정함 (이전 값 : '${o.message}')`;
}

let o = {
    message:"초기 값"
};

console.log(`f를 호출하기 전:o.message="${o.message}"`);
f(o);
console.log(`f를 호출한 다음: o.message="${o.message}"`);

```

위의 예제를 보면 함수 f 안에서 객체 o를 수정했고 이렇게 바꾼 내용은 함수 바깥에서도 o에 그대로 반영되는 것을 알 수 있다.
이것이 원시 값과 객체의 핵심적인 차이다. 원시 값은 불변이므로 수정할 수 없다. 원시 값을 담은 변수는 다른값으로 바꿀 수 있지만 원시값 자체는 바뀌지 않는다. 반면 객체는 바뀔 수 있다.

좀더 명확히 말해서 함수 안의 o와 바깥의 o는 서로 다른 개체이다. 하지만 둘은 같은 객체를 가리키고 있다. 
```javascript
function f(*o*){
    o.message = “f에서 수정함”;
    o = {
        message : “새로운 객체!”
    };
    console.log(`f 내부 : o.message="${o.message}"(할당후)`);
}

let o = {
    message : “초기값”
};

console.log(`f를 호출하기 전: o.message"${o.message}"`);
f(o);
console.log(`f를 호출한 다음:o.message="${o.message}"`);
```
위의 예제의 결과는
```
f를 호출하기 전: o.message"초기값"
f 내부 : o.message="새로운 객체!"(할당후)
f를 호출한 다음:o.message="f에서 수정함"
```

 핵심은 함수 내부의 매개변수 o와 함수 바깥의 변수 o가 다르다는것.
f를 호출하면 둘은 같은 객체를 가리키지만 f내부에서 o에 할당한 객체는 새로운, 전혀다른 객체임. 
함수 바깥의 o는 여전히 원래 객체를 가리키고 있음.

> 컴퓨터 과학에서는 자바스크립트의 원시값을 값 타입 ( value type) 이라고 말함. 원시 값을 전달할 때 값이 복사되기 때문. 객체는 참조타입(reference type)이라고 부름. 객체를 전달할 때 두 변수는 같은 객체를 가리킴


# 매개변수가 함수를 결정하는가
여러 언어에서 함수의 signature에는 매개변수가 포함된다. 예를 들어 C언어에서 매개 변수 없는 함수 f()는 매개변수가 하나인 함수 f(x)와 다르고, f(x)는 매개변수가 두 개인 함수 f(x, y)와다름. ~자바스크립트에는 그런 차이가 없음. 매개변수를 한 개 전달하든 열 개 전달하든 같은 함수를 호출하는 것임.~

다시말해, 어떤 함수를 호출하든 그 함수에서 정해진 매개변수 숫자와 관계없이 몇 개의 매개변수를 전달해도 됨. 정해진 매개변수에 값을 제공하지 않으면 암시적으로 undefined가 할당됨.

```javascript
function f(x){
    return `in f: x=${x}`;
}
console.log(f()); //in f: x=undefined
```

# 매개변수 해체
매개변수도 해체할 수 있다. 매개변수는 여러 면에서 변수와 거의 비슷하다.)
```javascript
function getSentence({subject,verb,object}){
    return `${subject} ${verb} ${object}`;
}

const o = {
    subject: “I”,
    verb: “love”,
    object:”JavaScript”,
};

console.log(getSentence(o)); // I love JavaScript*
```

해체 할당과 마찬가지로 프로퍼티 이름은 반드시 유효한 식별자여야 하고, 들어오는 객체에 해당 프로퍼티가 없는 변수는 undefined를 할당 받는다.


확산 연산자( … ) 를 써서 남는 매개변수를 이용할 수 있다.
---
> 확산연산자 [추가 설명]
> es6에서 추가된 문법으로 ( … ) 을 사용해서 다중인수(함수호출) 또는 다중요소(문자배열)들이 예상되는 곳에서 확장될 수 있는 표현을 하게합니다.

```javascript
var parts = [‘shoulder’, ‘knees’];
var lyrics = [‘head’, …parts, ‘and’, ‘toes’];

function f(x, y, z) { }
var args = [0, 1, 2];
f(...args);

```
---

```javascript
function addPrefix(prefix, …words){
    const prefixedWords = [];
    for(let i = 0; i< words.length; i++){
        prefixedWords[i] = prefix + words[i];
    }
    return prefixedWords;
}

console.log(addPrefix(“con”,”verse”,”vex”)); 
// [“convers”,”convex”]
```

함수를 선언할 때 확산 연산자는 반드시 마지막 매개변수여야 한다. 확산 연산자 뒤에 다른 매개변수가 있으면 자바스크립트는 전달된 값 중 어디까지나 확산 매개변수에 할당해야하는지 판단할 수 없어서 에러를 일으킨다.

# 매개변수 기본값
ES6 에서는 매개변수에 기본값 default value를 지정하는 기능도 추가됨. 일반적으로 매개변수에 값을 제공하지 않으면 undefined가 값으로 할당됨. ES6에서는 기본값을 지정할 수 있다.
```javascript
function f(a,b = "defualt", c = 3){
    return `${a}-${b}-${c}`;
}

console.log(f(5,6,7));
console.log(f(5,6));
console.log(f(5));
console.log(f());
```
결과
```
5-6-7
5-6-3
5-defualt-3
undefined-defualt-3
```

# 객체의 프로퍼티인 함수
객체의 프로퍼티인 함수를 메서드 (method) 라고 불러서 일반적인 함수와 구별한다. 
```javascript
const o1 = {
    name : 'jiwon', *// 원시 값 프로퍼티*
    speak : function(){return 'help';}, *// 함수 프로퍼티(메서드)*
}
// 아래는 ES6에서 간편하게 메서드를 추가할 수 있는 문법임. 위 아래 동일함.
const o2 = {
    name : 'jiwon', *// 원시 값 프로퍼티*
    speak() {return 'help';}, *// 함수 프로퍼티(메서드)*
}
```

# this 키워드
함수 바디안에는 특별한 읽기 전용 값인 this 가 있다. this 는 일 반적으로 객체지향 프로그래밍 개념에 밀접한 연관 이 있다. 
자바스크립트에서는 객체지향 프로그래밍 말고도 this 를 사용하는 여러가지 방법이 있다.
일반적으로 this는 객체의 프로퍼티인 함수에서 의미가 있다. 메서드를 호출하면 this는 호출한 메서드를 소유하는 객체가 된다.

```javascript
const o = {
    name : 'jiwon',
    speak() {return `My name is ${this.name}!`;},
}
console.log(o.speak()); //My name is jiwon!
```

o.speak()를 호출하면 this는 o에 묶인다.

**~this 는 함수를 어떻게 선언했느냐가 아니라 어떻게 호출했느냐에 따라 달라진다.~**
즉, this가 o에 묶인 이유는 speak가 o의 프로퍼티여서가 아니라, o 에서 speak를 호출 했기 때문임.


### 같은 함수를 변수에 할당하면 어떻게 되나?
[image:8486A3DF-9162-4B5F-BD88-EF0AFF894A42-270-00007F91555C3A1F/comments-solid.png]

speak();
함수를 이렇게 호출하면 자바스크립트는 이 함수가 어디에 속하는지 알 수 없으므로 this는 undefined에 묶인다.

> 자바스크립트에서 함수의 this는 다른언어들과 조금 다르게 동작한다.
> 또한 strict mod(엄격 모드)인지 non-strict mod(비엄격 모드)인지도 동작에서 일부 차이가 있다. 대부분은 위에서 언급했듯 함수를 호출한 방법이 결정한다.

메서드라는 용어는 원래 객체지향 프로그래밍의 개념이지만, 이 글에서는 객체의 프로퍼티이며 o.speak()처럼 객체 인스턴스에서 호출할 의도로 만든 함수라는 뜻으로 사용합니다. 함수에서 this 를 사용하지 않으면 어디에서 선언했든 관계 없이 함수라고 부름.


메서드안에 보조 함수가 있는 예제
```javascript
1.
const o = {
    name : 'Julie',
    greetBackwards : function(){
        function getReverseName(){
            let nameBackwords ='';
            for (let i=this.name.length-1; i>=0; i--){
                nameBackwords += this.name[i];
            }
            return nameBackwords;
        }
        return `${getReverseName()} si eman ym, olleH`;
    },
};
console.log(o.greetBackwards());
------------------------------------------------------------
2.
const o ={
    name :'Julie',
    greetBackwards:function(){
        const self = this;
        function getReverseName(){
            let nameBackwards = '';
            for(let i=self.name.length-1; i>=0; i--){
                nameBackwards += self.name[i];
            }
            return nameBackwards;
        }
        return `${getReverseName()} si eman ym, olleH`;
    },
};
console.log(o.greetBackwards());

```

앞의 예제는 이름을 거꾸로 쓰고자 중첩된 함수 get ReverseName을 사용했다. 하지만 getReverseName 은 의도한 대로 동작하지 않는다. o.greetBackwards()를 호출하는 시점에서 자바스크립트는  this를 의도한대로 o에 연결하지만 , greetBackwards안에서 getReverseName을 호출하면 this 는 o 가 아닌 다른것에 묶인다. 이런문제를 해결하기 위해 다른변수에 this를 할당하는 것이 아래 예제 (2번)
널리 쓰이는 방법이며 this를 self나 that에 할당하는 코드를 자주 볼 수 있다.

# 함수 표현식과 익명 함수
```javascript
console.log(notHoisted) // undefined 
//even the variable name is hoisted, the definition wasn't. so it's undefined.
notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function() {
   console.log('bar');
};
```
함수 표현식은 함수 선언과 다르게 끌어올려지지 않는다.
정의전에는 사용할 수 없.
함수를 선언하면 함수에 바디와 식별자가 모두 주어짐. 자바스크립트는 익명함수도 지원함. 익명함수는 식별자가 주어지지 않는다.

아래는 함수 표현식을 쓰고 그 결과를 변수에 할당하는 예제.
```javascript
const f = function(){
};
```

이는 지금 까지의 함수 선언과 같다. 식별자 f가 이 함수를 가리킨다. 차이는 먼저 함수 표현식으로 익명함수를 만들고 그 함수를 변수에 할당한 것.

익명함수는 어디든지 쓸 수 있다. 다른 함수나 메서드의 매개변수로 넘길 수도 있고, 객체의 함수 프로퍼티가 될 수도 있다. 

```javascript
const g = function f(){
}
```

이런식으로 함수를 만들면 이름 g에 우선순위가 있음. 그리고 함수 바깥에서 함수에 접근할때는 g를 써야하고 f로 접근하려하면 변수가 정의되지 않았다는 에러가 생김
함수 내부에서는 f 를 써서 자신을 호출하고 외부에서는 g를 써서 호출함.

# 화살표 표기법
ES6에서 새로만든 화살표 표기법은 간단히 말해 function 이라는 단어와 중괄호 숫자를 줄이려고 고안된 단축 문법임. 
화살표 함수에는 세 가지 단축 문법이 있음.
	- function 을 생략해도됨
	- 함수에 매개변수가 단 하나 뿐이라면 괄호( ) 도 생략할 수 있음
	- 함수 바디가 표현식 하나라면 중괄호와 return 문도 생략할 수 있다

화살표 함수는 항상 익명임. 화살표 함수도 변수에 할당할 수 는 있지만, function 키워드 처럼 이름 붙은 함수를 만들 수는 없다.
 
```javascript
const f1 = function () { return “hello”; }
const f1 = () => “hello”;

const f2 = function(name) { return `hello, ${name}!`;}
const f2 = name => `hello, ${name}!`;

const f3 = function(a,b){ return a + b; }
const f3 = (a,b) => a+b;
```

화살표 함수는 this가 다른 변수와 마찬가지로 정적으로 (lexically ) 묶인다. 
위는 내부 함수 안에서 this를 사용할 수 있다.

```javascript
const o = {
    name : ‘Julie’,
    greetBackwards : function(){
        const getReverseName = () =>{
            let nameBackwords =‘’;
            for (let i=this.name.length-1; i>=0; i—){
                nameBackwords += this.name[i];
            }
            return nameBackwords;
        }
        return `${getReverseName()} si eman ym, olleH`;
    },
};
console.log(o.greetBackwards());

```

화살표 함수에는 일반적인 함수와 다른 점이 두 가지 더 있다. 화살표 함수는 객체 생성자로 사용할 수 없고, arguments 변수도 사용할 수 없다. 하지만 ES6에서 확산연산자가 생겼으니 argument 변수는 필요가 없긴 함.

# call, apply, bind
Call 메서드는 모든 함수에서 사용할 수 있으며 this 를 특정 값으로 지정할 수 있음.
```javascript
const bruce = { name : “Bruce”};
const Madeline = { name : “Madeline”};

*//이 함수는 어떤 객체에도 연결되지 않았지만 this를 사용*
function greet(){
    return `Hello, I'm ${this.name}`;
}

console.log(greet());
console.log(greet.call(bruce));
console.log(greet.call(Madeline));
```

결과
```
Hello, I'm undefined
Hello, I'm Bruce
Hello, I'm Madeline
```

함수를 호출하면서 call 을 사용하고 this로 사용할 객체를 넘기면 해당 함수가 주어진 객체의 메서드인 것처럼 사용할 수 있다. call의 첫 번째 매개변 수는 this 로 사용할 값이고, 매개 변수가 더 있으면 그 매개변수는 호출하는 함수로 전달됨.

```javascript
function update(birthYear, occupation){
    this.birthYear = birthYear;
    this.occupation = occupation;
}

update.call(bruce, 1949, 'singer');
    //bruce는 이제 { name: "Bruce", birthYear:1949, occupation: "singer"}임

```

Apply 는 함수 매개변수를 처리하는 방법을 제외하면 call과 완전 같음. call은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만 apply는 매개변수를 배열로 받음

```javascript
update.apply(bruce,[1955, “actor”]);
//bruce 는 이제 {name : “Bruce”, birthYear: 19565, occupation: “actor”}
```

apply는 배열 요소를 함수 매개변수로 사용해야 할 때 유용함. apply 를 설명할 때 흔히 사용하는 예제는 배열의 최솟값과 최댓값을 구하는것. 자바스크립트의 내장 함수인 Math.min과 Math.max 는 매개변수를 받아 그중 최솟값과 최댓값을 각각 반환함. aplly를 사용하면 기존 배열을 이들 함수에 바로 넘길 수 있음.
```javascript
const arr = [2,3,-5,15,7];
Math.min.apply(null, arr); // -5
Math.max.apply(null, arr); // 15
```

this의 값에 null을 쓴 이유는 Math.min과 Math.max가  this와 관계없이 동작하기 때문임.



```javascript
const newBruce = [1940, “martial artist”];
update.call(bruce, …newBruce); // apply(bruce, newBruce)  와 같음.
Math.min(…arr);
Math.max(…arr);
```

ES6의 확산 연산자( … ) 를 사용해도 apply와 같은 결과를 얻을 수 있음. update 메서드는 this 값이 중요하므로 call 을 사용해야 하지만, Math.min 같은건 this값이 뭐든 관계없으므로 확산연산자를 그대로 사용할 수 있음.

this 의 값을 바꿀 수 있는 마지막함수는 bind.
bind를 사용하면 함수의  this 값을 영구히  바꿀 수 있음. Update 메서드를 이리저리 옮기면서도 호출할 때 this 값은 항상 bruce가 되게끔, call이나 apply, 다른 bind와 함께 호출하더라도 this 값이 bruce가 되도록 하려면 bind를 사용함.

```javascript
const updateBruce = update.bind(bruce);

updateBruce(1904, “actor”);
//brcue는 이제 { name : “Bruce”, birthYear: 1904, occupation: “actor” }
updateBruce(Madeline, 1274, “king”);
//bruce는 이제 { name : “Bruce”, birthYear: 1274, occupation : “king” }
//Madeline 은 변하지 않음.
```

bind는 함수의 동작을 영구적으로 바꾸므로 찾기 어려운 버그의 원인이 될 수 있다. bind를 사용한 함수는 call 이나 apply 다른 bind와 함께 사용할 수 없는 거나 마찬가지다. 함수를 여기저기서 call이나  apply로 호출해야하는  this값이 그에 맞춰 바뀌어야 하는 경우에 bind를 사용하면 문제가 생김. 

bind에 매개변수를 넘기면 항상 그 매개변수를 받으며 호출되는 새 함수를 만드는 효과가 있음. 예를들어  bruce가 태어난 해를 항상 1949로 고정하지만, 직업은 자유롭게 바꿀 수 있는 업데이트 함수를 만드록 싶다면 다음과 같이 하면됨

```javascript
const updateBruce1949 = update.bind(bruce ,1949);
updateBruce1949(“singer, songwriter”);
//bruce는 이제 { name : “Bruce”, birthYear:1949, occupation: “singer. songwriter” } 
```