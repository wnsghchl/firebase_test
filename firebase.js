const firebaseConfig = {
  apiKey: "AIzaSyACo3uH3ubEgYZyJTlKAtUK59atlNfv9bE",
  authDomain: "project-hj-7516b.firebaseapp.com",
  databaseURL: "https://project-hj-7516b-default-rtdb.firebaseio.com",
  projectId: "project-hj-7516b",
  storageBucket: "project-hj-7516b.appspot.com",
  messagingSenderId: "281962754439",
  appId: "1:281962754439:web:ea1baeea2004060449a322",
  measurementId: "G-XWWEK0BDQ4",
};

// 파이어베이스 앱 초기화
const app = firebase.initializeApp(firebaseConfig);

// 파이어베이스 실시간 데이터베이스 생성
const database = firebase.database();

//데이터 저장 실습

function writeUserData(userId, email, nick) {
  database.ref("users/" + userId).set({
    email: email,
    nick: nick,
  });
}

// 데이터 읽기 실습
// 1. 전체 조회된 결과 출력
//  - 테이블 태그 or 목록 태그를 활용해서 출력

// 2. 특정 사용자 조회
//   - id값 입력받은 . 후해당 사용자의 email , nick 출력
function readUserData() {
  database.ref("users/").on("value", (snapshot) => {
    // 실시간 데이터베이스 값 접근
    console.log(snapshot.val());

    let data = snapshot.val();
    let keys = Object.keys(data);
    console.log(data);
    console.log(Object.keys(data));
    console.log(data["qwewqeqwe"]);
    console.log(data[keys[0]]);

    const result = document.getElementById("result");

    // 데이터베이스 웹 페이지 출력
    result.innerText = `${data[keys[0]].email}/${data[keys[0]].nick}`;
  });
}

///////////////////////////////////////

const id1 = document.getElementById("id1");
const email1 = document.getElementById("email1");
const nick1 = document.getElementById("nick1");

const submit = document.getElementById("submit");

const readBtn = document.getElementById("readBtn");

readBtn.addEventListener("click", () => {
  readUserData();
});

submit.addEventListener("click", () => {
  console.log(id1.value);
  console.log(email1.value);
  console.log(nick1.value);

  writeUserData(id1.value, email1.value, nick1.value);
});
