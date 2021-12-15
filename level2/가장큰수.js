// 어제 본것 -> sort의 compareFunction을 이런식으로도 활용할 수 있다는걸 알아두자!

function solution(numbers) {
  let strNum = numbers.map((num) => String(num));
  let sorted = strNum.sort((a, b) => Number(b + a) - Number(a + b));

  let result = sorted.join("");
  if (Number(result) === 0) {
    return "0";
  }
  // numbers가 0 만 여러개를 요소로 가질 경우 result가 "000...0" 이런모양이 되게 되버린다.
  // number해주면 중복된0제거됨. 다시 string해서 문자열로 리턴
  return result;
}

// 내가 떠올린 방법은... 버블소트? -> 시간초과뜬다 ㅠㅠ
// function solution(numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         let swaps = 0;
//         for (let j = 0; j < numbers.length - 1 - i; j++) {
//             let case1 = String(numbers[j]) + String(numbers[j + 1]);
//             let case2 = String(numbers[j + 1]) + String(numbers[j]);
//             if (Number(case1) < Number(case2)) {
//                 swaps++;
//                 [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
//             }
//         }
//         if (swaps === 0) {
//             break;
//         }
//     }

//     let result = numbers.join('');
//     if (Number(result) === 0) {
//         return "0";
//     }
//     return result;
// }
