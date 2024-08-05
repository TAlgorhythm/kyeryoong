// B11727. 2×n 타일링 2
// [백준] https://www.acmicpc.net/problem/11727

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

  // dp[2]: 2×1 크기의 직사각형을 가득 채울 수 있는 경우의 수는 세 가지
  // 2×1 타일 두 개, 1×2 타일 두 개, 2×2 타일 한 개
  dp[2] = 3;

  for (let i = 3; i < n + 1; i++) {
    // 첫 번째 경우의 수
    // 2×(n-1) 직사각형 + 2×1 타일 한 개
    const case1 = dp[i - 1];

    // 두 번째 경우의 수
    // 2×(n-2) 직사각형 + 1×2 타일 두 개
    // 2×(n-2) 직사각형 + 2×2 타일 한 개
    const case2 = 2 * dp[i - 2];

    // [Key Point] 2×(n-2) 직사각형 + 2×1 타일 두 개인 경우는 첫 번째 경우의 수와 겹치기 때문에 계산하지 않음

    dp[i] = (case1 + case2) % 10007;
  }

  return dp[n];
}

console.log(solution(n));
