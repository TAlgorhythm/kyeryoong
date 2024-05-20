// B1003. 피보나치 함수
// [백준] https://www.acmicpc.net/problem/1003

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

function solution(n) {
  // dp0[i]: fibonacci(i)를 호출했을 때, 0이 출력된 횟수
  const dp0 = new Array(n + 1).fill(0);
  // dp1[i]: fibonacci(i)를 호출했을 때, 1이 출력된 횟수
  const dp1 = new Array(n + 1).fill(0);

  // fibonacci(0)은 0을 1번, 1을 0번 출력
  dp0[0] = 1;
  dp1[0] = 0;

  // fibonacci(1)은 0을 0번, 1을 1번 출력
  dp0[1] = 0;
  dp1[1] = 1;

  for (let i = 2; i < n + 1; i++) {
    dp0[i] = dp0[i - 1] + dp0[i - 2];
    dp1[i] = dp1[i - 1] + dp1[i - 2];
  }

  console.log(dp0[n], dp1[n]);
}

test_cases.forEach((test_case) => solution(test_case));
