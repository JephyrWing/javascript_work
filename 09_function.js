// 함수 (function 으로 정의)
// function 함수이름(매개변수){
//   return ; 돌려줄 값이 있을 경우
// }

// number를 받아서 5을 곱하고 2로 나눈 나머지를 출력

function calculate(number) {
  return (number * 5) % 2;
}
console.log(calculate(3));

// 두 수 x, y를 받아서 두 수를 곱하는 함수를 만들고 호출
// 함수의 이름을 multiply, x = 2, y = 4
function multiply(x, y) {
  return x * y;
}
console.log(multiply(2, 4));

// default parameter
// 두 수를 받아서 빼는 함수 : minus(x, y)
// y 값이 주어지지 않을 경우 : y = 1
function minus(x, y = 1){
  return x-y
}
console.log(minus(4));
console.log(minus(4, 3));
