// var 타입 사용을 왜 자제해야 할까?
console.log(name);
var name = "CHOI";
// 원래는 출력 뒤에 나중에 선언하면 오류가 나야 하는데, var로 선언하면 undefined를 출력하며 오류가 안 떠버림 = 변수 호이스팅

//let과 const는 출력 전에 먼저 선언되고 초기화 되어야 함.
console.log(hong);
let hong = "홍길동";
