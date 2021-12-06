// str1, str2 입력받음
// 두 글자씩 끊어서 다중집합의 원소로 만듬(영문자로 된 글자 쌍만 유효, -> 아닐시 버림) .. 두글자씩 끊기는 조합과는 다른개념임
// 대소문자 차이는 무시
// 자카드 유사도를 출력! (유사도 값 * 65536 후 소수점아래 버리고 정수부만 출력)

// 정규식을 이용하면 더 깔끔하지 않을까..?
function findTwoSet(str) {
  let twoSet = [];
  let letterSet = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < str.length - 1; i++) {
    let first = str[i];
    let second = str[i + 1];
    if (letterSet.includes(first) && letterSet.includes(second)) {
      twoSet.push(first + second);
    }
  }
  return twoSet;
}

function solution(str1, str2) {
  let set1 = findTwoSet(str1.toLowerCase());
  let set2 = findTwoSet(str2.toLowerCase());
  // 교집합 과 합집합 찾는다.
  let intersection = [];
  let union = [];
  // 배열의 길이가 짧은 세트를 찾아 순회한다.
  let shorter = set1;
  let longer = set2;
  if (set1.length > set2.length) {
    shorter = set2;
    longer = set1;
  }
  // 원소중복허용하는 다중집합 고려하려면 교집합찾을때 반대편에서 지워주는 작업이 필요("aaabb", "aabbb" 넣은것을 보면 이해할수 있다!)
  let cloneLong = longer.slice();
  for (let i = 0; i < shorter.length; i++) {
    debugger;
    if (cloneLong.includes(shorter[i])) {
      intersection.push(shorter[i]);
      let idx = cloneLong.indexOf(shorter[i]);
      cloneLong.splice(idx, 1);
    } else {
      union.push(shorter[i]); //short에만 있는 요소들
    }
  }
  union = union.concat(longer); // 숏에만 + 롱전체 -> 합집합
  // 자카드 유사도 계산
  console.log(shorter, longer, intersection, union);
  let jaccard = intersection.length / union.length;
  if (intersection.length === 0 && union.length === 0) {
    jaccard = 1;
  }
  return Math.floor(jaccard * 65536);
}
