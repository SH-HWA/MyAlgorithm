// 중복되는 원소가 없는 튜플이 주어짐(원소에 정해진 순서가 있음)
// 입력받는 s는 중괄호에 쌓여져있긴하지만 객체는 아닌 이상한 형태... 변환하자
// 문제가 이해가 안되서 튜플을 찾아봄: 집합에서 가장 빈번히 나온 숫자 순으로 튜플이 구성(https://ko.wikipedia.org/wiki/%ED%8A%9C%ED%94%8C)

function solution(s) {
  // 이중배열 형태로 s를 변환
  // s = s.replaceAll('{', '').replaceAll('}}', '').replaceAll('},', '!');
  // 아... replaceAll이 es6라 프로그래머스에서 지원을 하지 않는것 같다 ㅠㅠ...
  // 정규식을 활용 -> * g : 발생할 모든 pattern에 대한 전역 검색 * i : 대/소문자 구분 안함
  s = s.replace(/{/gi, "").replace(/}}/gi, "").replace(/},/gi, "!");
  let arrS = s.split("!").map((el) => el.split(","));
  // 가장 빈번히 나온 순으로 구성되게..
  let countObj = {};
  for (let i = 0; i < arrS.length; i++) {
    for (let j = 0; j < arrS[i].length; j++) {
      if (countObj[arrS[i][j]]) {
        countObj[arrS[i][j]]++;
      } else {
        countObj[arrS[i][j]] = 1;
      }
    }
  }
  // 객체를 [[키1, 값], [키2, 값], ... ]형태의 배열로 바꾸고 1번째인자로 sort를 돌림
  let forSort = [];
  for (let nums in countObj) forSort.push([nums, countObj[nums]]);
  forSort.sort((a, b) => {
    return b[1] - a[1];
  });
  // 정렬된 배열에서 키값들만을 Number()해서 리턴
  return forSort.map((el) => Number(el[0]));
}
