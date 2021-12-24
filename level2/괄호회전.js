function solution(s) {
  let result = 0;
  // s의 길이가 홀수인경우는 검토할 필요없이 잘못된 괄호 문자열이므로 바로0을리턴
  if (s.length % 2 !== 0) {
    return result;
  }
  // 괄호검토&회전
  for (let i = 0; i < s.length; i++) {
    // 올바른 괄호인지 검토(괄호별로)
    let opener = [];
    let closer = [];
    let isCorrect = true;
    for (let j = 0; j < s.length; j++) {
      // 여는 괄호
      if (s[j] === "(" || s[j] === "{" || s[j] === "[") {
        opener.push(s[j]);
      } else {
        // 닫는 괄호 & 마지막 여는괄호와 비교
        let reversed = "";
        // 닫는 괄호 종류를 찾아 뒤집기
        switch (s[j]) {
          case ")":
            reversed = "(";
            break;
          case "}":
            reversed = "{";
            break;
          case "]":
            reversed = "[";
            break;
        }
        // 뒤집은게 가장마지막에 연 괄호와 다르다면 오류!
        if (reversed !== opener) {
        }
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
