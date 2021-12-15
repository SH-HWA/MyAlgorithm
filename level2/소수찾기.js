// 문자열로 입력받은 숫자들 배열로 분리시킴.(split)
// 각 숫자들로 만들 수 있는 모든 수의 조합 찾음(순열?)
// 0이 맨앞에 오는 경우는 (11,011) 같은걸로 취급
// 소수인지 여부를 판별하여 result배열에 푸쉬

function solution(numbers) {
  // 만들수 있는 숫자들 찾기
  let numArr = numbers.split("");
  let candi = [];

  function findCandi(arr, bucket) {
    if (arr.length === "0") {
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      let clone = arr.slice();
      let pick = clone.splice(i, 1);
      let cur = Number(bucket.concat(pick).join(""));
      // 소수가 될 수 없고 판별식에서 거르기 힘든 0,1 이 후보인경우 빼버리자.(짝수도 제외하려했지만 2는 고려해야하므로)
      if (cur !== 0 && cur !== 1 && !candi.includes(cur)) {
        candi.push(cur);
      }
      findCandi(clone, bucket.concat(pick));
    }
  }

  findCandi(numArr, []);
  // 만들어진 숫자 소수인지 여부 검토
  // 특정범위의 숫자를 전부 소수 검토하는경우 에라토스테네스의 체 사용이 유리
  // 지금같은경우는 가능한숫자의 조합을 소수검증하는 경우니까 제곱근까지만 하는방법 사용
  function isPrime(num) {
    if (num === 2) {
      return true;
    }
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  let prime = [];

  for (let i = 0; i < candi.length; i++) {
    if (isPrime(candi[i])) {
      prime.push(candi[i]);
    }
  }

  return prime.length;
}
