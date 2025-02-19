// --s1--
// h3 onclick="this.innerHTML = '반가워요!!!'"

// --s2--
function changeTxt(me) {
  me.innerHTML = "2 두번째 반가워요~!!!";
}

// --s3--
function displayDate() {
  document.getElementById("result3").innerHTML = Date();

  let today = new Date();
  let str =
    today.getFullYear() +
    "년 " +
    (today.getMonth() + 1) +
    "월 " +
    today.getDate() +
    "일 ";
  document.getElementById("result3_another").innerHTML = str;
}

// --s4--
function displayDate2() {
  document.getElementById("result4").innerHTML = Date();

  let today = new Date();
  let str =
    today.getFullYear() +
    "년 " +
    (today.getMonth() + 1) +
    "월 " +
    today.getDate() +
    "일 ";
  document.getElementById("result4_another").innerHTML = str;
}
// 사용자의 클릭이벤트를 달아주는 부분
document.getElementById("myToday").onclick = displayDate2;

// --s5--
function checkChookies() {
  let txt = "";
  if (navigator.cookieEnabled == true) {
    txt = "쿠키 가능";
    //----- 쿠키값 테스트 -----
    let myCookie = "name=skc";
    document.cookie = myCookie;
    console.log(document.cookie);
    //-------------------------
  } else {
    txt = "쿠키 불가능";
  }
  document.getElementById("result5").innerHTML = txt;
}

// --s6--
function myUpperCase() {
  const fname6 = document.getElementById("fname6");
  // 영문을 입력했을때, 무조건 대문자로 변경
  fname6.value = fname6.value.toUpperCase();
}

// --s7--
function myUpperCase7() {
  const fname7 = document.getElementById("fname7");
  // 영문을 입력을 완성하고 엔터를 눌렀을때, 무조건 대문자로 변경
  fname7.value = fname7.value.toUpperCase();
}

// --s8--
function mOver(me) {
  me.innerHTML = "오버 ~";
}
function mOut(me) {
  me.innerHTML = "~~ 아웃 ";
}

// --s9--
function mDown(me) {
  me.innerHTML = "! 다운 !!!";
}
function mUp(me) {
  me.innerHTML = "----^^ 업 ^^";
}
