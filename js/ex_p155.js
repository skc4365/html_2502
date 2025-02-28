var d = document;
var s1 = d.querySelector(".s1 #result");
var s2 = d.querySelector(".s2 #result");
var s3 = d.querySelector(".s3 #result");
var s4 = d.querySelector(".s4 #result");
var s5 = d.querySelector(".s5 #result");
var s6 = d.querySelector(".s6 #result");
var s7 = d.querySelector(".s7 #result");
var s8 = d.querySelector(".s8 #result");
var s9 = d.querySelector(".s9 #result");
var s10 = d.querySelector(".s10 #result");

var theBody = d.querySelector("#theBody");
var result1;
var result2;

// ----------------------------------------------------s1
// --- 초기화
result1 = "";
result2 = "";
var count = 0;

// ---
hoistingFnc();
function hoistingFnc() {
  count++;
  //   d.write("hoistingFnc함수: " + count + "<br>");
  result1 += `hoistingFnc함수: ${count}<br>`;
}
hoistingFnc();

var theFnc = function () {
  count++;
  //   d.write("theFnc: " + count + "<br>");
  result2 += `theFnc함수: ${count}<br>`;
};
theFnc();

// --- 화면출력
s1.innerHTML = result1 + result2;

// ----------------------------------------------------s2
var color = ["white", "yellow", "aqua", "purple"];
result1 = "";
var i = 0;

function changeColor() {
  i++;
  if (i >= color.length) {
    i = 0;
  }

  var bodyTag = document.getElementById("theBody");
  bodyTag.style.backgroundColor = color[i];
}
// --- 화면출력
s2.innerHTML = result1;

// ----------------------------------------------------s3
result1 = "";
result2 = "";
function myFnc(name, area) {
  // document.write("안녕하세요. " + name + "입니다.", "<br>");
  // document.write("사는곳은 " + area + "입니다.", "<br><br>");
  result1 = "안녕하세요. " + name + "입니다.<br>";
  result2 = "사는곳은 " + area + "입니다.<br>";
}

myFnc("홍당무", "서울");
myFnc("깍두기", "부산");
s3.innerHTML = result1 + result2;
// ----------------------------------------------------s4
result1 = "";
var rightId = "korea";
var rightPw = "1234";
function login(id, pw) {
  if (id == rightId) {
    // if (pw == rightPw) {
    //   // document.write(id + "님 방문을 환영합니다");
    //   result1 = id + "님 방문을 환영합니다";
    // } else {
    //   alert("잘못된 비밀번호입니다.");
    // }

    // 삼항연산자 사용해보기~
    pw == rightPw
      ? (result1 = id + "님 방문을 환영합니다")
      : alert("잘못된 비밀번호입니다.");
  } else {
    alert("존재하지 않는 아이디입니다.");
  }
}
var userId = "korea";
var userPw = "1234";
// var userId = prompt("아이디를 입력하세요.", "");
// var userPw = prompt("패스워드를 입력하세요.", "");
login(userId, userPw);
s4.innerHTML = result1;
// ----------------------------------------------------s5
result1 = 0;
function testAvg(arrData) {
  var sum = 0;
  for (var i = 0; i < arrData.length; i++) {
    // sum += Number(prompt(arrData[i] + " 점수는?", "0"));
    sum += Number("80");
  }

  var avg = sum / arrData.length;
  return avg;
}

var arrSubject = ["국어", "수학"];
result1 = testAvg(arrSubject);

// document.write("평균 점수는 " + result1 + "점 입니다");
s5.innerHTML = `평균 점수는  ${result1}점 입니다`;
// ----------------------------------------------------s6

var imgNum = 1;
function gallery(direct) {
  if (direct) {
    if (imgNum == 8) return;
    imgNum++;
  } else {
    if (imgNum == 1) return;
    imgNum--;
  }

  var imgTag = document.getElementById("photo");
  //   imgTag.setAttribute("src", "../images_js11/pic_" + imgNum + ".jpg");
  imgTag.setAttribute("src", "./images/pic_" + imgNum + ".jpg");
}
// ----------------------------------------------------s7
result1 = "";
var num = 0;

