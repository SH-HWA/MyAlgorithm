function solution(clothes) {
  let cObj = {};
  clothes.forEach(([name, type]) => {
    if (!cObj[type]) {
      cObj[type] = [name];
    } else {
      cObj[type].push(name);
    }
  });
  let result = 1;
  // 헤드기어가 2개라면 안고르는 경우까지 고려해야하므로 가능한 경우의수=3
  for (let key in cObj) {
    result = result * (cObj[key].length + 1);
  }
  // 모든 종류에서 아무것도 안고른 경우는 제외
  return result - 1;
}
