// B1463. 1로 만들기
// [백준] https://www.acmicpc.net/problem/1463

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);

function solution(n) {
  const dp = Array(n + 1).fill(0);

  for (let i = 2; i < n + 1; i++) {
    dp[i] = dp[i - 1] + 1;

    if (i % 3 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    }

    if (i % 2 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    }
  }

  return dp[n];
}

console.log(solution(n));
