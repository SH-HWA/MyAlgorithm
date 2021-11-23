// 1개 이상의 단위로 잘라서 압축하여 더 짧은 문자열로 표현
// 문자열은 제일 앞부터 정해진 길이만큼 잘라야
// 제일 앞부터 최대 몇개 까지 반복단위를 자를 수 있는지 검토 <- 가장 중요할듯
// 자르는 방법에 대한 생각 : 1. 자를 단위는 최대 문자열의 길이 절반을 넘을 수 없다(길이 1~절반 까지 다 검토? / 홀수일때는 절반을 내림(floor) /
// 최대 자르는 길이 까지 반복하여 잘라진 결과물들을 배열에 담고 가장 짧은것을 리턴?
// 5번 테스트케이스만 실패..? -> 입력받은 길이가 1인 문자열을 받았을때 내가 작성한 조건이 어떻게 망가질 수 있는지 볼 것! (예외처리 하자)

function solution(s) {
  // 길이가 1인 문자열 예외처리
  if (s.length === 1) {
    return 1;
  }
  // 자를수 있는 가장 큰 단위(최대치)
  let maxUnit = Math.floor(s.length / 2);
  let result = [];

  for (let i = 1; i <= maxUnit; i++) {
    let start = 0;
    let end = i;
    let compressed = [];
    compressed.push(s.slice(start, end));

    while (end + i <= s.length) {
      let now = []; //
      start = end;
      end = end + i;
      if (s.slice(start, end) === compressed[compressed.length - 1]) {
        compressed.pop();
        if (
          !compressed[compressed.length - 1] ||
          typeof compressed[compressed.length - 1] === "string"
        ) {
          compressed.push(2);
          compressed.push(s.slice(start, end));
        } else if (typeof compressed[compressed.length - 1] === "number") {
          compressed[compressed.length - 1] =
            compressed[compressed.length - 1] + 1;
          compressed.push(s.slice(start, end));
        }
      } else {
        compressed.push(s.slice(start, end));
      }
    }
    // 단위별로 자르고 남은 짜투리 뒤에다 붙이기
    if (end < s.length && end + i > s.length) {
      start = end;
      end = end + i;

      compressed.push(s.slice(start, end));
    }
    // 여기까지 오면 해당 단위로 압축이 되어있음!(while문 + 짜투리처리 끝)
    let compressedStr = compressed.join("");
    result.push(compressedStr.length);
  }

  return Math.min(...result);
}
