var d = document;
var r0 = document.getElementById("result0");
var r1 = document.getElementById("result1");
var r2 = document.getElementById("result2");
var r4 = document.getElementById("result4");

//--s0--
// 문서 전체를 읽어오기
// 전체 문서
r0.innerText += document.documentElement;
// 문서의 본문body
r0.innerText += " --- " + document.body;
// 문서의 본문body안의 모든 자식의 갯수
r0.innerHTML += " --- " + document.body.childNodes.length;
// 문서의 본문body안의 section태그의 갯수
r0.innerHTML += " --- " + document.getElementsByTagName("section").length;

//--s1--
r1.innerHTML += d.getElementById("h1_01").innerHTML;
r1.innerHTML += "<br>" + d.getElementById("h1_01").nodeValue;
r1.innerHTML += "<br>" + d.getElementById("h1_01").nodeName;
r1.innerHTML += "<br>" + d.getElementById("h1_01").nodeType;
r1.innerHTML += "<hr>";
r1.innerHTML += "<br>" + d.getElementById("h1_01").childNodes[0].nodeValue;
r1.innerHTML += "<br>" + d.getElementById("h1_01").childNodes[0].nodeName;
r1.innerHTML += "<br>" + d.getElementById("h1_01").childNodes[0].nodeType;

// ---------- nodeName ----------
// 태그이름 <p> <div>: 요소 노드 (Element Node)
// 속성이름 id, class: 속성 노드 (Attribute Node)
// #text: 텍스트 노드 (Text Node)
// #comment: 주석 노드 (Comment Node)
// #document: 문서 노드 (Document Node)

// ---------- nodeType ----------
// 1: 요소 노드 (Element Node)
// 2: 속성 노드 (Attribute Node)
// 3: 텍스트 노드 (Text Node)
// 8: 주석 노드 (Comment Node)
// 9: 문서 노드 (Document Node)
// 10: DOCTYPE 노드 (DocumentType Node)

// --s2-- 자식노드를 만들어서 추가
const p2 = d.createElement("p");
const txt = d.createTextNode("추가되는 내용");

const s2 = d.getElementById("s2");
p2.appendChild(txt);
s2.appendChild(p2);

// --s3-- 자식노드 생성, 추가, 수정, 삭제
// *** 생성
const p3 = d.createElement("p");
const pp3 = d.createElement("p");
const txt3 = d.createTextNode("추가되는 내용333");
const ttxt3 = d.createTextNode("추가되는 내용333~~ttt");

// *** 추가
p3.appendChild(txt3);
pp3.appendChild(ttxt3);

const s3 = d.getElementById("s3");
s3.appendChild(p3);
s3.appendChild(pp3);

// ***수정*** ~전~
// const newtxt = d.createTextNode("수정되는 내용");
// p3.replaceChild(newtxt, txt3);
// 수정 ~후~

// ***삭제*** ~전~
// s3.removeChild(pp3);
// 삭제 ~후~

// --s4--
const list = document.getElementById("s4").querySelectorAll("p");
r4.innerHTML = `- ${list.length} -<br>`;

for (let i = 0; i < list.length; i++) {
  r4.innerHTML += `- ${list[i].innerHTML} -`;
  list[i].style.color = "blue";
}
