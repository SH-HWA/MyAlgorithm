//x보다 크고 x와 비트가 1~2개 다른 수들 중에서 제일 작은 수
// 비트가 1~2개 다르다
// 1. 제일 뒷자리가 0 -> 1로바꿔준다 < 1개다름,
// 2. 뒷자리부터 탐색하여 0을찾으면 0을 하나 뒷자리로 보내고 그자리를1로 < 2개다름
// 3. 0이 포함안되어있다면 제일 앞자리를 0으로 바꾸고 그앞자리를 1로(예제 7의경우참고) < 2개다름 ... 앞에0을 붙여주면 이과정 생략가능

function solution(numbers) {
  let result = [];

  for (let num of numbers) {
    let div = num;
    let bin = [];
    // 2진법 변환
    while (div > 1) {
      bin.unshift(div % 2);
      div = Math.floor(div / 2);
    }
    bin.unshift(div);
    bin.unshift(0); //3. 생략을 위한과정
    // 비트가 1~2개 다른 수들 중에서 제일 작은 수 찾기

    // let hasZero = false;
    for (let i = bin.length - 1; i >= 0; i--) {
      if (bin[i] === 0) {
        // hasZero = true;
        if (i === bin.length - 1) {
          // 1.케이스
          bin[i] = 1;
          break;
        } else {
          // 2.케이스
          bin[i] = 1;
          bin[i + 1] = 0;
          break;
        }
      }
    }
    // 3.케이스
    // if (hasZero === false) {
    //     bin.shift();
    //     bin.unshift(1, 0);
    // }
    // 찾은 bin값을 10진수로 바꾸어 result배열로
    let idx = 1;
    let nat = 0;
    for (let i = bin.length - 1; i >= 0; i--) {
      nat = nat + bin[i] * idx;
      idx = idx * 2;
    }
    result.push(nat);
  }
  return result;
}
