const codeTest = '코드테스트'
const ive = "'아이브' 장원영"
console.log(codeTest, ive)

// Escape Character
console.log("아이브 \n 안유진")
console.log("아이브 \t 안유진")
console.log("아이브 \" 안유진")

// 중요~~~~~~~~~~~~~~ 백틱(`(ctrl 누르면 ~ 나오는 거))
// Template Literal
console.log('----------------------------------------')
const groupName = "아이브"
// 기본 방법
console.log(groupName + ' : 장원영')
console.log(groupName, ': 장원영')
// 백틱 안에 변수 사용하려면
//${변수명} -- 이런 형식 사용
console.log(`${groupName} : 장원영
${groupName} : 안유진
${groupName} : 가을
  `)
