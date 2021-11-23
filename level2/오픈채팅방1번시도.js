// 1번 시도
// 레코드에 담긴 활동들의 결과를 나타내는 메시지를 담은 answer배열을 리턴
// 중복 닉네임 허용, 잘못 된 입력은 주어지지 않음
// 각 단어는 공백으로 구분(대소문자+숫자)
// 결과 배열에 요소를 쌓는 항목들 : Enter, Leave / 결과 배열 요소들의 내용중 일부를 변경하는 항목 : Change
// 닉네임 변경 처리가 중요함 -> 중복을 허용하지만 변경을 하는 해당유저만 닉네임이 바뀌어야지 해당 닉네임을 가진 모든 유저의 닉네임이 바뀌어선 안됨
// 닉네임 변경 처리를 map을 활용해보려면 record/result 배열길이가 같아야하는데 change에 관한 내용은 result에 없다..
// 임의의 텍스트를 넣고 나중에 빼는 방식으로?(reduce 고려)

// 첫 에러 이유 -> 채팅방을 나간 후, 새로운 닉네임으로 다시 들어간다. (이 닉네임 변경 방법을 고려하지 않음)
// 나갔습니다에는 id 만 존재 닉네임 없음

function solution(record) {
  let answer = [];

  for (let i = 0; i < record.length; i++) {
    let command = record[i].split(" ");
    let type = command[0];

    switch (type) {
      case "Enter":
        answer.push(`${command[2]}님이 들어왔습니다.`);
        break;
      case "Leave":
        answer.push(`User Leaving...`); // 닉네임 값을 여기선 얻지 않으므로 임의의 텍스트 처리
        break;
      case "Change":
        answer.push(`Change Attempt`); // 배열 길이 맞추기위한 임의의 텍스트
    }
    answer = answer.map((el, idx) => {
      let cur = record[idx].split(" ");
      if (command[1] === cur[1] && cur[0] === "Enter") {
        return `${command[2]}님이 들어왔습니다.`;
      }
      if (command[1] === cur[1] && cur[0] === "Leave") {
        return `${command[2]}님이 나갔습니다.`;
      }
      return el;
    });
    // 새로운 닉네임으로 로그인했거나, 나갔거나, 닉네임을 변경했거나 했을경우 모두 기존 answer배열에 변화가 필요하므로 세 케이스 모두 map을 거치게 한다.
  }
  // 'Change Attemp' 요소는 편의상 임의로 넣은것이기 때문에 빼주어야함
  let result = answer.reduce((acc, cur) => {
    if (cur !== "Change Attempt") {
      acc.push(cur);
      return acc;
    }
    return acc;
  }, []);

  return result;
}
