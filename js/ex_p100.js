//  전역 변수
const d = document;
const s1 = d.querySelector("#s1 .result");
const s2 = d.querySelector("#s2 .result");
const s3 = d.querySelector("#s3 .result");
const s4 = d.querySelector("#s4 .result");
const s5 = d.querySelector("#s5 .result");
const br = d.createElement("br");
var txt = "test";
var txt2 = "test2";

// --------------------------------------s1-----
// tv객체 정의
var tv = new Object();
tv.color = "white";
tv.price = 300000;
tv.info = function () {
  // tv객체안에서 나(this)
  txt = `tv 색상: ${this.color} - `;
  txt += `tv 가격: ${this.price} `;
};
// car객체 정의
var car = {
  color: "black",
  price: 5000000,
  info: function () {
    txt2 = `car 색상: ${this.color} - `;
    txt2 += `car 가격: ${this.price}`;
  },
};

// 요소의 생성, 객체 사용
var p1 = d.createElement("p");
tv.info();
var p1_txt = d.createTextNode(txt);
car.info();
var p1_txt2 = d.createTextNode(txt2);

// 출력
p1.appendChild(p1_txt);
p1.appendChild(br);
p1.appendChild(p1_txt2);
s1.innerHTML = "";
s1.appendChild(p1);

// --------------------------------------s2-----
// date객체 생성
var today = new Date();
var nowMonth = today.getMonth(),
  nowDate = today.getDate(),
  nowDay = today.getDay();
// worldcup객체 생성
var worldcup = new Date(2002, 4, 31);
var theMonth = worldcup.getMonth(),
  theDate = worldcup.getDate(),
  theDay = worldcup.getDay();

// 요소의 생성, 객체 사용
txt = "";
txt2 = "";
var p2 = d.createElement("p");
txt = `현재 월: ${nowMonth} - 일: ${nowDate} - 요일: ${nowDay}`;
var p2_txt = d.createTextNode(txt);
txt2 = `2002월드컵 월: ${theMonth} - 일: ${theDate} - 요일: ${theDay}`;
var p2_txt2 = d.createTextNode(txt2);

// 출력
p2.appendChild(p2_txt);
p2.appendChild(br);
p2.appendChild(p2_txt2);
s2.innerHTML = "";
s2.appendChild(p2);
// --s3--

// --s4--

// --s5--
