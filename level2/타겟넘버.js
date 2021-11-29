// n개의 음이아닌 정수
// 적절 더하거나 빼서 타겟 넘버를 만들자
// 순서 유의미함 -> 재귀활용? 가능한 모든조합을 만들고 연산결과가 target과 같은것만 결과값에 푸쉬?
// 일반적인 순열 만드는 방법을 참고하되 + - 부호를 다 가질 수 있는 점을 유의하자

function solution(numbers, target) {
  let result = [];

  const getPer = function (arr, bucket) {
    // 탈출조건
    if (arr.length === 0) {
      let sum = bucket.reduce((acc, cur) => {
        return acc + cur;
      });
      if (sum === target) {
        let stringify = bucket.join("");
        result.push(stringify);
      }
      return;
    }
    // 재귀
    for (let i = 0; i < arr.length; i++) {
      let clone = arr.slice();
      let pick = clone.splice(i, 1);
      let negative = pick * -1;

      debugger;
      getPer(clone, bucket.concat(pick));
      getPer(clone, bucket.concat(negative));
    }
  };

  getPer(numbers, []);
  // 중복제거
  let filtered = new Set(result);
  let newResult = [...filtered];
  return newResult.length;
}
