// 필요한 기능들
// 1. 균형잡힌 괄호 문자열(더이상분리할수없는)을 찾아내고 u/v로 떼어내는 기능
// 2. 떼어낸 u가 올바른지 검토 -> 올바르다면 v에 대해서 다시 1.수행
//    수행한 결과 문자열을 u에 이어붙인 후 반환
// 3. u가 올바르지 않다면... -> 빈문자열에 첫번째 문자로 '(' 붙임
//    v에 대해 1.부터 재귀적으로 수행한 결과 문자열을 이어 붙임(빈문자열 + '(' + v결과물)
//    ')'를 다시 붙임
//    u의 앞뒤 문자를 제거하고, 나머지 문자의 괄호 방향을 뒤집는다. 그리고 뒤에 붙인다
//    생성된 문자열을 반환

function solution(p) {
  // 1~3단계
  //탈출
  if (p.length === 0) {
    return p;
  }
  //본문
  let left = 0;
  let right = 0;
  let u = "";
  let v = "";
  let isCorrect = true;

  for (let i = 0; i < p.length; i++) {
    if (p[i] === "(") {
      left++;
    } else {
      right++;
    }
    // 한번이라도 닫는괄호가 더 많이나오면 올바를수 없다
    if (left < right) {
      isCorrect = false;
    }

    if (left === right) {
      u = p.slice(0, i + 1);
      v = p.slice(i + 1);
      break;
    }
  }
  // 재귀
  if (isCorrect) {
    return u + solution(v);
  } else {
    // 4단계
    let empty = "";
    empty = empty + "(" + solution(v) + ")";
    // 첫번째 마지막 제거
    let newU = u.slice(1, u.length - 1);
    let rotU = "";
    // 괄호 뒤집기
    for (let i = 0; i < newU.length; i++) {
      if (newU[i] === "(") {
        rotU = rotU + ")";
      } else {
        rotU = rotU + "(";
      }
    }
    return empty + rotU;
  }
}
