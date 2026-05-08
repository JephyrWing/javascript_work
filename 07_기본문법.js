// 1. 조건문
let number = 5;
// number가 짝수면 짝수 출력, 홀수면 홀수 출력
console.log(number % 2 === 1 ? "홀수" : "짝수");


// for 루프
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum = sum + 1;
}
console.log(sum);

// for in : 객체의 키로 순회(object)
const 안유진 = {
  name : '안유진',
  year : 2003, 
  group : 'ive',
}

for (let key in 안유진){
  console.log(key);
  console.log(안유진[key]);
}
for (let[key, value] of Object.entries(안유진)){
  console.log(key);
  console.log(value);
}

// for of : 값으로 순회(배열)
// number가 2, 3, 4, 5의 배수인지? ex) 3의 배수
// 모두 아니면 : 2, 3, 4, 5의 배수가 아님
const numarray = [2, 3, 4, 5];
let count = 0;
for (const i of numarray) {
  if (number % i === 0) {
    count = i;
  }
}
if (count === 0) {
  console.log("2, 3, 4, 5의 배수가 아님");
} else {
  console.log(`${count}의 배수`);
}

//while
let sum2 = 0;
let i = 1;
while(i<=10){
  sum2 += i;
  i ++
}
console.log(sum2);
