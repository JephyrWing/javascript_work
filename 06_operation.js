// == : 값만 비교
// === : 값과 타입 둘 다 비교
console.log(5 == "5");
console.log(5 === "5");
console.log(5 !== "5");
console.log(3 >= 5);

// 삼항 연산
console.log(10 > 0 ? "크다" : "작다");

// 단축 평가(***)
// or(||)이면, 전자가 참이면 후자를 안 봐도 참이 판단되므로 전자 출력, 전자가 거짓이면 후자를 봐야 참거짓 판단이 되므로 후자 출력
// and(&&)면, 전자가 참이면 후자를 봐야 참거짓 판단이 되므로 후자 출력, 전자가 거짓이면 이미 거짓이 판된되므로 전자 출력
// or는 true가 나오면 true 값 반환하고 종료(오참종), and는 false가 나오면 false 값 반환하고 종료(앤폴종) 
console.log(true || "아이브");
console.log(false || "아이브");
console.log(true && "아이브");
console.log(false && "아이브");
console.log(true && true && "아이브");
console.log(true && false && "아이브");

// 값이 없으면 기본값 사용
let input = "홍길동";
let input2;
const userName = input || "익명";
const userName2 = input2 || "익명";
console.log(userName);
console.log(userName2);

// null 병합 연산자
console.log('-------------------------------------------------');
let name;
console.log(name);
// ?? : name이 null or undefined이 아니면 출력, null이면 다음 것 출력 
name = name ?? '안유진';

// optional changing - 없으면 에러대신 undefined 반환