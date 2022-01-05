// 가로2칸세로2칸 같은문자일때 지워짐
// 같은 블록 여러 2x2에 포함 가능 -> 한꺼번에 지워짐 -> 보드복사본을통해 지워짐을 단계별로 구현하고 나중에 한꺼번에 원본을 바꾸는 식으로
// 한꺼번에 지워진 후 블록들 밑으로 떨어지는것 구현해야함(블록이 지워지는 경우가 생기면 바로 다음에 떨어지는 과정이 필요!)
// m높이 n폭

function solution(m, n, board) {
  let breaked = true;
  while (breaked) {
    let count = 0;
    let clone = board.slice();
    let breakCheck = false;
    // 현재-우-하-좌 칸 같은 문자이면 지우는 방식(제일오른쪽 & 제일아래는 검토x)
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        let cur = board[i][j];
        if (
          cur !== "!" &&
          cur === board[i][j + 1] &&
          cur === board[i + 1][j + 1] &&
          cur === board[i + 1][j]
        ) {
          clone[i] = clone[i].slice(0, j) + "!!" + clone[i].slice(j + 2);
          clone[i + 1] =
            clone[i + 1].slice(0, j) + "!!" + clone[i + 1].slice(j + 2);
          breakCheck = true;
        }
      }
    }
    // !로 바뀐 블록위에 다른 문자 블록이있다면 자리를 바꾸는 식으로 !가 떠오르게 해준다 (!개수 카운팅도)
    for (let j = 0; j < n; j++) {
      for (let i = 0; i < m; i++) {
        if (clone[i][j] === "!") {
          count++;
          let cur = i;
          let up = i - 1;
          let target;
          if (up >= 0) target = clone[up][j];
          while (up >= 0 && clone[up][j] !== "!") {
            clone[up] = clone[up].slice(0, j) + "!" + clone[up].slice(j + 1);
            clone[cur] =
              clone[cur].slice(0, j) + target + clone[cur].slice(j + 1);
            cur = up;
            up = cur - 1;
            if (up >= 0) target = clone[up][j];
          }
        }
      }
    }
    // 보드원본을 바꿔주고 만약 더이상 지워질블록이 없었다면 탈출
    board = clone;
    if (!breakCheck) {
      breaked = false;
      return count;
    }
  }
}

// 원래 !대신 X를 사용했었지만...
// (블록을 나타내는 문자는 대문자 A에서 Z가 사용된다.) <- 이 조건에 주의..! 캐릭터 이름 앞글자만 올 수 있는 것처럼  이야기 했으면서... 조건을 잘보자
