// B2839. 설탕 배달
// [백준] https://www.acmicpc.net/problem/2839

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);

function solution(n) {
  // dp[i]: i킬로그램 배달해야 할 때, 가져가야 하는 최대한 적은 봉지의 수
  const dp = new Array(n + 1).fill(-1);

  // 3 또는 5킬로그램 배달해야 하는 경우, 봉지 1개를 가져가면 됨
  dp[3] = 1;
  dp[5] = 1;

  // 6킬로그램 부터 계산
  for (let i = 6; i < n + 1; i++) {
    // [Key Point] 3킬로그램과 5킬로그램을 덜고 배달할 수 있는지 확인
    // i킬로그램에서 3킬로그램을 덜고 배달할 수 있는 경우
    const case1 = dp[i - 3] !== -1 ? dp[i - 3] + 1 : undefined;
    // i킬로그램에서 5킬로그램을 덜고 배달할 수 있는 경우
    const case2 = dp[i - 5] !== -1 ? dp[i - 5] + 1 : undefined;

    // 3킬로그램을 덜었을 때와 5킬로그램을 둘 다 덜고 배달할 수 있는 경우: 3/5 킬로그램을 덜고 배달했을 때 봉지 개수가 작은 것 + 1
    if (case1 && case2) {
      dp[i] = Math.min(case1, case2);
    }

    // 3킬로그램을 덜었을 때 배달할 수 있는 경우: 3킬로그램을 덜고 배달했을 때 봉지 개수 + 1
    else if (case1 && !case2) {
      dp[i] = case1;
    }

    // 5킬로그램을 덜었을 때 배달할 수 있는 경우: 5킬로그램을 덜고 배달했을 때 봉지 개수 + 1
    else if (!case1 && case2) {
      dp[i] = case2;
    }
  }

  console.log(dp[n]);
}

solution(n);
