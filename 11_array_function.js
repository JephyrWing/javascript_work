// 배열에서 제공되는 기본함수의 기능을 살펴봅니다.
// 배열의 추가, 삭제, 수정
// 배열의 정렬, 변환, 필터 기능

let iveMembers = ["안유진", "가을", "레이", "리즈", "이서"];

// 원본을 변경하는 함수

// 맨 뒤에 추가하기
console.log(`원본 : ${iveMembers}`);
iveMembers.push("장원영");
console.log(`추가 후 : ${iveMembers}`);

// 맨 앞에 추가하기
console.log(`원본 : ${iveMembers}`);
iveMembers.unshift("홍길동");
console.log(`추가 후 : ${iveMembers}`);

// 맨 뒤 꺼 삭제 후 삭제한 요소 리턴
console.log(iveMembers.pop());
console.log(`맨 뒤 삭제 후 : ${iveMembers}`);

// 맨 앞 꺼 삭제 삭제한 요소 리턴
console.log(iveMembers.shift());
console.log(`맨 앞 삭제 후 : ${iveMembers}`);

// 임의의 위치 삭제 : 색인(0 부터 시작, 범위로 지정도 가능) 삭제한 요소 배열로 리턴
console.log(iveMembers.splice(2, 1)); // index 2부터 1개만 삭제
console.log(`2번 index 삭제 후 : ${iveMembers}`);

// 임의의 위치 삽입
iveMembers.splice(3, 0, "장원영", "레이"); // 범위를 0으로 하고 그 뒤에 추가할 요소를 넣으면 삭제가 아니라 추가가 됨
console.log(`3번 index에 추가 : ${iveMembers}`);

// 정렬
iveMembers.sort();
console.log(`정렬 : ${iveMembers}`);
iveMembers.reverse();
console.log(`내림차순 정렬 : ${iveMembers}`);

console.log(
  "\n===========================================================================================================\n",
);

// 원본을 변경하지 않는 함수

let fruits = ["사과", "딸기", "배", "포도", "바나나"];

// 1. concat
console.log(fruits.concat("망고"));
console.log(fruits);
console.log("================================================================");

// 2. 배열의 일부 잘라내기(slice)
console.log(fruits.slice(0, 3));
console.log(fruits);
console.log("================================================================");

// 3. join
console.log(fruits.join("/"));
console.log(fruits);
console.log("================================================================");

// 중요 : spread operator [...] : 배열 복사

let iveMembers2 = [...iveMembers];
console.log(iveMembers2 == iveMembers);

let iveMembers3 = iveMembers;
console.log(iveMembers3 === iveMembers);
console.log("수정 전 : " + iveMembers);

// iveMember3의 맨 앞에 'Hong' 추가
iveMembers3.unshift("Hong");
console.log("수정 후 : " + iveMembers);
