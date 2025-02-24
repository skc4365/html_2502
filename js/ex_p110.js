// ------------------------------------ 110_page
// -----일반적인 사용법
// 배열선언
var arr_b = new Array();
// 배열 값
arr_b[0] = 30;
arr_b[1] = "따르릉_b";
arr_b[2] = true;

// -----예제를 위한 편리한 사용법
// 배열의 선언 및 값
var arr = [30, "따르릉", true];

// 출력
// -----단순한 출력
document.write("<h3>배열값 가져오기-1 document.write</h3>");
document.write(arr_b[0], "<br>");
document.write(arr_b[1], "<br>");
document.write(arr_b[2], "<br>");
document.write("<h3>배열값 가져오기-2</h3>");
document.write("<hr>");

document.write("<h3>배열값 가져오기-1</h3>");
document.write(arr[0], "<br>");
document.write(arr[1], "<br>");
document.write(arr[2], "<br>");
document.write("<h3>배열값 가져오기-2</h3>");
document.write("<hr>");

// -----일반적인 for문 출력 사용법
document.write("for문 출력 <br>");
for (var i = 0; i < arr.length; i++) {
  document.write(arr[i], "<br>");
}

document.write("<h3>배열값 가져오기-3</h3>");
document.write("<hr>");

// -----일반적인 for~in문 출력 사용법
for (i in arr) {
  document.write(arr[i], "<br>");
}

document.write("<hr>");
document.write("<hr>");
