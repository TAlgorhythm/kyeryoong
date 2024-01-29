// B2003. 수들의 합 2
// [백준] https://www.acmicpc.net/problem/2003

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 수열의 크기 N와 숫자 M
const [n, m] = input[0].split(" ").map(Number);

// 수열 A
const a = input[1].split(" ").map(Number);

function solution(n, m, a) {
  // [Key Point] 투 포인터 사용
  var left = 0;
  var right = 0;

  // 수들의 합
  var total = a[0];

  // 경우의 수
  var answer = 0;

  while (true) {
    // 수들의 합이 M보다 작은 경우: 다음 숫자를 추가
    if (total < m) {
      right = right + 1;
      total = total + a[right];

      // 오른쪽 포인터가 마지막 숫자에 도달한 경우: 반복문 종료
      if (right === n) {
        break;
      }
    }

    // 수들의 합이 M보다 큰 경우: 맨 처음의 숫자를 제거
    else if (total > m) {
      total = total - a[left];
      left = left + 1;
    }

    // 수들의 합이 M과 같은 경우: 맨 처음의 숫자를 제거하고 경우의 수 증가
    else {
      total = total - a[left];
      left = left + 1;

      answer = answer + 1;
    }
  }

  return answer;
}

console.log(solution(n, m, a));
