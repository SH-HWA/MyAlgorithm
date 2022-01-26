// 현재 스킬이 선행스킬이 필요한지 여부?
// 선행스킬 순서를 위배하지 않았는지 여부?

function solution(skill, skill_trees) {
  let count = 0;

  for (let i = 0; i < skill_trees.length; i++) {
    let queue = skill.split("");
    for (let j = 0; j < skill_trees[i].length; j++) {
      // 선행스킬이 필요한 스킬인데, 순서를 안지켰을 경우 다음 스킬트리검토로 넘어감(break)
      if (skill.includes(skill_trees[i][j])) {
        if (skill_trees[i][j] !== queue[0]) {
          break;
        } else {
          queue.shift();
        }
      }
      // 마지막글자까지 조건에 걸러지지 않을 경우 count++
      if (j === skill_trees[i].length - 1) {
        count++;
      }
    }
  }

  return count;
}
