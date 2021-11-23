// 1번 시도
// 첫 시도가 실패한 이유 -> 맵을 매번한다는건 길이가 길어질수록 엄청난 연산수를 의미한다.
// 마치 DB처럼 회원의 닉네임을관리하는 객체 등을 이용하는건 어떨까?

function solution(record) {
  let answer = [];
  let nickname = {};

  for (let i = 0; i < record.length; i++) {
    let command = record[i].split(" ");
    let type = command[0];

    switch (type) {
      case "Enter":
        nickname[command[1]] = command[2];
        answer.push(`${command[1]} Enter`);
        break;
      case "Leave":
        answer.push(`${command[1]} Leave`); // 닉네임 값을 여기선 얻지 않으므로 임의의 텍스트 처리
        break;
      case "Change":
        nickname[command[1]] = command[2];
        answer.push(`Change Attempt`); // 배열 길이 맞추기위한 임의의 텍스트
        break;
    }
  }

  let result = answer.reduce((acc, cur) => {
    let curCommand = cur.split(" ");

    if (curCommand[1] === "Enter") {
      acc.push(`${nickname[curCommand[0]]}님이 들어왔습니다.`);
      return acc;
    }
    if (curCommand[1] === "Leave") {
      acc.push(`${nickname[curCommand[0]]}님이 나갔습니다.`);
      return acc;
    }
    return acc;
  }, []);

  return result;
}
