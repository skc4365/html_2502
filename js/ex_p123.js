// 전역 변수
var d = document;
var s1 = d.querySelector(".s1 #result");
var s2 = d.querySelector(".s2 #result");
var s3 = d.querySelector(".s3 #result");
var s4 = d.querySelector(".s4 #result");
var s5 = d.querySelector(".s5 #result");
var s6 = d.querySelector(".s6 #result");
var s7 = d.querySelector(".s7 #result");
var result1;
var result2;

// --------------------------------------------------------------- s1_123 문제
//
// result1 = "";
// result2 = "";
// // var subjects1 = "90";
// // var subjects2 = "100";
// // var subjects3 = "10";
// // var subjects4 = "20";
// const contry = ["영어", "중국어"]; // i
// const subjects = ["쓰기", "말하기"]; // k
// const myMap = new Map();

// // 영어
// // myMap.set(contry[0], []);
// // myMap.get(contry[0]).push(`${contry[0]}에 ${subjects1} 점수 <br>`);
// // myMap.get(contry[0]).push(`${contry[1]}에 ${subjects2} 점수 <br>`);
// // // 중국어
// // myMap.set(contry[1], []);
// // myMap.get(contry[1]).push(`${contry[0]}에 ${subjects3} 점수 <br>`);
// // myMap.get(contry[1]).push(`${contry[1]}에 ${subjects4} 점수 <br>`);
// for (let i = 0; i < contry.length; i++) {
//   // 맵에 set 영어,중국어
//   // Map.set(영어 또는 중국어, []);
//   myMap.set(contry[i], []);

//   for (let k = 0; k < subjects.length; k++) {
//     myMap.get(contry[i]).push(prompt(`${contry[i]}에 ${subjects[k]} 점수는?`));
//   }
// }

// //
// console.log(myMap);
// console.log(myMap.get("영어"));
// console.log(myMap.get("중국어"));
// result1 = myMap.get("영어");
// result2 = myMap.get("중국어");
// s1.innerHTML = `${result1} <hr> ${result2}`;

// --------------------------------------------------------------- s2_126 문제
// const users = {
//   userA: [50, 60, 100],
//   userB: [80, 90, 70],
//   userC: [75, 80, 90],
// };
// // 분해___ userA = [50, 60, 100], userB = [80, 90, 70]
// const { userA, userB } = users;
// // // 결합___ arr = [50, 60, 100, 80, 90, 70]
// const arr = [...userA, ...userB];
// let sum = 0;

// //
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }

// //
// // document.write(`userA와 userB의 점수 합계는 ${sum}점.`);
// s2.innerHTML = `userA와 userB의 점수 합계는 ${sum}점.`;

// // --------------------------------------------------------------- s3_127 문제
// result1 = "";
// result2 = "";
// const arr1 = [10, 20, 30];
// //  arr1.map(10 / 10), arr1.map(20 / 10), arr1.map(30 / 10)
// // arr2 = 1, 2, 3
// const arr2 = arr1.map((item) => item / 10);
// const arr3 = ["홍길동", "김갑중", "박상무"];
// const arr4 = arr3.map((item, idx) => {
//   let obj = {};
//   obj["no"] = idx + 1;
//   obj["userName"] = item;
//   return obj;
// });

// //
// // 값의 정의부에서 구현에서 다룰부분을 사용하고 있다.

// //
// // console.log(arr2);
// // console.log(arr4);
// result1 = arr2;
// for (const i in arr4) {
//   result2 += `<br>`;
//   result2 += arr4[i].no;
//   result2 += ` - `;
//   result2 += arr4[i].userName;
// }
// s3.innerHTML = `Map연산값1: ${result1} <hr> Map연산값2: ${result2} `;

// // --------------------------------------------------------------- s4_129 문제
// result1 = "";
// const subs = ["쓰기", "듣기", "말하기"];
// const sub = ["50", "60", "70"];
// // const sub = subs.map((item) => {
// //   return prompt(`${item}의 점수는?`, "0");
// // });

// // 한과목이라도 60미만 점수가 존재하면 "불합격"
// // OR연산 sub.some
// result1 = sub.some((item) => item < 60);
// result1 = result1 ? "불합격" : "합격";
// // document.write(result);
// s4.innerHTML = result1;

// // --------------------------------------------------------------- s5_130 문제
// result1 = "";
// const subs2 = ["쓰기", "듣기", "말하기"];
// const sub2 = ["60", "70", "80"];
// // const sub2 = subs2.map((item) => {
// //   return prompt(`${item}의 점수는?`, "0");
// // });

// // 모든과목의 점수가 60이상이어야 "합격"
// // AND연산 sub2.every
// result1 = sub2.every((item) => item >= 60);

// result1 = result1 ? "합격" : "불합격";
// // document.write(result1);
// s5.innerHTML = result1;

// // --------------------------------------------------------------- s6_132 문제
// const fruit_1 = ["딸기", "바나나", "파인애플"];
// const fruit_2 = ["바나나", "딸기", "오렌지", "키위"];
// let fruit_3 = [];

// // 두개의 배열에서 중복이 배재된 값을 가져오려고함
// fruit_3 = [...fruit_1];
// fruit_2.map((item) => {
//   if (!fruit_3.includes(item)) {
//     fruit_3.push(item);
//   }
// });

// // document.write(fruit_3);
// s6.innerHTML = fruit_3;
// // --------------------------------------------------------------- s7_133 문제
result1 = "";
const subs3 = ["쓰기", "듣기", "말하기"];
const sub3 = [];

//
// const sub3 = ["70", "80", "90"];
for (let item of subs3) {
  // let str = prompt(`${item}의 점수는?`, "0")
  // sub3.push(str);
  sub3.push(prompt(`${item}의 점수는?`, "0"));
}

result1 = sub3.every((item) => item >= 60);

result1 = result1 ? "합격" : "불합격";
// document.write(result);
s7.innerHTML = result1;
