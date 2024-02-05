// B3273. 수들의 합 2
// [백준] https://www.acmicpc.net/problem/3273

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 수열의 크기 n
const n = Number(input[0]);

// 수열 a
const a = input[1].split(" ").map(Number);

// 자연수 x
const x = Number(input[2]);

function solution(n, a, x) {
  // [Key Point] 투 포인터 사용
  var left = 0;
  var right = n - 1;

  // [Key Point] 맨 처음 수열을 정렬
  a.sort((a, b) => a - b);

  // 경우의 수
  var answer = 0;

  // 왼쪽 포인터의 위치가 오른쪽 포인터의 위치보다 작을 때 까지 반복문 수행
  while (left < right) {
    // 두 수의 합
    const total = a[left] + a[right];

    // 두 수의 합이 x보다 작은 경우: 왼쪽 포인터 증가(= 두 수의 합을 증가)
    if (total < x) {
      left = left + 1;
    }
    // 두 수의 합이 x보다 큰 경우: 오른쪽 포인터 감소(= 두 수의 합을 감소)
    else if (total > x) {
      right = right - 1;
    }
    // 두 수의 합이 x와 일치하는 경우: 오른쪽 포인터 감소(= 두 수의 합을 감소)
    else if (total === x) {
      // 경우의 수 증가
      answer = answer + 1;
      right = right - 1;
    }
  }

  return answer;
}

console.log(solution(n, a, x));
