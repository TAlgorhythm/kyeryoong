// B2156. 포도주 시식
// [백준] https://www.acmicpc.net/problem/2156

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const wines = [];

for (let i = 0; i < n; i++) {
  wines.push(Number(input[i + 1]));
}

function solution(wines) {
  // dp[i]: i번째 포도주까지 있을 때, 마실 수 있는 가장 많은 양의 포도주
  const dp = new Array(n).fill(0);

  // 포도주가 총 한 잔인 경우
  dp[0] = wines[0];

  // 포도주가 총 두 잔인 경우
  dp[1] = wines[0] + wines[1];

  // 포도주가 총 세 잔인 경우
  dp[2] = Math.max(
    wines[0] + wines[1],
    wines[0] + wines[2],
    wines[1] + wines[2]
  );

  for (let i = 3; i < n; i++) {
    // 이번 잔(i)를 마시고, 앞 잔(i - 1)을 마시지 않는 경우
    const case1 = dp[i - 2] + wines[i];

    // 이번 잔(i)와 앞 잔(i - 1)을 마시고, 두 번째 앞 잔(i - 2)를 마시지 않는 경우
    const case2 = dp[i - 3] + wines[i - 1] + wines[i];

    // 이번 잔(i)를 마시지 않는 경우
    const case3 = dp[i - 1];

    dp[i] = Math.max(case1, case2, case3);
  }

  return dp[n - 1];
}

console.log(solution(wines));
