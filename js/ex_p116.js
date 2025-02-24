//  t ="0 1 2 3 4 56 7 8 9 0 12 3 4 56 7 8 9 0 12 3 4 56 7 89 0 1";
// t = "H e l l o  T h a n k  y o u  g o o d  l u c k  t o  y o u";
var t = "Hello Thank you good luck to you";

// charAt(index)
// g
document.write(t.charAt(16), "<br>");
// 12
document.write(t.indexOf("you"), "<br>");
// 29
document.write(t.indexOf("you", 16), "<br>");
// 29
document.write(t.lastIndexOf("you"), "<br>");
// 12
document.write(t.lastIndexOf("you", 25), "<br>");
document.write("<hr>");

// luck
document.write(t.match("luck"), "<br>");
// 12
document.write(t.search("you"), "<br>");
document.write("<hr>");

// luck
document.write(t.substr(21, 4), "<br>");
// Thank
document.write(t.substring(6, 12), "<br>");
// Hello Thank me good luck to you
document.write(t.replace("you", "me"), "<br>");
document.write("<hr>");

document.write(t.toLowerCase(), "<br>");
document.write(t.toUpperCase(), "<br>");
document.write(t.length, "<br>");
document.write("<hr>");

//  t ="0 1 2 3 4 56 7 8 9 0 12 3 4 56 7 8 9 0 12 3 4 56 7 89 0 1";
// t = "H e l l o  T h a n k  y o u  g o o d  l u c k  t o  y o u";

// 공백을 기준으로 문자열을 나누는것
//
var s = t.split(" ");
console.log(s);
// (7) ['Hello', 'Thank', 'you', 'good', 'luck', 'to', 'you']
document.write(s[0], "<br>");
document.write(s[4], "<br>");
document.write("<hr>");

var str = "A";
var tt = str.charCodeAt(0);
// 65
document.write(tt, "<br>");
// 'A'
document.write(String.fromCharCode(65), "<br>");
