// B11728. 배열 합치기
// [백준] https://www.acmicpc.net/problem/11728

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 두 배열 A, B의 크기
const [n, m] = input[0].split(" ").map(Number);

// 두 배열 A, B
const a = input[1].trim().split(" ").map(Number);
const b = input[2].trim().split(" ").map(Number);

function solution(n, m, a, b) {
  // [Key Point] 투 포인터 사용
  var pa = 0;
  var pb = 0;

  // 정답 배열
  var answer = [];

  // 두 배열의 포인터가 범위 안에 있는 경우에만 반복문 실행
  while (pa < n && pb < m) {
    // 배열 A의 원소가 배열 B의 원소보다 큰 경우
    // (1) 배열 B의 원소를 정답 배열에 삽입
    // (2) 배열 B의 포인터를 증가
    if (a[pa] > b[pb]) {
      answer.push(b[pb]);
      pb = pb + 1;
    }

    // 배열 A의 원소가 배열 B의 원소보다 작거나 같은 경우
    // (1) 배열 A의 원소를 정답 배열에 삽입
    // (2) 배열 A의 포인터를 증가
    else {
      answer.push(a[pa]);
      pa = pa + 1;
    }
  }

  // 배열 A의 포인터가 마지막 원소에 있지 않은 경우, 배열 A의 나머지 원소(들)을 정답 배열에 삽입
  while (pa < n) {
    answer.push(a[pa]);
    pa = pa + 1;
  }

  // 배열 B의 포인터가 마지막 원소에 있지 않은 경우, 배열 B의 나머지 원소(들)을 정답 배열에 삽입
  while (pb < m) {
    answer.push(b[pb]);
    pb = pb + 1;
  }

  return answer.join(" ");
}

// 정답 배열 출력
console.log(solution(n, m, a, b));
