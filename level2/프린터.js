function solution(priorities, location) {
  // priorities 복사하고 내림차순정렬한 sorted
  let sorted = priorities.slice().sort((a, b) => b - a);
  let count = 0;
  let cur = location;
  for (let i = 0; i < priorities.length; i++) {
    debugger;
    // 전체적인 출력흐름
    if (priorities[i] < sorted[0]) {
      priorities.push(priorities[i]);
      if (i === cur) {
        cur = priorities.length - 1;
      }
    } else {
      count++;
      sorted.shift();
      if (i === cur) {
        break;
      }
    }
  }
  return count;
}
