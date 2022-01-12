// *별  : n개의 직선의 교점 중 정수 좌표
// line : 2 -1 4 인 경우 -> 2x - y + 4 = 0 이런 모양
// 선분들끼리의 교차여부를 검토
// 선분이 일반형으로 주어졌을 때 교점 찾는 공식 이용
// 1. 평행 혹은 일치하는지 여부를 검토
// 2. 교차점 찾기

function solution(line) {
  let stars = [];

  for (let i = 0; i < line.length; i++) {
    for (let j = i + 1; j < line.length; j++) {
      let isCrossed = true;
      let [a1, b1, c1] = line[i];
      let [a2, b2, c2] = line[j];
      let intersection = [0, 0];
      // 공식의 분모를 이용하여 교차여부를 검토
      if (a1 * b2 - a2 * b1 === 0) {
        isCrossed = false;
      }
      if (isCrossed) {
        intersection[0] = (b1 * c2 - b2 * c1) / (a1 * b2 - a2 * b1);
        intersection[1] =
          ((-1 * a1) / b1) * ((b1 * c2 - b2 * c1) / (a1 * b2 - a2 * b1)) -
          c1 / b1;
        // 교점의 좌표가 모두 정수인 경우
        if (intersection[0] % 1 === 0 && intersection[1] % 1 === 0) {
          stars.push([intersection[0], intersection[1]]);
        }
      }
    }
  }
  if (stars.length === 0) {
    return;
  }
  // stars에 있는 좌표들을 이용해 사각형을 만든다.
  // 만들 사각형 가로/세로 길이 구하기
  let maxX = stars[0][0];
  let leastX = stars[0][0];
  let maxY = stars[0][0];
  let leastY = stars[0][0];

  for (let i = 0; i < stars.length; i++) {
    if (stars[i][0] < leastX) leastX = stars[i][0];
    if (stars[i][0] > maxX) maxX = stars[i][0];
    if (stars[i][1] < leastY) leastY = stars[i][1];
    if (stars[i][1] > maxY) maxY = stars[i][1];
  }
  // 사각형만들기
  let result = new Array(maxY - leastY + 1).fill(
    new Array(maxX - leastX + 1).fill(".").join("")
  );
  for (let i = 0; i < stars.length; i++) {
    let xidx = stars[i][0] - leastX;
    // 행렬로 읽을떈 y좌표 방향이 반대니까..!
    let yidx = (stars[i][1] - maxY) * -1;
    result[yidx] =
      result[yidx].slice(0, xidx) + "*" + result[yidx].slice(xidx + 1);
  }
  return result;
}
