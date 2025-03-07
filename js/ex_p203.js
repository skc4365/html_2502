fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // 전체 데이터 100개 확인
    console.log("DataAll:", data);
  });

const geData = async () => {
  try {
    // 가짜json제공 서버로 테스트 해보기
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json(); //json 데이터를 js 개체로 변환

    // 데이터 10개만 확인
    console.log("Data_10:", data.slice(0, 10));

    //
    const tbody = document.querySelector("#fetchTable tbody");

    // data.slice(0, 10): 10개의 아이템 가져오기
    // forEach 각각__items("userId", "id", "title", "body") 을 가져오기
    data.slice(0, 10).forEach((items) => {
      const row = document.createElement("tr");

      const idCell = document.createElement("td");
      //   items.id 아이디값
      idCell.textContent = items.id;
      row.appendChild(idCell);

      const titleCell = document.createElement("td");
      //   items.title 타이틀
      titleCell.textContent = items.title;
      row.appendChild(titleCell);

      const bodyCell = document.createElement("td");
      //   items.body 바디
      bodyCell.textContent = items.body;
      row.appendChild(bodyCell);

      //   한 줄 내용추가
      tbody.appendChild(row);
    });
  } catch (error) {
    console.log(error.message);
  }
};

// 문서document가 로드된 후...
document.addEventListener("DOMContentLoaded", () => {
  // async함수 CALL.
  geData();
});
