// info 에는 지원자들의 정보, query에는 회사가 원하는 조건
// idx를 활용한 탐색이 가능하도록 정보들을 가공해보자

function solution(info, query) {
  let applicant = info.map((el) => {
    let arr = el.split(" ");
    let strQ = arr.slice(0, -1).join("");
    let numQ = arr[arr.length - 1];
    return [strQ, numQ];
  });
  let condition = query.map((el) => {
    let arr = el.split(" and ");
    let lastEl = arr.pop().split(" ");
    let strQ = arr.join(" ") + " " + lastEl[0];
    let numQ = lastEl[1];
    return [strQ, numQ];
  });

  let result = [];

  for (let i = 0; i < condition.length; i++) {
    let filteredA = applicant.filter(
      (el) => Number(el[1]) >= Number(condition[i][1])
    );
    let curQ = condition[i][0]
      .replace(/ /gi, "")
      .split("-")
      .filter((q) => q !== "");
    let filteredB = filteredA.filter((el) => {
      let isCont = true;
      curQ.forEach((cq) => {
        if (!el[0].includes(cq)) {
          isCont = false;
        }
      });
      return isCont;
    });
    result.push(filteredB.length);
  }
  return result;
}
