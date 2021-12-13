// 격자 내에서 빛이 이동할 수 있는 경로 사이클이 몇개? (+ 길이도)
// 출발점(+ 방향)에서 출발점(+ 방향까지 같게) 돌아온다면 사이클을 구성. (출발점이 다르더라도 같은 내용으로 돌고있다면 같은 사이클)
// 이동시키는 함수 + 회전시키는 함수 + 벽만나면 반대편으로 움직일 함수
// 그리드의 모든칸에 대해 사이클을 검토해야...?
// [행, 열, 방향]

function solution(grid) {
  let cycle = [];
  let dir = ["l", "u", "r", "d"];
  // 반복문을 돌면서 현재 싸이클을 만든다.(추후에 정렬해서 cycle에 이미 있는거면 푸쉬하지 않음)
  let curCycle = "";
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      for (let k = 0; k < dir.length; k++) {
        let start = [i, j, k];
        findCycle(i, j, k, []);

        if (!cycle.includes(curCycle)) {
          cycle.push(curCycle);
        }
      }
    }
  }

  function findCycle(row, col, dirIdx, history) {
    // 현재칸을 문자열화한 값
    let cur = String(row) + String(col) + String(dir[dirIdx]);
    // 탈출 (cur === 시작점일때)
    if (history[0] === cur) {
      curCycle = history.sort().join(" ");
      return;
    }
    // 사이클이 실패한경우? (제자리걸음할 경우?)
    if ((history[history.lengh - 1] === history[history.lengh - 2]) === cur) {
      return;
    }
    // cur history에 푸쉬
    history.push(cur);
    // 방향 전환
    switch (grid[row][col]) {
      case "L":
        if (dirIdx === 0) {
          dirIdx = 3;
        } else {
          dirIdx = dirIdx - 1;
        }
        break;
      case "R":
        if (dirIdx === 3) {
          dirIdx = 0;
        } else {
          dirIdx = dirIdx + 1;
        }
        break;
    }
    // 한칸이동
    switch (dirIdx) {
      case 0:
        if (col === 0) {
          col = grid[row].length - 1;
        } else {
          col = col - 1;
        }
        break;
      case 1:
        if (row === 0) {
          row = grid.length - 1;
        } else {
          row = row - 1;
        }
        break;
      case 2:
        if (col === grid[row].length - 1) {
          col = 0;
        } else {
          col = col + 1;
        }
        break;
      case 3:
        if (row === grid.length - 1) {
          row = 0;
        } else {
          row = row + 1;
        }
        break;
    }
    findCycle(row, col, dirIdx, history);
  }

  let result = cycle.map((el) => el.split(" ").length);
  return result.sort((a, b) => a - b);
}

// 혹시 사이클을 완성하지 못하고 실패한 케이스를 고려해줘야하는걸까?
