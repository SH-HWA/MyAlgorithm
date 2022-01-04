// 던전 순서 조합을 만들어서 각 조합별로 몇개의 던전 수행이 가능한지 검토? (효율은 안좋을 것으로 예상)
// + 조합을 생성할 때 그때그때 현재 피로도를 반영하여 입장조건이 현재 피로도 보다 높은경우는 걸러내면서 만들면 연산을 줄일 수 있나?

function solution(k, dungeons) {
  let result = [];

  function combi(arr, bucket, p) {
    let filtered = arr.filter((el) => el[0] <= p);
    if (filtered.length === 0) {
      result.push(bucket.length);
    }

    for (let i = 0; i < filtered.length; i++) {
      let clone = filtered.slice();
      let pick = clone.splice(i, 1); // splice가 리턴하는 모양에 주의!
      let afterP = p - pick[0][1];
      combi(clone, bucket.concat(pick), afterP);
    }
  }

  combi(dungeons, [], k);
  return Math.max(...result);
}
