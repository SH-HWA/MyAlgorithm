// 연산자의 우선순위를 자유롭게 재정의 (동순위는 없음)
// 계산된 결과의 절대값을 제출하여 가장 큰참가자가 우승
// 수식에 주어진 연산자들을 찾아내고 가능한 조합을 모두 고려해 크기들을 비교하고 가장 큰값을 리턴

function solution(expression) {
  // expression을 숫자와 연산자로 구분한 배열을 만든다.
  let expArr = [];
  // expression에 포함된 연산자들을 추려냄
  let operator = [];
  let idx = 0;
  for (let i = 0; i < expression.length; i++) {
    if (
      expression[i] === "+" ||
      expression[i] === "-" ||
      expression[i] === "*"
    ) {
      expArr.push(expression.slice(idx, i));
      expArr.push(expression[i]);
      idx = i + 1;
      if (!operator.includes(expression[i])) {
        operator.push(expression[i]);
      }
    }
    if (i === expression.length - 1) {
      expArr.push(expression.slice(idx, i + 1));
    }
  }
  // 연산자들로 만들 수 있는 우선순위 조합을 찾음(순열)
  let priority = [];
  function permutation(arr, bucket) {
    //탈출
    if (arr.length === 0) {
      priority.push(bucket);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      let clone = arr.slice();
      let pick = clone.splice(i, 1);
      permutation(clone, bucket.concat(pick));
    }
  }
  permutation(operator, []);
  // 가능한 우선순위 별 연산 결과를 찾음
  let result = [];
  for (let oper of priority) {
    let newArr = expArr.slice();
    for (let j = 0; j < oper.length; j++) {
      for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === oper[j]) {
          let mid = 0;
          if (oper[j] === "+")
            mid = Number(newArr[i - 1]) + Number(newArr[i + 1]);
          if (oper[j] === "-")
            mid = Number(newArr[i - 1]) - Number(newArr[i + 1]);
          if (oper[j] === "*")
            mid = Number(newArr[i - 1]) * Number(newArr[i + 1]);
          newArr.splice(i - 1, 3, mid);
          i = i - 1;
        }
      }
    }
    result.push(Math.abs(...newArr));
  }
  return Math.max(...result);
}
