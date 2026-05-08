const 주문 = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("치킨 주문 완료");
    }, 1000);
  });
};
const 배달 = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("배달 완료");
    }, 1000);
  });
};
const 먹기 = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("맛있게 먹기");
    }, 1000);
  });
};

//async : 비동기 처리(이 함수 내부는 동기로 돌아가지만 함수 전체는 비동기로 할테니 다음 코드 진행하라는 뜻)
async function 실행(){
  // const 주문결과 = await 주문();
  // console.log(주문결과);
  console.log(await 주문());
  console.log(await 배달());
  console.log(await 먹기());
}

console.log("전화");
실행();
console.log("낮잠");
setTimeout(() => {
  console.log("게임");
}, 2000);
setTimeout(() => {
  console.log("노래");
}, 2000);
