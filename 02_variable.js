// 자바스크립트에서 변수 선언 방법
/**
 * var : 현재 사용하지 않을 것을 권고
 * const : 주소만 가리키는 변수(상수)
 * let : 재할당 필요한 경우(변수)
 */

let name;
console.log(name)

// const는 값 재할당 불가
const group = "뉴진스"
//group = "아이브"
console.log(group);

// 데이터 타입
console.log("타입은", typeof 42)
console.log("타입은", typeof 'choi')
console.log("타입은", typeof true)
console.log("타입은", typeof undefined)
console.log("타입은", typeof null)
console.log("타입은", typeof {}) // 우리가 자바에서 본 Object (객체) {key : value의 형태}
console.log("타입은", typeof []) // 배열, 자바스크립트의 배열은 자바의 arraylist와 비슷하다.