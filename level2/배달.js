// 앞자리수부터 검토하면서 뒷자리가 앞자리보다 크면 그 앞을 삭제
// 삭제할 때마다 처음부터 돌아가서 검토?
// 10번 테스트 시간초과..!
// 시간을 줄이는 방법? 9인경우의 검토?

function solution(number, k) {
  let count = 0;

  for (let i = 0; i < number.length; i++) {
    if (count === k) {
      return number;
    }
    if (number[i] === "9") {
      continue;
    }
    if (Number(number[i]) < Number(number[i + 1])) {
      number = number.slice(0, i) + number.slice(i + 1); // i번째 삭제
      count++;
      // 자리를 바꿨다면 그 앞의 수와도 검토해야함
      i = i - 2;
      if (i < -1) {
        i = -1;
      }
    }
  }
  // 추가로 고려해주어야 할 경우 위 반복문을 전부 순회하였는데 count가 k미만인 경우(삭제갯수 부족)
  // 위 반복문에서 앞자리일수록 큰수이도록 수정이 되어있을 것이므로 부족한 카운트만큼 뒤에서 제거하면 된다.
  let remain = (k - count) * -1;
  number = number.slice(0, remain);

  return number;
}
