// 뚫리는 사각형 갯수의 패턴을 찾자
// 항상 가로길이만큼 & 세로길이만큼 한번씩은 다 뚫고감 but 뚫고지나는 대각선이 모서리에 맞닿게 되면 가로1개 세로1개가 잘리는게 아니라 총1개만 잘리게 된다.
// 모서리에 맞닿는 경우는 (가로/세로 길이의 최대공약수)번 만큼 발생함. 예로 본 8/12 의경우 4번발생하게됨.(1:1.5 비율로 설명도 가능) -> 공약수로 나눈다는것은 같은비율로 공약수번 만큼 반복할 수 있음을  의미하니까(모서리도 같은 번 만큼 반복됨!)
// 정리해보면 "가로길이"번만큼 세로선을 뚫음, "세로길이"번만큼 가로선을 뚫음 + 뚫고가다가 모서리에 맞닿는경우는 자르는 사각형 갯수가 가로1,세로1 느는것이 아닌 1개만 늘음 + 모서리에 맞닿는 횟수 = 최대공약수

// 유클리드 호제법을 이용한 최대공약수 찾는함수
function findGcd(a, b) {
  if (b >= a) {
    return b % a === 0 ? a : findGcd(a, b % a);
  }
  return a % b === 0 ? b : findGcd(b, a % b);
}

// 총 사각형의 개수 - 잘린사각형 개수를 찾는함수
function solution(w, h) {
  let total = w * h;
  let sliced = w + h - findGcd(w, h);

  return total - sliced;
}
