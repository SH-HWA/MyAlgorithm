// 재귀로 참가자별로 주변영역을 탐색?
// 맨해튼 거리(두 지점간의 x좌표차이 + y좌표차이)
// 입력받은 대기실 별로 거리두기 준수여부를 담은 배열을 리턴(대기실 크기는 5*5로 고정)
// 인덱스를 활용하기 위해서는 각 대기실들을 이중배열로 만들어 활용하는 것이 편리해보임
// 거리두기 준수 여부 검토 방법: 응시자가 있는자리(p)를 기준으로 2맨해튼거리까지를 재귀로 탐험시켜 다른참가자를 만나는지 여부를 확인?
// P:응시자 O:빈테이블 x:파티션 검토한칸:C

// 3.
function recursion(arr, startRow, startCol, row, col, dis) {
  // 거리두기 x인경우: 출발점을 F로
  if (arr[row][col] === "P") {
    arr[startRow][startCol] = "F";
    return;
  }
  // 파티션을 만나면 거리를 1 늘려준다
  if (arr[row][col] === "X") {
    dis = dis + 1;
  }
  // 검토한 빈자리는 c로 (콘솔 확인용)
  if (arr[row][col] === "O") {
    arr[row][col] = "C";
  }
  // 이동거리반영
  dis = dis + 1;
  // 탈출2 (이동거리 2넘었다면 더이상 재귀할필요x)
  if (dis > 2) {
    return;
  }
  // 상하좌우칸 재귀
  if (row - 1 >= 0) recursion(arr, startRow, startCol, row - 1, col, dis);
  if (row + 1 < 5) recursion(arr, startRow, startCol, row + 1, col, dis);
  if (col - 1 >= 0) recursion(arr, startRow, startCol, row, col - 1, dis);
  if (col + 1 < 5) recursion(arr, startRow, startCol, row, col + 1, dis);
}
// 2.
function isSeperated(matrix) {
  let result = true;
  //p점을 만나면 재귀를시작
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] === "P") {
        // 이중배열의 복사
        let clone = matrix.map((el) => el.slice());
        // 출발점을 P가아닌 값으로 바꿔줌
        clone[i][j] = "S";
        recursion(clone, i, j, i, j, 0);
        if (clone[i][j] === "F") {
          result = false;
          break;
        }
      }
    }
  }
  return result;
}
// 1.
function solution(places) {
  let result = [];
  for (let i = 0; i < places.length; i++) {
    // 대기실을 이중배열로 만들어줌
    let matrix = [];
    for (let j = 0; j < places[i].length; j++) {
      matrix.push(places[i][j].split(""));
    }
    // 거리두기 준수 여부를 검토
    if (isSeperated(matrix)) {
      result.push(1);
    } else {
      result.push(0);
    }
  }
  return result;
}
