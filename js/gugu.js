var result = document.getElementById("result");
var result2 = document.getElementById("result2");

// 3단, 4단, 5단
var num1 = 3;
var num2 = 6;
for (let i = num1; i < num2; i++) {
  for (let j = 1; j < 10; j++) {
    result.innerHTML += `${i}단 * ${j} = ${i * j}<br>`;
  }
  result.innerHTML += `<hr>`;
}
result.innerHTML += `END`;

// 3단, 4단:4*3이후break;, 5단:5*3만 continue;
for (let i = num1; i < num2; i++) {
  for (let j = 1; j < 10; j++) {
    if (i == 5 && j == 3) continue;
    if (i == 4 && j == 4) break;
    result2.innerHTML += `${i}단 * ${j} = ${i * j}<br>`;
  }
  result2.innerHTML += `<hr>`;
}
result2.innerHTML += `END`;
