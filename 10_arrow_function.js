// Arrow-Function : 화삺표 함수
// 자바의 람다 표현식과 유사
// 기존 함수
function multi(x, y) {
  return x * y;
}

const multiply = function (x, y) {
  return x * y;
};

console.log(multi(2, 3));
console.log(multiply(2, 3));

// 화살표 함수로 변환
// 1. 기본 모양
const mul_01 = (x, y) => {
  return x * y;
}

// 2. 리턴 값이 한줄이면 {} 와 return 생략 가능
const mul_02 = (x, y) => x*y;
console.log(mul_02(5, 6));

// parameter가 한개면 ()도 생략가능
const mul_03 = x => x*2;
console.log(mul_03(9));

// Rest Parameter (...) : 가변인수 - 받은 arguments를 전부 args라는 배열에 저장
const multiplyAll = function(...args){
  let result = Object.values(args)
    .reduce((a,b) => a*b,1);
  return result;
}
console.log(multiplyAll(2,3,4,5,6,7,8,9));

// 즉시 실행 함수
// 선언과 동시에 실행되는 함수
console.log(
  (function (x, y) {
    return x * y;
  })(4, 5),
);