// B9461. 파도반 수열
// [백준] https://www.acmicpc.net/problem/9461

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
  const p = [1, 1, 1];

  // 테스트 케이스 중 가장 큰 값
  const max_test_case = Math.max(...test_cases);

  // [Key Point] 파도반 수열의 규칙
  // p[n] = p[n - 2] + p[n - 3]
  // p[n] = p[n - 1] + p[n - 5]
  for (let i = 3; i < max_test_case; i++) {
    p[i] = p[i - 2] + p[i - 3];
  }

  test_cases.forEach((test_case) => console.log(p[test_case - 1]));
}

solution(test_cases);
