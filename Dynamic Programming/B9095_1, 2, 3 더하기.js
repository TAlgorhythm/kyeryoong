// B9095. 1, 2, 3 더하기
// [백준] https://www.acmicpc.net/problem/9095

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const t = Number(input[0]);
const test_cases = [];

for (let i = 0; i < t; i++) {
  test_cases.push(Number(input[i + 1]));
}

function solution(test_cases) {
  const dp = [1, 2, 4];

  // 테스트 케이스 중 가장 큰 값
  const max_test_case = Math.max(...test_cases);

  // [Key Point] dp[n] = dp[n - 1] + dp[n - 2] + dp[n - 3]
  // dp[n - 1] = 숫자 n-1에 1을 더한 경우
  // dp[n - 2] = 숫자 n-2에 2을 더한 경우
  // dp[n - 3] = 숫자 n-3에 3을 더한 경우
  for (let i = 3; i < max_test_case; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  test_cases.forEach((test_case) => console.log(dp[test_case - 1]));
}

solution(test_cases);
