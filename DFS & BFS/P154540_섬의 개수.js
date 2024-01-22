// P154540. 섬의 개수
// [프로그래머스] https://school.programmers.co.kr/learn/courses/30/lessons/154540

function solution(maps) {
  const rows = maps.length;
  const columns = maps[0].length;

  for (let i = 0; i < maps.length; i++) {
    maps[i] = maps[i].split("");
  }

  let count;

  function DFS(x, y) {
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];

    count = count + Number(maps[x][y]);
    maps[x][y] = "X";

    for (let i = 0; i < 4; i++) {
      var nx = x + dx[i];
      var ny = y + dy[i];

      if (
        0 <= nx &&
        nx < rows &&
        0 <= ny &&
        ny < columns &&
        maps[nx][ny] !== "X"
      ) {
        DFS(nx, ny);
      }
    }
  }

  answer = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (maps[i][j] !== "X") {
        count = 0;
        DFS(i, j);
        answer.push(count);
      }
    }
  }

  if (answer.length > 0) {
    return answer.sort((a, b) => a - b);
  } else {
    return [-1];
  }
}

console.log(solution(["X591X", "X1X5X", "X231X", "1XXX1"]));
console.log(solution(["XXX", "XXX", "XXX"]));
