function solution(s) {
  let opener = "({[";
  let closer = ")}]";
  let result = 0;
  // s의 길이가 홀수인경우는 검토할 필요없이 잘못된 괄호 문자열이므로 바로0을리턴
  if (s.length % 2 !== 0 || s.length === 0) {
    return result;
  }
  // 괄호검토&회전
  for (let i = 0; i < s.length; i++) {
    let isCorrect = true;
    let opened = [];
    for (let j = 0; j < s.length; j++) {
      // 여는 괄호 스택을 활용 -> ({)} 이런경우도 잡아낼 수 있게
      if (closer.includes(s[j])) {
        let reversed = opener[closer.indexOf(s[j])];
        if (reversed === opened[opened.length - 1]) {
          opened.pop();
        } else {
          isCorrect = false;
          break;
        }
      } else {
        opened.push(s[j]);
      }
    }
    if (isCorrect) {
      result++;
    }
    // 회전
    let first = s.slice(0, 1);
    s = s.slice(1) + first;
  }

  return result;
}
