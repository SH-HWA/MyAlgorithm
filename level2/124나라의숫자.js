// 3진법으로 보고 풀어도 될까? 0이 없다는 점 & 3까지 한자리 수로 표현한다는 점에서 다름
// 그래도 자리 수 넘어가는 방식 자체는 4진법이 아닌 3진법에 해당함

function solution(n) {
  let result = "";

  while (n > 3) {
    if (n % 3 === 0) {
      // 3으로 나누어 떨어질 경우 몫 - 1 을 내려주고 & 나머지 자리엔 3대신 4를 사용
      result = "4" + result;
      n = n / 3 - 1;
    } else {
      result = String(n % 3) + result;
      n = Math.floor(n / 3);
    }
  }

  if (n === 3) {
    result = "4" + result;
  } else {
    result = String(n) + result;
  }

  return result;
}
