// B10826. 피보나치 수
// [백준] https://www.acmicpc.net/problem/10826

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);

function solution(n) {
  // dp[i]: 피보나치의 수를 담는 배열
  // [Key Point] Infinity 범위 보다 큰 수를 계산하기 위해 Number 자료형 대신 BigInt 자료형 사용
  const dp = new Array(n + 1).fill(BigInt(0));

  // 피보나치 수열 초기값
  dp[1] = 1;
  dp[2] = 1;

  for (let i = 3; i < n + 1; i++) {
    dp[i] = BigInt(dp[i - 2]) + BigInt(dp[i - 1]);
  }

  // BigInt의 값 마지막에 있는 문자 n을 제거하여 출력
  return String(dp[n]).replace("n", "");
}

console.log(solution(n));
