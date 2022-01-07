// 매개변수로 삼각형의 높이가 주어진다.

function solution(n) {
  let triObj = {};
  let idx = 1;
  while (idx <= n) {
    triObj[`arr${idx}`] = [];
    idx++;
  }

  let cur = 1;
  let direction = 0;
  for (let i = n; i > 0; i--) {
    let cycle = Math.floor(direction / 3);
    for (let j = 1; j <= i; j++) {
      switch (direction % 3) {
        case 0:
          triObj[`arr${j + cycle * 2}`].splice(cycle, 0, cur);
          cur++;
          break;
        case 1:
          triObj[`arr${n - cycle}`].splice(cycle + j, 0, cur);
          cur++;
          break;
        case 2:
          triObj[`arr${n - cycle - j}`].splice(
            triObj[`arr${n - cycle - j}`].length - cycle,
            0,
            cur
          );
          cur++;
          break;
      }
    }
    direction++;
  }
  let result = [];
  for (let arrays in triObj) {
    result = result.concat(triObj[arrays]);
  }
  // console.log(triObj);
  return result;
}
