// B10026. 적록색약
// [백준] https://www.acmicpc.net/problem/10026

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const grid = [];

for (let i = 0; i < n; i++) {
  grid.push([...input[i + 1]]);
}

function solution(grid) {
  const origin_grid = JSON.parse(JSON.stringify(grid));

  function DFS(x, y, color) {
    if (!(0 <= x && x < n && 0 <= y && y < n)) {
      return false;
    }

    if (grid[x][y] == color) {
      grid[x][y] = "X";

      DFS(x - 1, y, color);
      DFS(x + 1, y, color);
      DFS(x, y - 1, color);
      DFS(x, y + 1, color);

      return true;
    }

    return false;
  }

  var answer1 = 0;
  var answer2 = 0;

  for (color of ["R", "G", "B"]) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (DFS(i, j, color)) {
          answer1 = answer1 + 1;
        }
      }
    }
  }

  grid = origin_grid;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "G") {
        grid[i][j] = "R";
      }
    }
  }

  for (color of ["R", "B"]) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (DFS(i, j, color)) {
          answer2 = answer2 + 1;
        }
      }
    }
  }

  console.log(answer1, answer2);
}

solution(grid);
