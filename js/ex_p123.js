// 전역 변수
var d = document;
var s1 = d.querySelector(".s1 #result");
var s2 = d.querySelector(".s2 #result");
var s3 = d.querySelector(".s3 #result");
var result1;
var result2;

// --------------------------------------------------------------- s1_123 문제
//
result1 = "";
result2 = "";
var subjects1 = "90";
var subjects2 = "100";
var subjects3 = "10";
var subjects4 = "20";
const contry = ["영어", "중국어"];
const subjects = ["쓰기", "말하기"];
const myMap = new Map();

//
myMap.set(contry[0], []);
myMap.set(contry[1], []);
myMap.get(contry[0]).push(`${contry[0]}에 ${subjects1} 점수는?`);
myMap.get(contry[0]).push(`${contry[1]}에 ${subjects2} 점수는?`);
myMap.get(contry[1]).push(`${contry[0]}에 ${subjects3} 점수는?`);
myMap.get(contry[1]).push(`${contry[1]}에 ${subjects4} 점수는?`);
// for (let i = 0; i < contry.length; i++) {
//   // 맵에 set 영어,중국어
//   myMap.set(contry[i], []);

//   for (let k = 0; k < subjects.length; k++) {
//     myMap.get(contry[i]).push(prompt(`${contry[i]}에 ${subjects[k]} 점수는?`));
//   }
// }

//
// console.log(myMap.get("영어"));
// console.log(myMap.get("중국어"));
result1 = myMap.get("영어");
result2 = myMap.get("중국어");
s1.innerHTML = `${result1} :: ${result2}`;

// --------------------------------------------------------------- s2_123 문제
// --------------------------------------------------------------- s3_123 문제
// --------------------------------------------------------------- s4_123 문제
// --------------------------------------------------------------- s5_123 문제
// --------------------------------------------------------------- s6_123 문제
// --------------------------------------------------------------- s7_123 문제
// --------------------------------------------------------------- s8_123 문제
// --------------------------------------------------------------- s9_123 문제
