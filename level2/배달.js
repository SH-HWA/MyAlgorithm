function solution(N, road, K) {
  // road의 순서가 제어가능하도록 정렬
  road = road.map((el) => [String(el[0]), String(el[1]), el[2]]);
  let result = ["1"];
  // cur [현재위치, 현재까지이동거리] //
  function findNext(cur, visited) {
    // 현재위치를 포함하고 있는 길들 골라냄
    let newRoad = road.filter((el) => el.includes(cur[0]));
    for (let i = 0; i < newRoad.length; i++) {
      let from = newRoad[i].indexOf(cur[0]);
      let to = 0;
      if (from === 0) {
        to = 1;
      }
      if (cur[1] + newRoad[i][2] <= K) {
        result.push(newRoad[i][to]);
        if (!visited[newRoad[i][to]]) {
          visited[newRoad[i][to]] = cur[1] + newRoad[i][2];
          findNext([newRoad[i][to], cur[1] + newRoad[i][2]], visited);
        }
        if (visited[newRoad[i][to]] > cur[1] + newRoad[i][2]) {
          visited[newRoad[i][to]] = cur[1] + newRoad[i][2];
          findNext([newRoad[i][to], cur[1] + newRoad[i][2]], visited);
        }
      }
    }
    return;
  }
  findNext(["1", 0], {});

  return [...new Set(result)].length;
}
