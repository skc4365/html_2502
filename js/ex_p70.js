// ----- 전역변수의 선언부
var d = document;
var s1 = document.getElementById("result1");
var s2 = document.getElementById("result2");
var s3 = document.getElementById("result3");
var s4 = document.getElementById("result4");
var s5 = document.getElementById("result5");
var s6 = document.getElementById("result6");
var s7 = document.getElementById("result7");
var s8 = document.getElementById("result8");
var s9 = document.getElementById("result9");

// ---------- p70
var walkAmount = 10000;
// var walkAmount = prompt("당신의 하루 걷는 양은 몇 보인가요?", "0");

if (walkAmount >= 10000) {
  //   d.write("매우 좋은 습관을 지니고 계시군요!!", "<br>");
  s1.innerHTML = "<p> 매우 좋은 습관을 지니고 계시군요!! </p>";
  //   s1.innerText = "<p> 매우 좋은 습관을 지니고 계시군요!! </p>";
}
// d.write("=== 끝 ===");
// s1.innerHTML  = "<span>=== 끝 ===</span>";
// s1.innerHTML = s1.innerHTML + "<span>=== 끝 ===</span>";
s1.innerHTML += "<span>=== 끝 ===</span>";

// ---------- p71
var min = 60;
// var min = prompt("당신의 하루 통화량은 몇 분인가요?", "0");
if (min >= 60) {
  //   document.write("많이 사용하는 편이네요", "<br>");
  s2.innerHTML = "<p> 많이 사용하는 편이네요 </p>";
}
// document.write("===== The End ====");
s2.innerHTML += "<span>=== 끝 ===</span>";

// ---------- p72
var userName = "선경";
// var userName = prompt("방문자의 이름은?", "");

if (userName) {
  // document.write(userName+"님 반갑습니다! 방문을 환영합니다.");
  s3.innerHTML = userName + "<p> 님 반갑습니다! 방문을 환영합니다. </p>";
}
s3.innerHTML += "<span>=== 끝 ===</span>";

// ---------- p73
var num = 2;
// var num = prompt("당신이 좋아하는 숫자는?", "0");

if (num % 2 == 0) {
  //document.write("당신이 좋아하는 숫자는 짝수입니다.");
  s4.innerHTML = "<p> 당신이 좋아하는 숫자는 짝수입니다. </p>";
} else {
  //document.write("당신이 좋아하는 숫자는 홀수입니다.");
  s4.innerHTML = "<p> 당신이 좋아하는 숫자는 홀수입니다. </p>";
}
s4.innerHTML += "<span>=== 끝 ===</span>";

// ---------- p75
var result = true;
// var result = confirm("정말로 회원을 탈퇴하시겠습니까?");

if (result) {
  //   document.write("탈퇴 처리되었습니다!");
  s5.innerHTML = "<p> 탈퇴 처리되었습니다! </p>";
} else {
  //   document.write("탈퇴 취소되었습니다!");
  s5.innerHTML = "<p> 탈퇴 취소되었습니다! </p>";
}
s5.innerHTML += "<span>=== 끝 ===</span>";

// ---------- p77
var mon = 2;
// var mon = prompt("현재는 몇 월입니까?", "0");

if (mon >= 9 && mon <= 11) {
  //   document.write("독서의 계절 가을이네요!!");
  s6.innerHTML = "<p> 독서의 계절 가을이네요!! </p>";
} else if (mon >= 6 && mon <= 8) {
  //   document.write("여행 가기 좋은 여름이네요!!");
  s6.innerHTML = "<p> 여행 가기 좋은 여름이네요!! </p>";
} else if (mon >= 3 && mon <= 5) {
  //   document.write("햇살 가득한 봄이네요!!");
  s6.innerHTML = "<p> 햇살 가득한 봄이네요!! </p>";
} else if (mon == 1 || mon == 2 || mon == 12) {
  //   document.write("햇살 가득한 봄이네요!!");
  s6.innerHTML = "<p> 스키의 계절 겨울이네요!! </p>";
} else {
  //   document.write("스키의 계절 겨울이네요!!");
  s6.innerHTML = "<p> 계절을 계산할 수 없습니다, 정확한 값이 아닙니다 </p>";
}
s6.innerHTML += "<span>=== 끝 ===</span>";

// ---------- p78
var id = "skc";
var pw = "0000";

var user_id = "skc";
var user_pw = "0000";
// var user_id = prompt("아이디는?", "");
// var user_pw = prompt("비밀번호는?", "");

if (id == user_id) {
  if (pw == user_pw) {
    // document.write(user_id + "님 반갑습니다!");
    s7.innerHTML = user_id + "님 반갑습니다!";
  } else {
    alert("비밀번호가 일치하지 않습니다.");
    location.reload();
  }
} else {
  alert("아이디가 일치하지 않습니다.");
  location.reload();
}
s7.innerHTML += "<span>=== 끝 ===</span>";

// ---------- p80
// 변수의 생명주기 LifrCycle : num8변수를 확인하자 ^^

// public전역변수 num8은 전역에서 태어나서, 프로그램이 종료될때 소멸된다.
let num8 = 10;
let user8 = "홍길동";
// let user8 = "";

if (num8 > 5) {
  // private지역변수 num8은 {}블록안에서 태어나서, 블록이 닫히면 소멸된다.
  let num8 = 50;
  num8 = num8 + 10;
}
// document.write(`${num8} <br>`);
s8.innerHTML = `홍길동의 번호: ${num8}입니다<br>`;

if (user8 != "") {
  user8 = "김길동";
}
// document.write(`${user8} <br>`);
s8.innerHTML = `10번의 이름은: ${user8}입니다<br>`;
s8.innerHTML += "<span>=== 끝 ===</span>";
