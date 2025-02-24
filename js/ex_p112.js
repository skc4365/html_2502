var arr_1 = ["사당", "교대", "방배", "강남"];
var arr_2 = ["신사", "압구정", "옥수"];

// -----배열String[]의 값을 사용하고 return String
var result = arr_1.join("-");
// 사당-교대-방배-강남
console.log(result);
console.log("---------------");

// -----String값을 사용하고 return String[]배열
var result2 = result.split("-");
// (4) ['사당', '교대', '방배', '강남']
console.log(result2);
console.log("---------------");

// -----값 연결
result = arr_1.concat(arr_2);
// (7) ['사당', '교대', '방배', '강남', '신사', '압구정', '옥수']
console.log(result);

console.log("---------------");

// -----값 분리--.slice(시작인덱스, 슬라이스_index번호)
result = arr_1.slice(2, 3);
// ['방배']
console.log(result);

console.log("---------------");
// -----오름차순 정렬
arr_1.sort();
// (4) ['강남', '교대', '방배', '사당']
console.log(arr_1);

console.log("---------------");
// -----내림차순 정렬
arr_1.reverse();
// (4) ['사당', '방배', '교대', '강남']
console.log(arr_1);

console.log("---------------");
// -----배열의 순서를 거꾸로
arr_2.reverse();
// (3) ['옥수', '압구정', '신사']
console.log(arr_2);
