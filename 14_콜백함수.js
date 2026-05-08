// 콜백(Callback) 함수 : 나중에 필요할 때 실행될 함수

function greet(name, callback) {
  console.log("안녕하세요", name + "님");
  callback();
}

function afterGreeting() {
  console.log("오늘도 맛점하세요.");
}

function beforeGreeting() {
  console.log("아침 식사 맛있게 하세요.");
}

greet("홍길동", afterGreeting); //callback으로 불러 올 땐 함수의 이름만 쓰고 괄호는 쓰지 않는다.
greet("홍길동", beforeGreeting);

console.log("===========================================================");

// setTimeout 함수는 특정 시간 이후에 실행할 함수를 정의
setTimeout(function () {
  console.log("3초가 지났어요.");
}, 3000); // 1000 = 1초 
console.log("===========================================================");
// 3초가 세어지는 동안 코드가 멈추는 것이 아니라, 3초 동안 다음 코드들이 실행됨(비동기 방식)

// 함수의 참조를 전달
function sayHello() {
  console.log("안녕하세요~!");
}
let t_1 = setTimeout(sayHello, 2000);
console.log("===========================================================");
// 2초 지나고 아래꺼 먼저 실행되고, 그 후 1초 뒤 위에꺼가 실행된다 => 같은 타이머
// 다른 타이머로 변경
let t_2 = setTimeout(sayHello, 2000);

// 타이머를 취소하기
clearTimeout(t_1);
