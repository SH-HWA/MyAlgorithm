// a,b 참가자는 계속 이긴다고 가정함(총 참가자수 = n)
// 몇번째 라운드에서 서로 만날 수 있는지 리턴 하는 함수.  -> 만나는 조건 a,b의 참가자번호 차이가1이고 작은값이 홀수일때!
// 원래번호: num / 승리시 다음라운드에서 부여받게되는 번호: 올림(num/2)

function solution(n, a, b) {
  // 최대라운드 수(2의 몇승인지?)
  let maxR = Math.log2(n);
  let small = Math.min(a, b);
  let large = Math.max(a, b);
  let count = 1;
  while (count <= maxR) {
    // 둘이 붙는 경우
    if (large - small === 1 && large % 2 === 0) {
      return count;
    }
    // 다음 라운드 번호 부여
    small = Math.ceil(small / 2);
    large = Math.ceil(large / 2);
    count++;
  }
}
