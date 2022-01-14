function solution(word) {
  let dictionary = [];
  let vowel = ["A", "E", "I", "O", "U"];

  function makeWord(str) {
    if (str.length >= 5) {
      return;
    }

    for (let i = 0; i < vowel.length; i++) {
      let newStr = str + vowel[i];
      dictionary.push(newStr);
      makeWord(newStr);
    }
  }

  makeWord("");
  return dictionary.indexOf(word) + 1;
}

// 사전을 직접 만들어 찾는것 이외에 자릿수마다 사전에 5의 거듭제곱씩 더한 수를 더해나가서 계산하는 방법도 있다!
// function solution(words) {
//     return words.split('').reduce((acc, cur, idx) => acc + [781, 156, 31, 6, 1][idx] * ['A', 'E', 'I', 'O', 'U'].indexOf(cur) + 1, 0);
// }
