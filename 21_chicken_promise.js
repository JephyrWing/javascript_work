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

// 실행해보기
주문()
  //주문이 잘 실행되면 결과를 then의 result로 전달
  .then((result) => {
    console.log(`1. ${result}`);
    return 배달();
  })
  .then((result) => {
    console.log(`2. ${result}`);
    return 먹기();
  })
  .then((result) => {
    console.log(`3. ${result}`);
  });
