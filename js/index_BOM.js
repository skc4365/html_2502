const d = document;
const s1 = d.getElementById("s1");

const r2 = d.getElementById("result2");
const r3 = d.getElementById("result3");
const r4 = d.getElementById("result4");
const r5 = d.getElementById("result5");

// --s1-- 브라우저 사이즈
const p1 = d.createElement("p");
p1.setAttribute("class", "result1");
s1.appendChild(p1);

let str1 = `브라우저 바깥넓이: ${window.outerWidth}  _ 브라우저 바깥높이:${window.outerHeight}`;
let str2 = `브라우저 안쪽넓이: ${window.innerWidth}  _ 브라우저 안쪽높이:${window.innerHeight}`;
const txt1 = d.createTextNode(str1);
const br = d.createElement("br");
const txt2 = d.createTextNode(str2);
p1.appendChild(txt1);
p1.appendChild(br);
p1.appendChild(txt2);

// --s2-- 클라이언트의 화면 사이즈
r2.innerHTML = `스크린 넓이: ${screen.width} - 스크린 높이: ${screen.height}`;

// --s3-- 클라이언트의 화면 사이즈(윈도우 작업표시줄 제외)
r3.innerHTML = `스크린 넓이: ${screen.availWidth} - 스크린 높이: ${screen.availHeight}`;

// --s4
r4.innerHTML = `화면 Color Depth: ${screen.colorDepth}비트`;

// --s5
r5.innerHTML = `화면 Pixel Depth: ${screen.pixelDepth}비트`;
