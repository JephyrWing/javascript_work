// 정렬
let numbers = [1, 10, 7, 5, 3];

console.log(`정렬 전 : ${numbers}`);
// numbers.sort();
// 문자열 기준으로 정렬하기에 제대로 정렬되지 않음
// console.log(`정렬 후 : ${numbers}`);

// 일반적인 숫자배열의 정렬 방법
// 결과 음수 : a를 앞에
// 결과 양수 : b를 앞에
// 결과 0 : 순서 유지
// numbers.sort((a, b) => (a > b ? 1 : -1));
// console.log(`정렬 후 : ${numbers}`);

// 간단하게 쓴 개량 버젼
// 오름차순
numbers.sort((a, b) => a - b);
console.log(`정렬 후 : ${numbers}`);

// 내림차순
numbers.sort((a, b) => b - a);
console.log(`정렬 후 : ${numbers}`);

// 한글과 영문 비교
const fruits = ["banana", "apple", "orange", "파인애플", "사과"];
const name = ["홍길동1", "홍길동10", "홍길동4", "김철수", "박영희"];
// 언어별 지역에 해당하는 정렬방식
// 오름차순
fruits.sort((a, b) => a.localeCompare(b));
console.log(`오름차순 : ${fruits}`);

name.sort((a, b) => a.localeCompare(b));
console.log(`오름차순 : ${name}`);

// 내림차순
fruits.sort((a, b) => b.localeCompare(a));
console.log(`내림차순 : ${fruits}`);

//Object 내부의 값을 기준으로 비교 후 정렬
numbers.sort((a, b) => {
  if (a > b) return 1; // 양수면 b를 앞
  if (a < b) return -1; // 음수면 a를 앞
  return 0; // 변화 X
});

// map() 함수 : 자바의 스트림과 유사 / 원본을 바꾸지는 않음.
// 모든 요소를 변환
console.log(name.map((x) => `이름 : ${x}`));
console.log(`원본 name : ${name}`);
// 김철수만 "이름 : "을 앞에 붙여서 출력
console.log(
  name.map((x) => {
    if (x === "김철수") {
      return `이름 : ${x}`;
    }
    return x;
  }),
);

// 리액트에서 반복 출력시 기본으로 사용되는 방법
console.log(
  name.map((x, idx) => {
    if (x === "김철수") {
      return `${idx} : ${x}`;
    }
    return x;
  }),
);

console.log("==========================================");

// 필터링 : filter()
numbers = [1, 8, 7, 5, 3];
// 배열을 복사해서 data에 넣고, 맨 앞에는 0, 맨 뒤에 10 추가
let data = [0, ...numbers, 10];

// 짝수만 출력
console.log(data);
console.log(data.filter((x) => x % 2 == 0));

// 3보다 큰 수를 오름차순 정렬 출력
console.log(data.filter((x) => x > 3).sort((a, b) => a - b)); // 체이닝 방식
