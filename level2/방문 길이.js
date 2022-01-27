function solution(dirs) {
  let memo = [];
  let cur = [0, 0];
  let count = 0;

  for (let i = 0; i < dirs.length; i++) {
    let from = String(cur[0]) + String(cur[1]);
    let isValid = true;

    switch (dirs[i]) {
      case "U":
        if (cur[1] === 5) {
          isValid = false;
        } else {
          cur[1] = cur[1] + 1;
        }
        break;
      case "D":
        if (cur[1] === -5) {
          isValid = false;
        } else {
          cur[1] = cur[1] - 1;
        }
        break;
      case "L":
        if (cur[0] === -5) {
          isValid = false;
        } else {
          cur[0] = cur[0] - 1;
        }
        break;
      case "R":
        if (cur[0] === 5) {
          isValid = false;
        } else {
          cur[0] = cur[0] + 1;
        }
        break;
    }
    // 좌표 범위를 벗어나는 명령어는 무시
    if (!isValid) {
      continue;
    }

    let to = String(cur[0]) + String(cur[1]);
    let curPath = from + to;
    let revPath = to + from;
    // 이미 지났던 길인지 검토 -> 아니라면 지금 길(출발-도착) + 반대방향(도착-출발) 둘다 메모에 입력(이미 거쳐간 길인지만 따지니까)
    if (!memo.includes(curPath)) {
      memo.push(curPath);
      memo.push(revPath);
      count++;
    }
  }

  return count;
}
