// 변수 선언
const a = 1;
const b = 2;
console.log(a, b);

// 구조 분해 할당 : 배열형태로 선언하는 것으로 각각의 값을 한번에 선언한 것이 됨
let [x, y] = [10, 20];
console.log(x);
console.log(x, y);

[x, y] = [y, x];
console.log(x, y);

console.log("==============================================");
const sumEvenBetween = (x, y) => {
  // x, y를 비교해서 x가 크면 두 수를 바꿈
  if (x > y) [x, y] = [y, x];
  let sum = 0;
  for (let i = x; i <= y; i++) {
    if (i % 2 == 0) sum = sum + i;
  }
  return sum;
};
console.log(sumEvenBetween(y, x));
