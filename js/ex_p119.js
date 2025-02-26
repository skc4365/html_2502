// ----- Declaring global variables 전역 변수 선언
var d = document;
var s1_result = d.querySelector(".s1 #result");
var s2_result = d.querySelector(".s2 #result");
var result1;
var result2;

// ---------------------------------------------------
// -----s1 변수 선언-- Declaring variables
var userName;
var userNum;
result1 = "";
result2 = "";

// ----- Define the value 값 정의 및 로직구현
userName = "skc";
userNum = "010-0000-1234";
// userName = prompt("당신의 영문 이름은?", "");
// userNum = prompt("당신의 연락처는?", "");
result1 = userName.toUpperCase();
result2 = userNum.substring(0, userNum.length - 4) + "****";

// ----- 문서에 출력
s1_result.innerHTML = `이름은 ${result1} :: tel ${result2}`;

// ---------------------------------------------------
// -----s2 변수 선언-- Declaring variables
var userEmail;
var arrUrl;
result1 = "";

// ----- Define the value 값 정의
var check1 = false;
var check2 = false;
// userEmail = "skc@naver";
userEmail = "skc@naver.com";
// userEmail = prompt("당신의 이메일 주소는?", "");
arrUrl = [".co.kr", ".com", ".net", ".or.kr", ".go.kr"];

// "s@".indexOf("@")경우 값은 1
// user계정이 존재하는지 여부
if (userEmail.indexOf("@") > 0) {
  check1 = true;
}

// arrUrl 메일패턴이 존재하는지 여부
for (var i = 0; i < arrUrl.length; i++) {
  if (userEmail.indexOf(arrUrl[i]) > 0) {
    check2 = true;
  }
}

// 유저계정명이 있고, url패턴이 일치하는 값을 가지면, 이메일 형식이 맞다고 함.
if (check1 && check2) {
  result1 = userEmail;
  //   document.write(userEmail);
} else {
  alert("이메일 형식이 잘못되었습니다.");
}

// ----- 문서에 출력
s2_result.innerHTML = `고객의 이메일:  ${result1}`;
