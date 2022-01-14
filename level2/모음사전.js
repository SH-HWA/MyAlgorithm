// function solution(word) {
//     let dictionary = [];
//     let vowel = ['A', 'E', 'I', 'O', 'U'];

//     function makeWord(str) {
//         if (str.length >= 5) {
//             return;
//         }

//         for (let i = 0; i < vowel.length; i++) {
//             let newStr = str + vowel[i];
//             dictionary.push(newStr);
//             makeWord(newStr);
//         }
//     }

//     makeWord('');
//     return dictionary.indexOf(word) + 1;
// }

// 사전을 직접 만들어 찾는것 말고 자릿수마다 사전에 5의 거듭제곱씩 더한 수를 더해나가서 계산하는 방법
// 5의0승 부터 시작되는자리~ / +5~ / +25~ / +125~ / +625~ 인덱스가 아닌 순서니까 0이 아닌 1부터 시작함을 고려
// [1, 6, 31, 156, 781]
function solution(words) {
  let wordArr = words.split("");
  let vowel = ["A", "E", "I", "O", "U"];
  let idxArr = [1, 6, 31, 156, 781];
  let answer = 0;
  for (let i = 0; i < wordArr.length; i++) {
    answer = answer + idxArr[4 - i] * vowel.indexOf(wordArr[i]) + 1;
  }

  return answer;
}
