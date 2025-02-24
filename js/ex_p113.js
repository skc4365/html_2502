var greenArr = ["교대", "방배", "강남"];
var yellowArr = ["미금", "정자", "수서"];

// -----배열값변경(변경 시작위치,    제거갯수,      배열추가요소들...)
// -----.splice(start: number, deleteCount: number, ...items
// greenArr.splice(2, 1, "서초", "역삼");
// // (4) ['교대', '방배', '서초', '역삼']
// console.log(greenArr);

//------------------------------------배열값의 삭제
console.log("yellowArr:", yellowArr);
console.log("===================");
// yellowArr = ["미금", "정자", "수서"];
var data1 = yellowArr.pop();
console.log("data1:", data1);
console.log("yellowArr:", yellowArr);
var data2 = yellowArr.shift();
console.log("data2:", data2);
console.log("yellowArr:", yellowArr);

//------------------------------------배열값의 추가
// -----data1: 수서,  data2: 미금, yellowArr:['정자']
// 변동전 (1) ['정자']
yellowArr.push(data2);
// (2) ['정자', '미금']
console.log(yellowArr);

// 변동전 (2) ['정자', '미금']
yellowArr.unshift(data1);
// (3) ['수서', '정자', '미금']
console.log(yellowArr);
