// 각 쿼리별로 이동한 숫자 중 최솟값을 모은 배열을 리턴
// let matrix = new Array(matrixSize + 1).fill(0).map(e => new Array(matrixSize + 1).fill(0));

function solution(rows, columns, queries) {
  // 2중배열로 행렬 만들기
  let matrix = [];
  for (let i = 1; i <= rows; i++) {
    let ele = [];
    for (let j = 1; j <= columns; j++) {
      ele.push((i - 1) * columns + j);
    }
    matrix.push(ele);
  }
  // 쿼리순서대로 회전시키고 가장작은값찾기
  // 회전 구현하기 우 > 하 > 좌 > 상 순으로 4단계로 나눠서
  let result = [];
  queries.forEach((el) => {
    let fromRow = el[0] - 1;
    let fromCol = el[1] - 1;
    let toRow = el[2] - 1;
    let toCol = el[3] - 1;
    let curRow = fromRow;
    let curCol = fromCol;
    let movedNum = []; // 움직인 숫자들 담아줄 배열
    let saved = matrix[fromRow][fromCol]; //앞서 가져온값
    let saved2 = 0; //지금 칸의값
    //우
    for (let i = curCol; i <= toCol; i++) {
      let now = matrix[curRow][i];
      movedNum.push(now);
      saved2 = now; // 현재칸에있는값 저장하고
      matrix[curRow][i] = saved; // 여기서 이동하는값 넣어줌
      saved = saved2;
      curCol = i;
    }
    //하
    for (let i = curRow + 1; i <= toRow; i++) {
      let now = matrix[i][curCol];
      movedNum.push(now);
      saved2 = now;
      matrix[i][curCol] = saved;
      saved = saved2;
      curRow = i;
    }
    //좌
    for (let i = curCol - 1; i >= fromCol; i--) {
      let now = matrix[curRow][i];
      movedNum.push(now);
      saved2 = now;
      matrix[curRow][i] = saved;
      saved = saved2;
      curCol = i;
    }
    //상
    for (let i = curRow - 1; i >= fromRow; i--) {
      let now = matrix[i][curCol];
      movedNum.push(now);
      saved2 = now;
      matrix[i][curCol] = saved;
      saved = saved2;
      curRow = i;
    }
    result.push(Math.min(...movedNum)); // 움직인 숫자들 중 가장 작은 것만 결과배열에 푸쉬
  });
  return result;
}
