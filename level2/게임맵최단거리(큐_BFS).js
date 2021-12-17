// 길찾기  - 지나온 칸 숫자 입력해가며 체크하기.
// 상하좌우 이동가능성을 검토하고 가능한 이동을 시키는 방식 / 상대진영이동하는 최단거리 이동횟수를 구할수 있게됨 -> 존재하면 리턴 없다면 -1리턴
// 재귀로 풀면 효율성테스트에서 콜스택이 터져버림... 테스트환경이 콜스택이 조금 작은듯 보임 배열 큐등을 활용해보자

function solution(maps) {
  let width = maps[0].length;
  let height = maps.length;

  let queue = ["001"];

  while (queue.length !== 0) {
    let now = queue.shift();
    let row = Number(now[0]);
    let col = Number(now[1]);
    let count = Number(now.slice(2));
    // 현재 도달한 칸에 도달하기 까지 걸린 이동횟수를 기록 (시작점은 재방문하는 문제를 막기위해 0으로만들어주자.)
    if (row === 0 && col === 0) {
      maps[row][col] = 0;
    } else {
      maps[row][col] = count;
    }
    // 마지막 칸에 도달했다면 탈출
    if (maps[height - 1][width - 1] !== 1) {
      return count;
    }
    // 이동조건
    // 상
    if (row - 1 >= 0) {
      if (maps[row - 1][col] === 1 || maps[row - 1][col] > count + 1) {
        let next = `${row - 1}${col}${count + 1}`;
        if (!queue.includes(next)) {
          queue.push(next);
        }
      }
    }
    // 하
    if (row + 1 < height) {
      if (maps[row + 1][col] === 1 || maps[row + 1][col] > count + 1) {
        let next = `${row + 1}${col}${count + 1}`;
        if (!queue.includes(next)) {
          queue.push(next);
        }
      }
    }
    // 좌
    if (col - 1 >= 0) {
      if (maps[row][col - 1] === 1 || maps[row][col - 1] > count + 1) {
        let next = `${row}${col - 1}${count + 1}`;
        if (!queue.includes(next)) {
          queue.push(next);
        }
      }
    }
    // 우
    if (col + 1 < width) {
      if (maps[row][col + 1] === 1 || maps[row][col + 1] > count + 1) {
        let next = `${row}${col + 1}${count + 1}`;
        if (!queue.includes(next)) {
          queue.push(next);
        }
      }
    }
  }
  return -1;
}
