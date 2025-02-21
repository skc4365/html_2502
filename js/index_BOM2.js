const d = document;
const s1 = d.querySelector("#s1 .result");
const s2 = d.querySelector("#s2 .result");
const s3 = d.querySelector("#s3 .result");
const s4 = d.querySelector("#s4 .result");
const s5 = d.querySelector("#s5 .result");
const s6 = d.querySelector("#s6 .result");
const s7 = d.querySelector("#s7 .result");
const s8 = d.querySelector("#s8 .result");
const s9 = d.querySelector("#s9 .result");
const s10 = d.querySelector("#s10 .result");
const s11 = d.querySelector("#s11 .result");

// 라이브서버 - http://127.0.0.1:5500/index_BOM2.html
// 로컬 - file:///C:/front_202502/html/ex_0221/index_BOM2.html
s1.innerHTML = `웹 url경로: ${location.href}`;

// 라이브서버 127.0.0.1
// 로컬 - 값이 안나옴
// 개념 - localhost 즉, 127.0.0.1
s2.innerHTML = `호스트명: ${location.hostname}`;

// 라이브서버 - /index_BOM2.html
// 로컬 - /C:/front_202502/html/ex_0221/index_BOM2.html
s3.innerHTML = `현재 경로(문서): ${location.pathname}`;

// 라이브서버 - http
// 로컬      - file:
s4.innerHTML = `${location.protocol}`;

// 라이브서버 - 5500
// 로컬 - 값이 안나옴
// 개념 - 웹호스트 80(http), 443(https)
s5.innerHTML = `${location.port}`;

// s6
function newDoc() {
  location.assign("https://www.w3schools.com");
}

function goBack() {
  history.back();
}
function goForward() {
  history.forward();
}

// s7
s7.innerHTML = `navigator.cookieEnabled = ${navigator.cookieEnabled} <br>`;
s7.innerHTML += `navigator.appName     = ${navigator.appName}<br>`;
s7.innerHTML += `navigator.appCodeName = ${navigator.appCodeName} <br>`;
s7.innerHTML += `navigator.product     = ${navigator.product} <br>`;
s7.innerHTML += `navigator.appVersion  = ${navigator.appVersion} <br>`;
s7.innerHTML += `navigator.userAgent   = ${navigator.userAgent} <br>`;

s7.innerHTML += `navigator.platform    = ${navigator.platform} <br>`;
s7.innerHTML += `navigator.language    = ${navigator.language} <br>`;
s7.innerHTML += `navigator.onLine      = ${navigator.onLine} <br>`;
s7.innerHTML += `navigator.javaEnabled = ${navigator.javaEnabled} <br>`;

// s8, s9
function myFunction() {
  alert("버튼을 클릭한후 3초가 지났습니다");
}

// s10
function myTimer() {
  const dd = new Date();
  s10.innerHTML = `${dd.toLocaleTimeString()}`;
}
// 1000밀리초마다(간격으로) myTimer()함수를 호출한다.
var myStop = setInterval(myTimer, 1000);

// s11

// 쿠키생성 확인
d.cookie = "이름 = 선경";
d.cookie = "수업 = 자바 풀스택";
d.cookie = "cookieName = cookieValue";
s11.innerHTML = `${d.cookie} <hr>`;

// 쿠키들을 가져와서 출력
var str = d.cookie.split(";");
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
  s11.innerHTML += `${str[i]} <br>`;
}
