// B2559. 수열
// [백준] https://www.acmicpc.net/problem/2559

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 전체 날짜의 수 N, 연속적인 날짜의 수 K
const [n, k] = input[0].split(" ").map(Number);

// 매일 측정한 온도
const temperatures = input[1].split(" ").map(Number);

function solution(n, k, temperatures) {
  // [Key Point] 투 포인터 사용
  let left = 0;
  let right = k;

  // 연속적인 K일 동안 온도의 합
  let total = 0;

  for (let i = 0; i < k; i++) {
    total = total + temperatures[i];
  }

  // 온도의 합의 최대값
  answer = total;

  // 마지막날 까지 반복문 수행
  while (right < n) {
    // 연속적인 K일 중, 맨 앞의 날의 온도를 빼고, 다음 날의 온도를 더함
    total = total - temperatures[left] + temperatures[right];

    // 투 포인터 이동
    left = left + 1;
    right = right + 1;

    // 최대값 확인
    answer = answer >= total ? answer : total;
  }

  return answer;
}

console.log(solution(n, k, temperatures));
