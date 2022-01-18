let gapja = function () {
  let a = ["갑", "을", "병", "정", "무", "기", "경", "신", "임", "계"];
  let b = [
    "자",
    "축",
    "인",
    "묘",
    "진",
    "사",
    "오",
    "미",
    "신",
    "유",
    "술",
    "해",
  ];

  let result = [];
  let idx = 0;
  while (true) {
    let cur = a[idx % 10] + b[idx % 12];
    if (result.includes(cur)) {
      break;
    } else {
      result.push(cur);
    }

    idx++;
  }

  return result;
};
