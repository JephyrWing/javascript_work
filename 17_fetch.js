// fetch 연습용 사이트
// https://jsonplaceholder.typicode.com/

// 1. fetch : Promise
// fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
//   .then((response) => {
//     // 전달받은 결과를 text로 변환 -> Promise
//     // text()
//     return response.text();
//   })
//   .then((data) => {
//     console.log(data);
//   });

fetch("https://jsonplaceholde.typicode.com/todos?_limit=5")
  .then((response) => {
    // JSON 타입으로 받은 데이터를 자바스크립트의 Object로 변환
    // json()
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("Error!!1");
  })
  .finally(() => {
    console.log("데이터를 다 가져왔어요,");
  });
