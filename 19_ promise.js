// Promise : 이 작업이 마무리 되면 결과를 꼭 돌려준다는 약속
// resolve : 함수, 성공하면 then으로 결과를 넘겨줌
// reject : 함수, 실패하면 catch로 결과를 넘겨줌

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const text = prompt("따봉을 입력해줘!! 따봉도치야 고마워!")
    if(text === '따봉'){
      // resolve()를 호출해서 then()으로 결과 보냄
      resolve('👍')
    } else {
      // reject()를 호출해서 catch()로 결과 보냄
      reject('👎')
    }
  }, 2000);
})

myPromise
  .then((result) => {
    console.log(`Promise 결과 : ${result}`);
    const body = document.querySelector("body")
    const a = document.createElement("a");
    a.setAttribute("href" , "https://jephyrwing.github.io/mbti/");
    a.textContent = "재밌는 거 하러가자";
    body.appendChild(a);
  })
  .catch((error)=>{
    console.log(`Promise 결과 : ${error}`);
  })
  .finally(()=>{
    console.log('끝!');
  })