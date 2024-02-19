// B11726. 2×n 타일링
// [백준] https://www.acmicpc.net/problem/11726

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);

function solution(n) {
  // dp[i]: 2×n 크기의 직사각형을 가득 채울 수 있는 경우의 수
  const dp = new Array(n + 1).fill(0);

  // dp[1]: 2×1 크기의 직사각형을 가득 채울 수 있는 경우의 수는 한 가지
  dp[1] = 1;

  // dp[2]: 2×2 크기의 직사각형을 가득 채울 수 있는 경우의 수는 두 가지
  dp[2] = 2;

  for (let i = 3; i < n + 1; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }

  return dp[n];
}

console.log(solution(n));
