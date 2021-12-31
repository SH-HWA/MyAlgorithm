// halfB를 갈색칸을 대각선으로 반으로 잘라 상부 / 하부 중 하나로 생각
// 그렇게되면 halfB = 가로 + (세로 - 2)가 된다.
// 세로를 1부터 늘려가면서 가로 * 세로 가 brown + yellow가 되게하는 길이를 찾는다.

function solution(brown, yellow) {
  let total = brown + yellow;
  let halfB = brown / 2;
  let result = [];

  for (let i = 1; i < halfB; i++) {
    //가로길이 후보(가로길이가 길다는 조건이 있으므로 가로를 최대값부터 탐색)
    let width = halfB - i;
    let height = i + 2;
    //i는 노랑영역의 세로길이 후보값
    if (width * height === total) {
      result.push(width);
      result.push(height);
      break;
    }
  }

  return result;
}
