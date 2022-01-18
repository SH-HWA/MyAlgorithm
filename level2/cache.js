function solution(cacheSize, cities) {
  let time = 0;
  let cache = new Array(cacheSize).fill(null);

  for (let i = 0; i < cities.length; i++) {
    let cur = cities[i].toLowerCase();
    // cache 크기가 0인 경우 따로 고려
    if (cache.length === 0) {
      time = time + 5;
      continue;
    }
    if (cache.includes(cur)) {
      time = time + 1;
      let idx = cache.indexOf(cur);
      cache.splice(idx, 1);
      cache.push(cur);
    } else {
      time = time + 5;
      cache.shift();
      cache.push(cur);
    }
  }

  return time;
}
