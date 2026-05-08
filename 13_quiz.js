const k_group = [
  {
    group: "ive",
    name: ["장원영", "안유진", "이서"],
    count: 3,
  },
  {
    group: "에스파",
    name: ["카리나", "윈터", "지젤", "닝닝"],
    count: 4,
  },
  {
    group: "케플러",
    name: ["최유진", "샤오팅", "마시로"],
    count: 3,
  },
];

// 0) 깊은 복사
console.log("0) 깊은 복사");
const group_copy = [...k_group];
console.log(group_copy);
console.log("--------------------------------------------------");
/* 1-1) 데이터 추가: 브레이브걸스 */
console.log("1-1) 데이터 추가: 브레이브걸스");
group_copy.push({
  group: "브레이브걸스",
  name: ["유나", "유정", "민영"],
  count: 3,
});
console.log(group_copy);
console.log("--------------------------------------------------");

/* 1-2) 데이터를 맨 앞에 추가: 블랙핑크 */
console.log("1-2) 데이터 맨 앞 추가: 블랙핑크");
group_copy.unshift({
  group: "블랙핑크",
  name: ["제니", "리사", "로제", "지수"],
  count: 4,
});
console.log(group_copy);
console.log("--------------------------------------------------");

/* 2-1) 데이터 삭제: 블랙핑크 삭제 */
console.log("2-1) 데이터 삭제: 블랙핑크 삭제");
group_copy.shift();
console.log(group_copy);
console.log("--------------------------------------------------");

/* 2-2) 데이터 삭제: 케플러 삭제 */
console.log("2) 데이터 삭제: 케플러 삭제");
group_copy.pop();
console.log(group_copy);
console.log("--------------------------------------------------");

/* 3) 데이터 수정: ive의 "이서" -> "가을" */
console.log('3) 데이터 수정: ive의 "이서" -> "가을"');
group_copy[0].name[2] = "가을";
console.log(group_copy[0]);
console.log("--------------------------------------------------");

/* 4) group 오름차순 정렬 (단순 문자 비교) */
console.log("4) group 오름차순");
group_copy.sort((a, b) => a.group.localeCompare(b.group));
console.log(group_copy);
console.log("--------------------------------------------------");

/* 5) group 내림차순 정렬 (단순 문자 비교) */
console.log("5) group 내림차순");
group_copy.sort((a, b) => b.group.localeCompare(a.group));
console.log(group_copy);
console.log("--------------------------------------------------");

/* 6) 각 group의 name 오름차순 정렬 (단순 문자 비교) */
console.log("6) 각 group name 오름차순 정렬 반영된 group_copy");
group_copy.map((x) => x.name.sort());
console.log(group_copy);
console.log("--------------------------------------------------");

/* 7) name으로 검색: "카리나" */
console.log("7) name으로 검색");
group_copy.map((x) => {
  if (x.name.find((y) => y === "카리나") === "카리나") {
    console.log(`group : ${x.group}, 멤버수 : ${x.count}`);
  }
});
console.log("--------------------------------------------------");

/* 8) 에스파의 name 정보를 줄마다 "에스파 XXX" 형태로 출력 */
console.log('8) 에스파의 name 정보를 줄마다 "에스파 XXX" 형태로 출력');
group_copy.map((x) => {
  if (x.group === "에스파") {
    x.name.map((y) => console.log(`에스파 ${y}`));
  }
});
console.log("--------------------------------------------------");
