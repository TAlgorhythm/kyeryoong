// B1932. 정수 삼각형
// [백준] https://www.acmicpc.net/problem/1932

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const triangle = [];
const size = input[0];

for (let i = 0; i < size; i++) {
  triangle.push(input[i + 1].split(" ").map(Number));
}

function max(a, b) {
  return a > b ? a : b;
}

function solution(triangle) {
  for (let i = 1; i < size; i++) {
    triangle[i][0] = triangle[i - 1][0] + triangle[i][0];

    for (let j = 1; j < triangle[i].length - 1; j++) {
      triangle[i][j] = max(
        triangle[i][j] + triangle[i - 1][j],
        triangle[i][j] + triangle[i - 1][j - 1]
      );
    }

    triangle[i][i] = triangle[i - 1][i - 1] + triangle[i][i];
  }

  console.log(triangle[size - 1].sort((a, b) => b - a)[0]);
}

solution(triangle);
