// 전역 변수 선언부
var d = document;
var btn1 = d.getElementById("dateBtn");
var btn2 = d.getElementById("hello");
var btn3 = d.getElementById("hello_s3");
var btn4 = d.getElementById("hello_twice");
var btn5 = d.getElementById("myAction");
var btn7 = d.getElementById("myCalculator");
var divBubble = d.getElementById("divBubble");
var p1 = d.getElementById("p1");
var divCaptur = d.getElementById("divCaptur");
var p2 = d.getElementById("p2");
var myDIV = d.getElementById("myDIV");
var removeEventBtn = d.getElementById("removeEventBtn");

// 테스트데이터
let num1 = 5;
let num2 = 7;

// 함수 선언부
function displayDate() {
  d.getElementById("result").innerHTML = Date();
}
function helloAlert() {
  alert("Hello World!!");
}
function twice_1() {
  alert("첫번째 Hello");
}
function twice_2() {
  alert("두번째 Hello");
}
function action_over() {
  d.getElementById("result5").innerHTML += "마우스 오버";
}
function action_out() {
  d.getElementById("result5").innerHTML += "마우스 아웃";
}
function action_click() {
  d.getElementById("result5").innerHTML += "클릭";
}
// function myCal(num1, num2)
function myCal(su1, su2) {
  d.getElementById("result7").innerHTML += su1 * su2;
}
function posMouse() {
  d.getElementById("result9").innerHTML = Math.random();
}
function removeHandler() {
  // myDIV.addEventListener("mousemove", posMouse);
  myDIV.removeEventListener("mousemove", posMouse);
}

// s6 윈도우 이벤트 리스너 등록
window.addEventListener("resize", function () {
  let result6 = d.getElementById("result6");
  result6.innerHTML = `창 넓이: ${this.window.innerWidth} == 창 높이: ${this.window.innerHeight}`;
});

// 이벤트 리스너 등록
btn1.addEventListener("click", displayDate);
btn2.addEventListener("click", function () {
  alert("Hello world~~!!");
});
btn3.addEventListener("click", helloAlert);
btn4.addEventListener("click", twice_1);
btn4.addEventListener("click", twice_2);
btn5.addEventListener("mouseover", action_over);
btn5.addEventListener("mouseout", action_out);
btn5.addEventListener("click", action_click);
btn7.addEventListener("click", function () {
  myCal(num1, num2);
});
// 버블링
divBubble.addEventListener(
  "click",
  function () {
    alert("<div>오렌지 영역에 이벤트가 발생");
  },
  false
);
p1.addEventListener(
  "click",
  function (e) {
    // 버블링 중단
    // e.stopPropagation();
    alert("<p>버블링 영역에 이벤트 발생");
  },
  false
);
// 캡쳐링
divCaptur.addEventListener(
  "click",
  function (e) {
    // 캡쳐링 중단
    // e.stopImmediatePropagation();
    alert("<div>오렌지 영역에 이벤트가 발생");
  },
  true
);
p2.addEventListener(
  "click",
  function () {
    alert("<p>캡쳐링 영역에 이벤트 발생");
  },
  true
);
myDIV.addEventListener("mousemove", posMouse);
removeEventBtn.addEventListener("click", removeHandler);
