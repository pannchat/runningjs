'use strict'; //es6 기능 : 블록 스코프 변수 선언

var sentences = [{
  subject: 'Javascript',
  verb: 'is',
  object: 'great'
}, {
  subject: 'Elephants',
  verb: 'are',
  object: 'large'
}]; //es6기능: 객체분해

function say(_ref) {
  var subject = _ref.subject,
      verb = _ref.verb,
      object = _ref.object;
  //es6 기능: template 문자열
  //아래에 사용한 것은 따옴표가아니라 백틱(`) 한글로 되어있으면 ₩로 나옴
  console.log("".concat(subject, " ").concat(verb, " ").concat(object));
} //es6 기능 : for..of


for (var _i = 0, _sentences = sentences; _i < _sentences.length; _i++) {
  var s = _sentences[_i];
  say(s);
}