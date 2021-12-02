// 부분집합?
// 각 주문으로 부터 가능한 모든 조합(2개이상)을 만들고 조합객체에 수를 늘려주는 방식?
// 조합 의 조건 -> 길이2이상 + 2번이상 나타날것

function solution(orders, course) {
  let comb = {};

  orders.forEach((order) => {
    let orderArr = order.split("").sort();
    // WX 와 XW 는 같은것이다 객체에 넣을때 이걸 고려해줘야함.(원래 조합공식에서 이를 고려할 필요는없으나, orders배열의 각요소에 대해 각각 조합을 찾게 되므로 각 요소들이 같은 기준으로 정렬되어있지 않다면 둘째요소에서는 xw로 찾은걸 셋째요소에서는 wx로 찾게됨.) 재귀함수속에서 객체에 넣기전 정렬하는 것으로 했었으나 매번 정렬하는것보다 재귀에 들어가기 전에 정렬시키는 것이 더 좋아보여 옮김
    let maxCount = orderArr.length;

    findComb(orderArr, "", maxCount);
  });
  // 조합을 찾아낼 재귀함수
  function findComb(arr, com, n) {
    if (com.length >= 2) {
      if (comb[com]) {
        comb[com]++;
      } else {
        comb[com] = 1;
      }
    }

    if (n === 0) {
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      let pick = arr[i];
      let sliceArr = arr.slice();

      findComb(sliceArr.slice(i + 1), com + pick, n - 1);
    }
  }

  let result = [];

  for (let el of course) {
    let freq = 2;
    let temp = [];
    for (let combi in comb) {
      debugger;
      if (`${combi}`.length === el) {
        if (comb[combi] > freq) {
          freq = comb[combi];
          temp = [];
          temp.push(`${combi}`);
        } else if (comb[combi] === freq) {
          temp.push(`${combi}`);
        }
      }
    }
    result.push(...temp);
  }

  return result.sort();
}
