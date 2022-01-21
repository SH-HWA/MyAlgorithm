// n x n 2차원 배열 만들기
// 수채우기
// 잘라서 이어붙이기
// left ~ right 잘라내기

// function solution(n, left, right) {
//     // let matrix = new Array(n).fill(new Array(n))
//     // 위의 식대로 하면 안되는 이유: 가변성
//     let matrix = new Array(n);
//     for (let i = 0; i < matrix.length; i++) {
//         matrix[i] = new Array(n);
//     }

//     for (let row = 0; row < n; row++) {
//         for (let col = 0; col < n; col++) {
//             if (col < row) {
//                 // 현재넣어야할 값이 '행' 보다 작을땐 '열+1'이 아닌 '행+1'을 넣어줌
//                 matrix[row][col] = row + 1;
//             } else {
//                 matrix[row][col] = col + 1;
//             }
//         }
//     }

//     let newMatrix = [];
//     matrix.forEach(el => newMatrix.push(...el));

//     return newMatrix.slice(left, right + 1);
// }

// 제한사항 10의 7승까지 등장 배열을 직접 다만드는건 엄청난 양의 연산을 해야함
// 필요한 부분만 만들 수는 없나?

function solution(n, left, right) {
  let minR = Math.floor(left / n);
  let minI = left % n;
  let maxR = Math.floor(right / n);
  let maxI = right % n;
  let resultArr = [];

  for (let i = minR; i <= maxR; i++) {
    for (let j = 1; j <= n; j++) {
      if (j < i + 1) {
        resultArr.push(i + 1);
      } else {
        resultArr.push(j);
      }
    }
  }

  let lastIdx = maxI - (n - 1);
  if (lastIdx === 0) {
    lastIdx = resultArr.length;
  }
  return resultArr.slice(minI, lastIdx);
}
