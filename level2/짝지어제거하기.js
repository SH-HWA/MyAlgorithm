// 짝지어 제거하기 -> 문자열을 모두 제거한다면 짝지어 제거하기가 종료 (무언가 남는다면 실패)
// 짝지어 제거하기 이므로 길이가 홀수라면 애초에 불가능하니까 빼주자

function solution(s) {
  if (s.length % 2 !== 0) {
    return 0;
  }

  let strArr = [];
  // 문자열 순회하며 strArr에 하나씩 넣는데 전에 넣은것과 같다면 더넣지말고 마지막에 넣은 것을 제거
  for (let i = 0; i < s.length; i++) {
    if (s[i] === strArr[strArr.length - 1]) {
      strArr.pop();
    } else {
      strArr.push(s[i]);
    }
  }

  if (strArr.length === 0) {
    return 1;
  } else {
    return 0;
  }
}
