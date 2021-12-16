// 알파벳 전체를 담은 배열or문자열 만들어 인덱스로 접근
// 각 글자별 조이스틱 조작 횟수의 최솟값?
// 상황별 커서이동횟수 // 글자변경횟수 둘다 고려! (초기 값은 목표 문자와 길이가 같은 AAAAAA...AA 로 이루어져있음)
// 커서 이동횟수를 고려해야하는 경우 뭐가있을까? 1. 다음글자가 A인경우 ( < 로이동해서 맨앞을 뚫고 뒤로부터 갈지 / > 로 이동해서 A를 넘어갈지)

function solution(name) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const length = name.length;
  let input = "";
  while (input.length !== length) {
    input = input + "A";
  }
  // 총조작횟수
  let count = 0;

  let cur = 0;
  while (input !== name) {
    //현재글자변경&다음글자이동 조작횟수
    let move = 0;
    // 현재 인덱스가A가 아닌경우 변경하는과정
    if (name[cur] !== "A") {
      let tarIdx = alphabet.indexOf(name[cur]);
      // tarIdx가 13이면 앞에서 가던 뒤에서 가던 이동횟수가 같고 나머지는 인덱스가 작다면 > 크다면 < 로 이동하는게 유리
      if (tarIdx > 13) {
        move = Math.abs(tarIdx - 26);
      } else {
        move = tarIdx;
      }
      // 이동을 반영했으니 네임의 해당문자로 변경
      input = input.slice(0, cur) + name[cur] + input.slice(cur + 1);
    }
    // 다음 인덱스로 이동하는 과정 (우측이동/좌측이동 비교하여 'A'가 아닌걸 만나는 이동횟수가 적은걸 찾아서 이동)
    let left = 0;
    let right = 0;
    for (let i = 1; i < name.length; i++) {
      left = cur - i;
      if (left < 0) {
        left = name.length + left; // 음수임에 주의
      }
      right = cur + i;
      if (right >= name.length) {
        right = right - name.length;
      }
      // 이동조건
      if (name[right] !== "A" && name[right] !== input[right]) {
        cur = right;
        move = move + i;
        break;
      }
      if (name[left] !== "A" && name[left] !== input[left]) {
        cur = left;
        move = move + i;
        break;
      }
    }
    count = count + move;
  }

  return count;
}
