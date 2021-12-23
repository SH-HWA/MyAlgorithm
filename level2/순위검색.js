// info 에는 지원자들의 정보, query에는 회사가 원하는 조건
// idx를 활용한 탐색이 가능하도록 정보들을 가공해보자

function solution(info, query) {
  let applicant = info.map((el) => el.split(" "));
  let condition = query.map((el) => {
    let arr = el.split(" and ");
    let lastEl = arr.pop().split(" ");
    let newArr = [...arr, ...lastEl];
    return newArr;
  });
  // 위과정 하지 않으면 condition 은 and가 마지막에는 안붙어서 ['java', 'backend', 'junior', 'pizza 100'] 이런모양이 된다
  let result = [];
  // let memoQ = [];
  // let memoA = [];

  for (let i = 0; i < condition.length; i++) {
    let checkArr = new Array(applicant.length).fill(1);
    // let curQ = '';
    for (let j = 0; j < condition[i].length; j++) {
      //메모이제이션활용과정
      // curQ = curQ + condition[i][j];
      // if (memoQ.includes(curQ)) {
      //     checkArr = memoA[memoQ.indexOf(curQ)];
      //     continue;
      // }
      //
      if (condition[i][j] === "-") {
        continue;
      }
      for (let k = 0; k < checkArr.length; k++) {
        // 이미 앞의 과정에서 조건에 걸려 0이된경우는 재검토가 불필요
        if (checkArr[k] === 0) {
          continue;
        }
        // 마지막 요소는 같은지 여부가 아닌 숫자가 기준보다 큰지 이므로...
        if (j === condition[i].length - 1) {
          if (Number(condition[i][j]) > Number(applicant[k][j])) {
            checkArr[k] = 0;
          }
        } else {
          if (condition[i][j] !== applicant[k][j]) {
            checkArr[k] = 0;
          }
        }
      }
      // 현재쿼리로 검토한 checkArr메모에 저장
      // memoQ.push(curQ);
      // memoA.push(checkArr.slice());

      // 체크중인 배열의 모든요소가 0이라면 더 검토할 필요는 x
      if (Math.max(...checkArr) === 0) {
        break;
      }
    }
    result.push(checkArr.reduce((acc, cur) => acc + cur));
  }
  return result;
}

// 연산 줄이기 메모이제이션활용?
