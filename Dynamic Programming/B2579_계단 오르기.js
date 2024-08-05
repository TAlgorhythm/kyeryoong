// B2579. 계단 오르기
// [백준] https://www.acmicpc.net/problem/2579

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const stairs = [];

for (let i = 0; i < n; i++) {
  stairs.push(Number(input[i + 1]));
}

function solution(stairs) {
  // dp[i]: 계단이 i개인 경우 얻을 수 있는 총 점수의 최댓값
  const dp = new Array(n).fill(0);

  // 계단이 1개인 경우
  if (n === 1) {
    return stairs[0];
  }

  // 계단이 2개인 경우
  else if (n === 2) {
    return stairs[0] + stairs[1];
  }

  // 계단이 3개 이상인 경우
  else {
    dp[0] = stairs[0];
    dp[1] = stairs[0] + stairs[1];

    let case1 = stairs[0] + stairs[2];
    let case2 = stairs[1] + stairs[2];

    dp[2] = Math.max(case1, case2);

    for (let i = 3; i < n; i++) {
      // 현재 계단을 밟고, 이전 계단을 밟지않는 경우
      const case1 = stairs[i] + dp[i - 2];

      // 현재 계단과 이전 계단을 밟고, 2번째 이전 계단은 밟지않는 경우
      const case2 = stairs[i] + stairs[i - 1] + dp[i - 3];

      dp[i] = Math.max(case1, case2);
    }

    return dp[n - 1];
  }
}

console.log(solution(stairs));
