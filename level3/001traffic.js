// 1초간 처리하는 요청의 최대 개수(완료 기준이 아니다. 동시에 처리중인 최대 개수)
// 타임아웃 3초(요청 처리는 최대3초까지만)

//초가 고정된게 아니었다 ㅠㅠ 밀리세컨단위로 고려해줘야...

function solution(lines) {
  // 등장하는 초를 저장한 객체
  let secObj = {};
  // 각 작업별 시작시간을 구하기
  let startLines = lines.map((line) => {
    let [date, time, dur] = line.split(" ");
    let hour = time.slice(0, 2);
    let min = time.slice(3, 5);
    let sec = time.slice(6);
    // 어제부터시작된 작업인지? / 하루를넘길경우를 대비 오늘에 걸친 작업시간을 계산
    let isYest = false;
    let todayDur = Number(sec);
    // 시작시간찾기과정
    sec = (Number(sec) - Number(dur.slice(0, -1))).toFixed(3);
    if (sec < 0) {
      sec = sec + 60;
      min = Number(min) - 1;
    }
    if (min < 0) {
      min = min + 60;
      hour = Number(hour) - 1;
    }
    if (hour < 0) {
      isYest = true;
    }
    // 시간을 전부 초단위로 변환하여 계산시도?
    // let startTime = `${hour}:${min}:${sec}`;
    let startTime = hour * 60 * 60 + min * 60 + sec;
    if (isYest) {
      startTime = 0;
      dur = todayDur;
    }
    return [startTime, dur];
  });

  // 각 시작지점마다 현재 몇개가 돌아가고 있는지 알면 되지 않을까?
  let maxCount = 0;
  for (let i = 0; i < startLines.length; i++) {
    let curPoint = startLines[i][0];
    let curCount = 1;
    for (let j = 0; j < startLines.length; j++) {
      let comparePoint = startLines[j][0];
      let compareDur = startLines[j][1];
      if (comparePoint <= curPoint && comparePoint + compareDur >= curPoint) {
        curCount++;
      }
    }
    if (curCount > maxCount) {
      maxCount = curCount;
    }
  }

  return maxCount;
}
