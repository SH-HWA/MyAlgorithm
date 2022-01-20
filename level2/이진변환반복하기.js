// x의 모든 0을 제거합니다.
// x의 길이를 c라고 하면, x를 "c를 2진법으로 표현한 문자열"로 바꿉니다.
// 0을 제거하고 그 길이를 구할필요있을까? 그냥 1의 갯수를 세서 그걸 바로 c로 해줘도될듯하다.

function solution(s) {
  let count = 0;
  let del = 0;

  while (s.length > 1) {
    count++;
    let c = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "1") {
        c++;
      }
      if (s[i] === "0") {
        del++;
      }
    }
    // s: 구한 c를 2진법으로 표현한 문자열로 바꿔줌
    s = c.toString(2);
  }

  return [count, del];
}
