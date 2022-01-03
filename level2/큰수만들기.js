// 앞자리수부터 검토하면서 뒷자리가 앞자리보다 크면 그 앞을 삭제
// 삭제할 때마다 처음부터 돌아가서 검토?
// 10번 테스트 시간초과..!
// 시간을 줄이는 방법? 9인경우의 검토?

// function solution(number, k) {
//     let count = 0;

//     for (let i = 0; i < number.length; i++) {
//         if (count === k) {
//             return number;
//         }
//         if (number[i] === '9') {
//             continue;
//         }
//         if (Number(number[i]) < Number(number[i + 1])) {
//             number = number.slice(0, i) + number.slice(i + 1) // i번째 삭제
//             count++;
//             // 자리를 바꿨다면 그 앞의 수와도 검토해야함
//             i = i - 2;
//             if (i < -1) {
//                 i = -1;
//             }
//         }
//     }
//     // 추가로 고려해주어야 할 경우 위 반복문을 전부 순회하였는데 count가 k미만인 경우(삭제갯수 부족)
//     // 위 반복문에서 앞자리일수록 큰수이도록 수정이 되어있을 것이므로 부족한 카운트만큼 뒤에서 제거하면 된다.
//     let remain = (k - count) * -1;
//     number = number.slice(0, remain);

//     return number;
// }

// 스택을 활용한 방법으로..!
function solution(number, k) {
  let targetLength = number.length - k;
  let answer = "";
  let count = targetLength;
  // targetLength번만큼 '0부터 제거해야할 수 만큼 범위가 줄은 영역'에서 가장 큰수를 찾으면 된다.
  // 영역 -> k만큼 수를 지웠을 것이므로 뒤에서 k만큼뺀 영역에서 큰수를 찾아 하나씩 채우는 원리이다.
  let start = 0;
  let maxIdx = 0;
  while (count > 0) {
    let max = 0; // 변수선언 위치 주의 while문 밖에서하면 max값 초기화가 안되고, start/maxIdx는 반복문의 사이즈를 줄이기 위한 것이므로 초기화가되면안되니까 while밖으로
    for (let i = start; i <= number.length - count; i++) {
      if (Number(number[i]) > Number(max)) {
        max = number[i];
        maxIdx = i;
        if (max === "9") {
          break;
        }
      }
    }
    // 특정한 범위(number의 0~length-count) 내에서 가장 큰수를 하나 answer에 추가
    count = count - 1;
    start = maxIdx + 1;
    answer = answer + max;
  }
  return answer;
}
