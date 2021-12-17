// 길찾기  - 지나온 칸 숫자 입력해가며 체크하기.
// 이동한 거리를 숫자로 기록해가며 이동시킬 것이므로 장애물과 이동가능한 칸을 표시하는 1,0을 x,o등으로 바꿔주자
// 상하좌우 이동가능성을 검토하고 가능한 이동을 시키는 방식 / 상대진영이동하는 최단거리 이동횟수를 구할수 있게됨 -> 존재하면 리턴 없다면 -1리턴

function solution(maps) {
  // 1,0대신 O, X로
  let matrix = maps.map((arrEl) =>
    arrEl.map((el) => {
      if (el === 0) {
        return "X";
      } else {
        return "O";
      }
    })
  );
  let width = matrix[0].length;
  let height = matrix.length;

  function move(row, col, count) {
    debugger;
    // 현재 도달한 칸에 도달하기 까지 걸린 이동횟수를 기록
    matrix[row][col] = count;
    // 이동조건(상 하 좌 우)
    // 상
    let isMoved = false;
    if (row - 1 >= 0) {
      if (matrix[row - 1][col] === "O" || matrix[row - 1][col] > count + 1) {
        isMoved = true;
        move(row - 1, col, count + 1);
      }
    }
    // 하
    if (row + 1 < height) {
      if (matrix[row + 1][col] === "O" || matrix[row + 1][col] > count + 1) {
        isMoved = true;
        move(row + 1, col, count + 1);
      }
    }
    // 좌
    if (col - 1 >= 0) {
      if (matrix[row][col - 1] === "O" || matrix[row][col - 1] > count + 1) {
        isMoved = true;
        move(row, col - 1, count + 1);
      }
    }
    // 우
    if (col + 1 < width) {
      if (matrix[row][col + 1] === "O" || matrix[row][col + 1] > count + 1) {
        isMoved = true;
        move(row, col + 1, count + 1);
      }
    }
    // 다음칸으로 이동하지 못할 경우 재귀탈출
    if (!isMoved) {
      return;
    }
  }

  move(0, 0, 1);
  // 이동거리라고 생각해서 처음엔 0으로 시작했는데 예제를 보니 지나온 칸 갯수를 모두 세주는 것 같아서 출발점도 세주었다.

  if (matrix[height - 1][width - 1] === "O") {
    return -1;
  } else {
    return matrix[height - 1][width - 1];
  }
}
