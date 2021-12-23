// 고생했던 점: 1. 예제2 설명에 두 번째 로그 시작시간을보면 .001로 끝나는걸 알 수 있음 1초는 0.001 ~ 1.000 이렇게 1000밀리초 였던 것이다.
// 2. 하루 단위를 넘어갈 때 작업시작 시간 지속시간을 어떻게 바꿔줄 것인지?

function solution(lines) {
  let endTimesBySec = lines.map((line) => {
    let [date, time, dur] = line.split(" ");
    let hour = time.slice(0, 2);
    let min = time.slice(3, 5);
    let sec = time.slice(6);
    dur = dur.slice(0, -1);
    // 어제부터시작된 작업인지? / 하루를넘길경우를 대비 오늘에 걸친 작업시간을 계산
    let isYest = false;
    let todayDur = Number(sec);
    // 초단위로 환산함
    let secTime = (
      Number(hour) * 60 * 60 +
      Number(min) * 60 +
      Number(sec)
    ).toFixed(3);
    if ((secTime - dur).toFixed(3) < 0) {
      dur = secTime;
    }
    return [secTime, dur];
  });

  // 각 종료시점마다
  let maxCount = 0;
  for (let i = 0; i < endTimesBySec.length; i++) {
    let curEnd = Number(endTimesBySec[i][0]);
    let curDur = Number(endTimesBySec[i][1]);
    let curEndPlus1 = Number((curEnd + 1 - 0.001).toFixed(3));
    let curCount = 1;
    for (let j = 0; j < endTimesBySec.length; j++) {
      if (i === j) {
        continue;
      }
      let compareEnd = Number(endTimesBySec[j][0]);
      let compareDur = Number(endTimesBySec[j][1]);
      let compareStart = compareEnd - compareDur + 0.001;
      debugger;
      if (curEnd <= compareEnd && curEndPlus1 >= compareStart) {
        curCount++;
      }
    }
    if (curCount > maxCount) {
      maxCount = curCount;
    }
  }

  return maxCount;
}
