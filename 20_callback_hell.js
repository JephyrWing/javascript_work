// 콜백헬(callback 지옥)
// setTimeout()
// 1초 후 치킨 주문 -> 1초 후 배달 -> 1초 후 식사
// 1. 치킨 주문 완료
// 2. 배달 완료
// 3. 맛있게 먹기

setTimeout(() => {
  console.log("1. 치킨 주문 완료")
  setTimeout(() => {
    console.log("2. 배달 완료");
    setTimeout(() => {
      console.log("3. 맛있게 먹기");
    }, 1000);
  }, 1000);
}, 1000);