// -----함수가 나를 call부르는 반복사용법***반드시 종료조건이 필요하다
function testFnc() {
  num++;
  //   document.write(num, "<br>");
  result1 += num + " - ";

  //*** 재귀함수 종료조건 ***
  if (num == 10) return;

  testFnc();
}
testFnc();

s7.innerHTML = result1;
// ----------------------------------------------------s8
// --- ()(); 즉시 실행 함수
//
result1 = "";
result2 = "";
//
(function menu() {
  var num = 100;
  num += 100;
  //   alert("첫번째함수: " + num);
  result1 = "첫번째함수: " + num;
})();
(function menu() {
  var num = 100;
  //alert("두번째함수: " + num);
  result2 = "두번째함수: " + num;
})();
s8.innerHTML = result1 + "<br>" + result2;
// ----------------------------------------------------s9
// 오브젝트 jang 생성하기 new CheckWeight("장보리", 168, 62)
// 오브젝트 park 생성하기 new CheckWeight("박달재", 180, 88)
function CheckWeight(name, height, weight) {
  this.userName = name;
  this.userHeight = height;
  this.userWeight = weight;
  this.minWeight;
  this.maxWeight;

  this.getInfo = function () {
    var str = "";
    str += "이름: " + this.userName + ", ";
    str += "키: " + this.userHeight + ", ";
    str += "몸무게: " + this.userWeight + "<br>";
    return str;
  };
  this.getResult = function () {
    this.minWeight = (this.userHeight - 100) * 0.9 - 5;
    this.maxWeight = (this.userHeight - 100) * 0.9 + 5;

    if (
      this.userWeight >= this.minWeight &&
      this.userWeight <= this.maxWeight
    ) {
      return "정상 몸무게입니다<br>";
    } else if (this.userWeight < this.minWeight) {
      return "정상 몸무게보다 미달입니다<br>";
    } else {
      return "정상 몸무게보다 초과입니다<br>";
    }
  };
}

var jang = new CheckWeight("장보리", 168, 62);
var park = new CheckWeight("박달재", 180, 88);
// console.log(jang);
// console.log(park);

// document.write(jang.getInfo());
// document.write(jang.getResult());
s9.innerHTML = jang.getInfo() + jang.getResult() + "<hr>";
s9.innerHTML += park.getInfo() + park.getResult();
// ----------------------------------------------------s10

function CheckWeight2(name, height, weight) {
  this.userName = name;
  this.userHeight = height;
  this.userWeight = weight;
  this.minWeight;
  this.maxWeight;
}
CheckWeight2.prototype.getInfo = function () {
  var str = "";
  str += "이름: " + this.userName + ", ";
  str += "키: " + this.userHeight + ", ";
  str += "몸무게: " + this.userWeight + "<br>";
  return str;
};
CheckWeight2.prototype.getResult = function () {
  this.minWeight = (this.userHeight - 100) * 0.9 - 5;
  this.maxWeight = (this.userHeight - 100) * 0.9 + 5;

  if (this.userWeight >= this.minWeight && this.userWeight <= this.maxWeight) {
    return "정상 몸무게입니다";
  } else if (this.userWeight < this.minWeight) {
    return "정상 몸무게보다 미달입니다";
  } else {
    return "정상 몸무게보다 초과입니다";
  }
};
var jang2 = new CheckWeight2("장보리2", 170, 70);
var park2 = new CheckWeight2("박달재2", 190, 90);
// console.log(jang2);
// console.log(park2);
// document.write(jang2.getInfo());
// document.write(jang2.getResult(), "<br>");

document.write(jang2.getResult === park2.getResult);
s10.innerHTML = jang2.getInfo() + jang2.getResult() + "<hr>";
s10.innerHTML += park2.getInfo() + park2.getResult() + "<hr>";
s10.innerHTML += jang2.getResult === park2.getResult;
